import React, { useState } from 'react';
import StatusToggle from './StatusToggle';
import { Item } from '@/types/type';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';
import { clsx } from 'clsx';

type ListProps = {
  items: Item[];
  setItems: (items: Item[]) => void;
  onToggle: (id: string) => void;
};

export default function List({ items, setItems, onToggle }: ListProps) {
  const [editing, setEditing] = useState<{ id: string; text: string } | null>(
    null
  );

  const handleDelete = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleEditStart = (id: string, currentText: string) => {
    setEditing({ id, text: currentText });
  };

  const handleEditSave = () => {
    if (!editing) return;
    const newItems = items.map((item) =>
      item.id === editing.id ? { ...item, text: editing.text } : item
    );
    setItems(newItems);
    setEditing(null);
  };

  return (
    <ul className="space-y-4 w-full max-w-sm mx-auto">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center px-3 py-2 rounded transition-colors w-full"
        >
          {editing?.id === item.id ? (
            <input
              value={editing.text}
              onChange={(e) =>
                setEditing(
                  editing ? { ...editing, text: e.target.value } : null
                )
              }
              className="border px-2 py-1 rounded w-full mr-2"
              autoFocus
            />
          ) : (
            <span
              className={clsx(
                'flex-1 mr-2',
                item.completed && 'line-through text-gray-400'
              )}
            >
              {item.text}
            </span>
          )}

          <div className="flex items-center gap-2">
            <StatusToggle
              completed={item.completed}
              onToggle={() => onToggle(item.id)}
            />

            {editing?.id === item.id ? (
              <button
                onClick={handleEditSave}
                className="bg-green-500 p-2 text-white rounded hover:bg-green-600"
                aria-label="保存"
              >
                <FaSave />
              </button>
            ) : (
              <button
                onClick={() => handleEditStart(item.id, item.text)}
                className="bg-blue-500 p-2 text-white rounded hover:bg-blue-600"
                aria-label="編集"
              >
                <FaEdit />
              </button>
            )}

            <button
              onClick={() => handleDelete(item.id)}
              className="bg-red-500 p-2 text-white rounded hover:bg-red-600"
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
