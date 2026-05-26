import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeCtx = createContext({ isDark: false, toggle: () => {} });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    setIsDark(saved ? saved === 'dark' : false);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    root.classList.toggle('dark', isDark);
    document.body.style.background = isDark ? '#040a14' : '#f8fafc';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.querySelectorAll('.text-color-change').forEach((el) => {
      el.classList.toggle('text-white', isDark);
      el.classList.toggle('text-black', !isDark);
    });
  }, [isDark, mounted]);

  return (
    <ThemeCtx.Provider value={{ isDark, toggle: () => setIsDark((d) => !d) }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
