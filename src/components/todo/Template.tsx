import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <div className="min-h-screen flex justify-center items-start pt-20 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-full">
        <header className="mb-6 pt-0">
          <h1 className="text-3xl text-center font-bold">TODOLIST</h1>
        </header>
        {children}
      </div>
    </div>
  );
}
