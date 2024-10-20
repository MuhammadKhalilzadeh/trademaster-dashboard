const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await User.findByIdAndRemove(req.params.id);
      res.status(200).json({ message: "User deleted successfully" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      if (user.password === password) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
