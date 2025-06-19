import React from 'react';
import { ThemeButton } from './ThemeButton';

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-20 p-8 rounded-lg shadow-lg w-full max-w-full">
      <header className="mb-6 pt-0 w-full flex justify-center items-center gap-4">
        <h1 className="text-3xl text-center font-bold">TODOLIST</h1>
        <ThemeButton />
      </header>
      {children}
    </div>
  );
}
