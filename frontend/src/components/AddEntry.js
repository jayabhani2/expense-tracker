import React, { useState } from "react";

const AddEntry = ({ onAdd }) => {
  const [form, setForm] = useState({
    amount: "",
    description: "",
    date: "",
    type: "Income",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ amount: "", description: "", date: "", type: "Income" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded shadow bg-light">
      <h2 className="text-center mb-4">Add Entry</h2>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input
          type="number"
          name="amount"
          className="form-control"
          id="amount"
          placeholder="Enter amount"
          value={form.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          id="description"
          placeholder="Enter description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          type="date"
          name="date"
          className="form-control"
          id="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="type" className="form-label">Type</label>
        <select
          name="type"
          className="form-select"
          id="type"
          value={form.type}
          onChange={handleChange}
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary w-100">
          Add Entry
        </button>
      </div>
    </form>
  );
};

export default AddEntry;
