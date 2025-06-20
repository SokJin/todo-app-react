import React, { useEffect, useState } from 'react';

export const ThemeButton = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const isDarkMode = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDarkMode);
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const newTheme = html.classList.contains('dark') ? 'light' : 'dark';
    html.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setIsDark(newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      {isDark ? 'ライトモード' : 'ダークモード'}
    </button>
  );
};
