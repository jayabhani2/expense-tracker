const mongoose = require("mongoose");

// Define the schema
const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  type: { type: String, enum: ["Income", "Expense"], required: true },
});

// Export the model
module.exports = mongoose.model("Expense", expenseSchema);
