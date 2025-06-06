import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function TodoTemplate({ children }: Props) {
  return (
   <div>
      <h1>TODOLIST</h1>
      {children}
    </div>
  );
}

