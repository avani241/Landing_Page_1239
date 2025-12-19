import express from "express";
import Client from "../models/Client.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const client = await Client.create(req.body);
  res.json(client);
});

router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

export default router;
