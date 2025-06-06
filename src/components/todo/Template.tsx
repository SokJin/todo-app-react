import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
   <div>
		<header>
			<h1 className="text-2xl text-danger">TODOLIST</h1>
		</header>
    	{children}
    </div>
  );
}

