import React, { useEffect, useState } from 'react';
import Template from './Template';
import Insert from './Insert';
import List from './List';

export default function Container() {
  const [items, setItems] = useState<{ id: number; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('todo-items');
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  const handleClick = () => {
    if (inputValue.trim() === '') return;
    const newItem = { id: Date.now(), text: inputValue };
    const newItems = [...items, newItem];
    setItems(newItems);
    localStorage.setItem('todo-items', JSON.stringify(newItems));
    setInputValue('');
  };

  return (
    <Template>
      <Insert
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleClick={handleClick}
      />
      <List items={items} setItems={setItems} />
    </Template>
  );
}
