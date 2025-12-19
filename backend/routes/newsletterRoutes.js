import express from "express";
import Newsletter from "../models/Newsletter.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const email = await Newsletter.create(req.body);
  res.json(email);
});

router.get("/", async (req, res) => {
  const emails = await Newsletter.find();
  res.json(emails);
});

export default router;
