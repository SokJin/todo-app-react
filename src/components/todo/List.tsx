import React, { useState, useEffect } from 'react';

export default function List() {
  const [items, setItems] = useState<{ id: number; text: string }[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('todo-items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo-items', JSON.stringify(items));
  }, [items]);

  const handleDelete = (index: number) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={item.id}
          className="flex justify-between items-center px-3 py-2 rounded"
        >
          <span>{item.text}</span>
          <button
            onClick={() => handleDelete(index)}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
          >
            削除
          </button>
        </li>
      ))}
    </ul>
  );
}
