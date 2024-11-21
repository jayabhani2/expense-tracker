const mongoose = require("mongoose");
const Expense = require("./models/Expense");

mongoose
  .connect("mongodb://localhost:27017/expense-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Sample data
    const expenses = [
      { amount: 1000, description: "Salary", date: new Date(), type: "Income" },
      { amount: 200, description: "Groceries", date: new Date(), type: "Expense" },
      { amount: 500, description: "Freelance Work", date: new Date(), type: "Income" },
      { amount: 150, description: "Transport", date: new Date(), type: "Expense" },
    ];

    await Expense.insertMany(expenses);
    console.log("Sample data inserted");
    process.exit(); // Exit after seeding data
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));