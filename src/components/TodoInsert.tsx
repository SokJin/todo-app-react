import React, { useState } from 'react';

export default function TodoInsert() {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    alert(`入力値: ${inputValue}`);
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="入力してください"
        className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
     >
        追加</button>
    </div>
  );
}