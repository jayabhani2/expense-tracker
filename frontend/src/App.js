import React, { useEffect, useState } from "react";
import { fetchExpenses, addExpense, deleteExpense } from "./services/api";
import Header from "./components/Header";
import AddEntry from "./components/AddEntry";
import EntryList from "./components/EntryList";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [netBalance, setNetBalance] = useState(0);

  const fetchData = async () => {
    const { data } = await fetchExpenses();
    setEntries(data.entries);
    setNetBalance(data.netBalance);
  };

  const handleAdd = async (form) => {
    await addExpense(form);
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteExpense(id);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container pb-5">
      {/* Header Component */}
      <Header netBalance={netBalance} />
      
      <div className="row mt-5">
        {/* Add Entry Component */}
        <div className="col-md-6">
          <AddEntry onAdd={handleAdd} />
        </div>
        
        {/* Entry List Component */}
        <div className="col-md-6">
          <EntryList entries={entries} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default App;
