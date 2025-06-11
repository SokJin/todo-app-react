import React from 'react';

type Item = { id: number; text: string };

type ListProps = {
  items: Item[];
  setItems: (items: Item[]) => void;
};

export default function List({ items, setItems }: ListProps) {
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
