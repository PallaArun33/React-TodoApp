import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import './index.css';

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      className="todo-list-item"
    >
      <div className="toggle-btn-text">
        <button onClick={onToggleComplete} className="checkbox-btn">
          <input type="checkbox" className="checkbox" />
        </button>
        <p className="task-text">{todo.text}</p>
      </div>

      <button onClick={onDelete} className="delete-icon-container">
        <RiDeleteBinLine className="delete-icon" />
      </button>
    </li>
  );
};

export default TodoItem;
