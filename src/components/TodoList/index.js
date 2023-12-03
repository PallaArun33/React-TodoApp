import React from 'react';
import TodoItem from '../TodoItem';
import "./index.css"

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <ul className="todo-ul-items">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onToggleComplete={() => onToggleComplete(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;