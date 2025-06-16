import React, { useEffect, useState } from 'react';
import Template from './Template';
import Insert from './Insert';
import List from './List';
import { v4 as uuidv4 } from 'uuid';
import { Item } from '@/types/type';

export default function Container() {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const stored = localStorage.getItem('todo-items');
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  const handleClick: () => void = () => {
    if (inputValue.trim() === '') return;
    const newItem: Item = { id: uuidv4(), text: inputValue, completed: false };
    const newItems = [...items, newItem];
    setItems(newItems);
    localStorage.setItem('todo-items', JSON.stringify(newItems));
    setInputValue('');
  };

  const handleToggle = (id: string) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
    localStorage.setItem('todo-items', JSON.stringify(updatedItems));
  };

  return (
    <Template>
      <Insert
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleClick={handleClick}
      />
      <List items={items} setItems={setItems} onToggle={handleToggle} />
    </Template>
  );
}
