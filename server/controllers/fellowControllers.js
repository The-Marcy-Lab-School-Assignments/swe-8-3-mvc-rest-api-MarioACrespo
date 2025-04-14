const express = require("express");
const router = express.Router();
const Fellow = require("../models/fellow");

router.get("/", (req, res) => {
  const fellows = Fellow.getAll();
  res.json(fellows);
});

router.get("/:id", (req, res) => {
  const fellow = Fellow.getById(parseInt(req.params.id));
  if (!fellow) return res.status(404).json({ error: "Fellow not found" });
  res.json(fellow);
});

router.post("/", (req, res) => {
  const { name, cohort } = req.body;
  if (!name || !cohort) {
    return res.status(400).json({ error: "Missing name or cohort" });
  }
  const newFellow = Fellow.create({ name, cohort });
  res.status(201).json(newFellow);
});

router.patch("/:id", (req, res) => {
  const updated = Fellow.update(parseInt(req.params.id), req.body);
  if (!updated) return res.status(404).json({ error: "Fellow not found" });
  res.json(updated);
});

router.delete("/:id", (req, res) => {
  const deleted = Fellow.delete(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ error: "Fellow not found" });
  res.status(204).end();
});

module.exports = router;
