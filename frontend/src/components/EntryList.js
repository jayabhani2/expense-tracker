import React from "react";

const EntryList = ({ entries, onDelete }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Entries List</h2>
      <div className="list-group">
        {entries.map((entry) => (
          <div key={entry._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{entry.description}</h5>
              <p className="text-muted">
                ₹{entry.amount} - {entry.type} - {entry.date}
              </p>
            </div>
            <button
              onClick={() => onDelete(entry._id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntryList;
