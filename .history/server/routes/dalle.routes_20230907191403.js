import express from "express";
import * as dotenv from "dotenv";
import OpenAIApi from "openai";
import Configuration from "openai";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

export default router;
