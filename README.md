Understood. Here’s your clean, copy-paste README without the folder structure — straight to the point, no fluff:

⸻


# ✍️ INK'D - Digital Diary Terminal

**INK'D** is a futuristic AI-powered diary app built using Node.js, Express, HTML/CSS/JS, and Cohere API. It lets you submit diary entries, generate PDFs, get QR codes linking to them, and receive smart AI-generated summaries.

🔗 **Live App**: [https://inkd-diary.onrender.com](https://inkd-diary.onrender.com)

---

## 💡 Features

- 📝 Submit diary entries via a clean UI
- 📄 PDF is auto-generated for each entry
- 📷 QR code links to your generated PDF
- 🤖 Cohere AI summarizes the entry in detail
- 🎨 Animated, responsive frontend

---

## 🚀 Deploy on Render (for your own fork)

1. Go to [https://render.com](https://render.com)
2. Click **"New Web Service"**
3. Connect your GitHub repo
4. Use these settings:
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **Environment Variable**:  
     `COHERE_API_KEY=your_actual_key`
5. Click **Deploy**

---

## 🧪 Local Development

1. Clone the repo:
   ```bash
   git clone https://github.com/Ojas-Srivastava05/inkd-diary.git
   cd inkd-diary

	2.	Install dependencies:

npm install


	3.	Create a .env file:

COHERE_API_KEY=your_actual_key_here


	4.	Start the server:

node index.js


	5.	Open http://localhost:3000

⸻

🛡️ Security Notes
	•	Never commit your .env file to GitHub.
	•	Cohere API key must remain private.

⸻

🧠 Powered By
	•	Node.js
	•	Express.js
	•	Cohere API
	•	Render

---
