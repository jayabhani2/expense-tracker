import React from "react";

const Header = ({ netBalance }) => {
  return (
    <header className="bg-primary text-white text-center py-5">
      <h1 className="display-4">Expense Tracker</h1>
      <h2 className="mt-3">
        Net Balance: <span className="text-warning">₹{netBalance}</span>
      </h2>
    </header>
  );
};

export default Header;
