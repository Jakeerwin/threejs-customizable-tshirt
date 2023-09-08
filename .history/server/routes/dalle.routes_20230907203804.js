import express from "express";
import * as dotenv from "dotenv";
import OpenAIApi from "openai";
import Configuration from "openai";

dotenv.config();

const router = express.Router();

const OPENAI_API_KEY = "sk - vMAQruFQJvsrWlIHC7SlT3BlbkFJxkXapN7fyl7EXaFBIViU";

const config = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route("/").get((req, res) => {
  res.status(200).json({ message: { OPENAI_API_KEY } });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
