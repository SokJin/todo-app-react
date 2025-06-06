import React from 'react';

export default function List() {
  const tempTodos = [
    { id: 1, text: 'タスク1' },
    { id: 2, text: 'タスク2' },
    { id: 3, text: 'タスク3' },
  ];

  return (
    <ul>
      {tempTodos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
}
