// groq-proxy.js
import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";
import rateLimit from "express-rate-limit";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: process.env.RATE_LIMIT || 20,
  message: { error: "Too many requests, please try again later" },
  standardHeaders: true,
  legacyHeaders: false,
});


app.use(cors());
app.use(express.json());

app.use("/groq", limiter);


// Test route
app.get("/", (req, res) => {
    res.send("🟢 Groq Proxy is Running!");
});

// 🔁 This must match your frontend call
app.post("/groq", async (req, res) => {
    try {
        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            req.body,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        res.json(response.data);
    } catch (err) {
        console.error("Groq API error:", err.response?.data || err.message);
        res.status(500).json({ error: "Groq request failed" });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Groq Proxy running on port ${PORT}`);
});
