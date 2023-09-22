import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import jjkData from "../data/jjkData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(jjkData);
});

export default router;
