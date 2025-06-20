import React, { useState } from 'react';
import Template from './Template';
import Insert from './Insert';
import List from './List';
import { v4 as uuidv4 } from 'uuid';
import { Item } from '@/types/type';
import useLocalStorage from '@/hooks/useLocalStorage';

export default function Container() {
  const [items, setItems] = useLocalStorage<Item[]>('todo-items', []);
  const [inputValue, setInputValue] = useState<string>('');

  const handleClick: () => void = () => {
    if (inputValue.trim() === '') return;
    const newItem: Item = { id: uuidv4(), text: inputValue, completed: false };
    setItems([...items, newItem]);
    setInputValue('');
  };

  const handleToggle = (id: string) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
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
