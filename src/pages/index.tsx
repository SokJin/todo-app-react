import React from 'react';
import TodoTemplate from '@/components/TodoTemplate.tsx';
import TodoInsert from '@/components/TodoInsert';
import TodoList from '@/components/TodoList';
import '../styles/globals.css';


export default function Home() {
  return (
    <main>
        <div>
            <TodoTemplate>
                <TodoInsert/>
                <TodoList/>
            </TodoTemplate>
        </div>
    </main>
  );
}