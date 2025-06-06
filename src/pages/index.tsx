import React from 'react';
import TodoTemplate from '@/components/todo/Template';
import TodoInsert from '@/components/todo/Insert';
import TodoList from '@/components/todo/List';
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
