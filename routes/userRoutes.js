const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get user by ID (for profile)
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// Create new user
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  const saved = await newUser.save();
  res.status(201).json(saved);
});

module.exports = router;
