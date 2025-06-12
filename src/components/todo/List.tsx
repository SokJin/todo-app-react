import React from 'react';
import { Item } from '@/types/type';

type ListProps = {
  items: Item[];
  setItems: (items: Item[]) => void;
};

export default function List({ items, setItems }: ListProps) {
  const handleDelete = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    localStorage.setItem('todo-items', JSON.stringify(newItems));
  };

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center px-3 py-2 rounded"
        >
          <span>{item.text}</span>
          <button
            onClick={() => handleDelete(item.id)}
            className="bg-red-500 px-3 py-2 text-sm font-medium text-white rounded transition-colors whitespace-nowrap ml-auto"
          >
            削除
          </button>
        </li>
      ))}
    </ul>
  );
}
