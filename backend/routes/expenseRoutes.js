const express = require("express");
const Expense = require("../models/Expense");
const router = express.Router();

// Add an entry
router.post("/add", async (req, res) => {
  const { amount, description, date, type } = req.body;
  try {
    const newExpense = new Expense({ amount, description, date, type });
    await newExpense.save();
    res.status(201).json({ message: "Entry added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add entry" });
  }
});

// Get all entries and net balance
router.get("/", async (req, res) => {
  try {
    const entries = await Expense.find();
    const totalIncome = entries
      .filter((e) => e.type === "Income")
      .reduce((sum, e) => sum + e.amount, 0);
    const totalExpense = entries
      .filter((e) => e.type === "Expense")
      .reduce((sum, e) => sum + e.amount, 0);
    res.json({ entries, netBalance: totalIncome - totalExpense });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch entries" });
  }
});

// Delete an entry
router.delete("/delete/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Entry deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete entry" });
  }
});

module.exports = router;
