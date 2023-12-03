
import React from 'react';
import "./index.css"

const TodoFilter = ({ onFilterChange }) => {
  return (
    <div className="select-filter-cotainer">
      <label className="filter-label">
        Filter:
        <select onChange={(e) => onFilterChange(e.target.value)} className="slect-item-style">
          <option value="all" className="option-style">All</option>
          <option value="completed" className="option-style">Completed</option>
          <option value="pending" className="option-style">Pending</option>
        </select>
      </label>
    </div>
  );
};

export default TodoFilter;