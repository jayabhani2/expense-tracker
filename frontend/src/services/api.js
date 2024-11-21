import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/expenses";

export const fetchExpenses = () => axios.get(API_BASE_URL);
export const addExpense = (data) => axios.post(`${API_BASE_URL}/add`, data);
export const deleteExpense = (id) =>
  axios.delete(`${API_BASE_URL}/delete/${id}`);
