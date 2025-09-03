# 🧠 Edgex Backend – Groq Proxy Server (GSSoC 2025 💥)

![Badge](https://img.shields.io/badge/Backend-🚀%20LLM%20Proxy%20for%20Edgex-blue)
![Badge](https://img.shields.io/badge/GSSoC%202025-💡%20Official%20Project-purple)
![Badge](https://img.shields.io/badge/MIT-License-green)
[discord](https://discord.gg/rnfEbBPBgE)

> ⚙️ Lightweight Express.js backend to securely proxy requests to the **Groq API** for blazing-fast LLM-powered responses — used by **Edgex Frontend** (MoodMirror + CareerCrack).

---

## 🔥 What is This?

This server powers **Edgex**, an AI-powered mentorship suite for Gen Z, by securely routing LLM queries through the backend — protecting your API keys and managing CORS.

Edgex’s AI features like career guidance and relationship insights rely on this backend to talk to **Groq's LLaMA 3** models at lightning speed ⚡

---

## 🌐 Live Deployment

- 🔗 Hosted URL: [https://edgex-backend.onrender.com](https://edgex-backend.onrender.com)
- 🔁 Endpoint: `POST /api/groq`

---

## ⚙️ Tech Stack

| Tech        | Purpose                                 |
|-------------|------------------------------------------|
| Node.js     | Runtime                                  |
| Express.js  | Backend framework                        |
| Axios       | Requests to Groq API                     |
| dotenv      | Environment variable management          |
| CORS        | Cross-origin support                     |
| Render      | Serverless deployment                    |

---

## 🔐 Environment Setup

Create a `.env` file in the root:


```env
GROQ_API_KEY=your_groq_key_here
PORT=5000
RATE_LIMIT=20   # max requests per minute per IP (default: 20)
```
## 💻 Run Locally

```bash
# Clone the repo
git clone https://github.com/ayush585/edgex-backend
cd edgex-backend

# Install dependencies
npm install

# Start server
npm run dev   # or: node groq-proxy.js
```

## 📡 API Endpoint Details

### Request  
**POST** `/api/groq`

```json
{
  "model": "llama3-8b-8192",
  "messages": [
    { "role": "system", "content": "You are..." },
    { "role": "user", "content": "Hello AI!" }
  ],
  "temperature": 0.75
}
```

### Headers (auto-handled)

```http
Authorization: Bearer <your GROQ_API_KEY>  
Content-Type: application/json
```

Example Response
```json
{
  "choices": [
    {
      "message": {
        "content": "Hey! Here's my AI reply..."
      }
    }
  ]
}

```
## 🧠 Why This Matters

Without this proxy backend:

- ❌ The Groq API key would be exposed in frontend  
- 🌐 Cross-origin (CORS) errors would break requests  
- 🔐 No centralized control over rate limits or auth  

This backend is your **secure bridge** between frontend UI and powerful LLMs!

---

## 📁 File Structure

```bash
groq-proxy.js     # Main backend app
.env              # API keys (ignored in git)
package.json      # Dependencies and scripts
```

## 🛠️ Monitoring & Uptime Tips
- Use UptimeRobot to ping your backend every 5 mins to keep it awake 🚀

- Monitor logs on Render Dashboard

## 🤝 Contributing to Edgex Backend (GSSoC 2025)

We welcome contributors via **GirlScript Summer of Code 2025** 🙌  
You don’t need to be a backend pro — we’ll guide you through!

### ✅ Good First Issues
- Add rate limiting  
- Add health check route  
- Setup tests for the endpoint  
- Convert to TypeScript (optional)  

### 🚀 Steps to Contribute
1. Fork the repo  
2. Create a new branch: `feature/my-feature`  
3. Make your changes 🚀  
4. Open a PR with a clear description  

---

## 👨‍💻 Contributors

| Name               | Role          | GitHub |
|--------------------|---------------|-------------------------------------------|
| Ayushman Mukherjee | Project Admin | [@ayush585](https://github.com/ayush585)  |
| Aishika Biswas     | Contributor   | [@aishikabiswas](https://github.com/aishikabiswas) |
| You? ⭐            | Contributor   | Fork, star & submit a PR!                 |

---

## 💬 Contact

📧 Email: **ayushmanmukherjee12@gmail.com**  
💼 LinkedIn: [Ayushman Mukherjee](https://linkedin.com/in/ayushmanmukherjee)  
🎯 Discord: **Sabucha | PA** on GSSoC server  

---

## 🛡️ License

**MIT** — Open to all learners, dreamers, and devs 💖
