import React, { useState } from 'react';

export default function Insert() {
  const [inputValue, setInputValue] = useState<string>('');
  const [items, setItems] = useState<{ id: number; text: string }[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() === '') return;
    const newItem = { id: Date.now(), text: inputValue };
    setItems([...items, newItem]);
    setInputValue('');
  };

  const handleDelete = (index: number) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <>
      <div className="flex space-x-2 mb-4 items-center">
        <input
          id="todo-input"
          name="todo"
          type="text"
          value={inputValue}
          onChange={onChange}
          placeholder="入力してください"
          className="border border-gray-300 rounded px-3 py-1 w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 px-3 py-2 text-sm font-medium text-white rounded transition-colors ml-2"
        >
          追加
        </button>
      </div>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={item.id}
            className="flex justify-between items-center px-3 py-2 rounded"
          >
            <span>{item.text}</span>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 hover:bg-red-600 px-3 py-2 text-sm font-medium text-white rounded transition-colors"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
