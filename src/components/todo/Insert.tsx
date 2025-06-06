import React, { useState } from 'react';

export default function Insert() {
  const [inputValue, setInputValue] = useState<string>('');

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
	  	id ="todo-input"
		name ="todo"
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="入力してください"
        className=""
      />
      <button onClick={handleClick}
        className=""
     >
        追加</button>
    </div>
  );
}