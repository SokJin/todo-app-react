import React, { useEffect, useState } from 'react';
import Template from './Template';
import Insert from './Insert';
import List from './List';

export default function Container() {
  const [items, setItems] = useState<{ id: number; text: string }[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('todo-items');
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo-items', JSON.stringify(items));
  }, [items]);

  return (
    <Template>
      <Insert items={items} setItems={setItems} />
      <List items={items} setItems={setItems} />
    </Template>
  );
}
