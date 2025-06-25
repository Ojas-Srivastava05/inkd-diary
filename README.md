Got it. Here’s a ready-to-copy README.md for your Ink’d Diary Node.js + Express web app project hosted on Render:

⸻

✍️ INK’D - Digital Diary Terminal

INK’D is a Node.js + Express web application that:
	•	Accepts diary entries via a web form
	•	Generates a beautifully styled PDF
	•	Creates a downloadable QR code linking to the PDF
	•	Uses Cohere AI to generate a rich summary
	•	Presents everything in a futuristic, animated HTML UI

Hosted on: 👉 https://inkd-diary.onrender.com

⸻

🚀 Features
	•	📝 User-friendly diary entry form
	•	📄 PDF generation using pdfkit
	•	📷 QR code generation using qrcode
	•	🤖 AI-powered summary via Cohere AI
	•	🌐 Hosted for free on Render

⸻

📁 Project Structure

inkd-diary/
│
├── public/
│   ├── form.html         # Diary form
│   ├── result.html       # Result display page
│   ├── output.pdf        # Generated PDF (after form submission)
│   ├── qr.png            # Generated QR code
│   └── summary.txt       # AI-generated summary
│
├── .env                  # Your Cohere API key
├── index.js              # Main Express server file
├── package.json          # Node.js dependencies
└── README.md             # This file


⸻

🛠️ Installation (Local)
	1.	Clone the repo

git clone https://github.com/Ojas-Srivastava05/inkd-diary.git
cd inkd-diary

	2.	Install dependencies

npm install

	3.	Add your Cohere API key

Create a .env file:

COHERE_API_KEY=your-cohere-api-key-here

	4.	Run the app locally

node index.js

Visit http://localhost:3000

⸻

🌐 Deployment (on Render)
	1.	Go to render.com
	2.	Create a new Web Service
	3.	Connect your GitHub repo
	4.	Fill the Render settings:

Setting	Value
Build Command	npm install
Start Command	node index.js
Environment Vars	COHERE_API_KEY=...

	5.	Click Deploy

Done! 🎉

⸻

📦 Dependencies
	•	Express
	•	pdfkit
	•	qrcode
	•	dotenv
	•	cohere-ai

⸻

📌 Notes
	•	Works best with longer diary entries (for detailed AI summaries)
	•	Summary generation happens on the server and saves to /public/summary.txt
	•	You can view or download the summary directly from the result page

⸻

📸 Screenshots

Coming soon…

⸻

💡 Inspiration

You wanted to make something cool with HTML, CSS, JS, and Node — and this is your first full-stack project successfully hosted! 🙌

⸻

🧠 Author

Ojas Srivastava

⸻

⚠️ Disclaimer

This is a personal project using Cohere’s free tier. For commercial use, please comply with Cohere’s terms.

⸻

Let me know if you want this as a downloadable .md file!
