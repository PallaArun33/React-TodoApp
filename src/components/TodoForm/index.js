import React, { useState } from 'react';
import "./index.css"

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div className="input-container">
      <input type="text" value={text} onChange={(e)  => setText(e.target.value)} className="input-item" />
      <button onClick={handleAdd} className="add-button">Add</button>
    </div>
  );
};

export default TodoForm;