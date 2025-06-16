import React from 'react';
import StatusToggle from './StatusToggle';
import { Item } from '@/types/type';
import { FaTrash } from 'react-icons/fa';

type ListProps = {
  items: Item[];
  setItems: (items: Item[]) => void;
  onToggle: (id: string) => void;
};

export default function List({ items, setItems, onToggle }: ListProps) {
  const handleDelete = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorage.setItem('todo-items', JSON.stringify(newItems));
  };

  return (
    <ul className="space-y-4 w-full max-w-sm mx-auto">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center px-3 py-2 rounded transition-colors w-full"
        >
          <span className={item.completed ? 'line-through text-gray-400' : ''}>
            {item.text}
          </span>

          <div className="flex items-center gap-3">
            <StatusToggle
              completed={item.completed}
              onToggle={() => onToggle(item.id)}
            />

            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 p-2 text-white rounded transition-colors hover:bg-red-600 flex items-center justify-center"
              aria-label="削除"
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
