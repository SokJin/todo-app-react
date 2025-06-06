import React from 'react';
import Template from '@/components/todo/Template';
import Insert from '@/components/todo/Insert';
import List from '@/components/todo/List';
import '../styles/globals.css';


export default function Home() {
  return (
	<main>
		<div>
			<Template>
				<Insert/>
				<List/>
			</Template>
		</div>
	</main>
  );
}
