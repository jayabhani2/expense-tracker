import axios from "axios";

const API_BASE_URL = "https://expense-tracker-t7xv.onrender.com/api/expenses";

export const fetchExpenses = () => axios.get(API_BASE_URL);
export const addExpense = (data) => axios.post(`${API_BASE_URL}/add`, data);
export const deleteExpense = (id) =>
  axios.delete(`${API_BASE_URL}/delete/${id}`);
