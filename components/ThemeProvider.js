'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
        document.documentElement.dataset.theme = storedTheme;
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.documentElement.dataset.theme = 'dark';
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.dataset.theme = theme;
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      // ignore
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
