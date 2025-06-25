// index.js (Cohere Version - Final Fix)
import express from "express";
import pdfkit from "pdfkit";
import qrcode from "qrcode";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// 🔄 Import and initialize Cohere
import("cohere-ai").then(({ CohereClient }) => {
  const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY,
  });

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "public")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "form.html"));
  });

  app.post("/generate", async (req, res) => {
    const inputText = req.body.diary_entry;

    // 1. Generate PDF
    const pdfPath = path.join(__dirname, "public", "output.pdf");
    const doc = new pdfkit();
    const stream = fs.createWriteStream(pdfPath);
    doc.pipe(stream);
    doc.fontSize(16).text(inputText);
    doc.end();

    stream.on("finish", async () => {
      // 2. Generate QR Code
      const pdfURL = `http://${req.headers.host}/output.pdf`;
      const qrPath = path.join(__dirname, "public", "qr.png");
      await qrcode.toFile(qrPath, pdfURL);

      // 3. Use Cohere to summarize
      let summary = "";
      try {
        const response = await cohere.generate({
            model: "command",
            prompt: `Provide a detailed summary of the following diary entry, capturing key ideas and emotions:\n\n${inputText}`,
            max_tokens: 500,
            temperature: 0.7,
          });

        summary = response.generations[0].text.trim();
      } catch (err) {
        console.error("Cohere Error:", err);
        summary = "Could not generate summary.";
      }

      // 4. Save to summary.txt
      fs.writeFileSync(path.join(__dirname, "public", "summary.txt"), summary);

      // 5. Redirect to result
      res.redirect("/result.html");
    });
  });

  

  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
});