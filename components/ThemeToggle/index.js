'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <button aria-hidden className="w-11 h-11 rounded-lg bg-transparent" />;

  const isDark = theme === 'dark';

  return (
    <button
      aria-label="Toggle theme"
      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      <span className="relative inline-block w-6 h-6">
        <svg
          className={`absolute inset-0 w-full h-full transition-all duration-350 ${
            isDark ? 'opacity-0 rotate-90 scale-60' : 'opacity-100 rotate-0 scale-100'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="2" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22" />
            <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
            <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
            <line x1="2" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22" y2="12" />
            <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
            <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
          </g>
        </svg>
        <svg
          className={`absolute inset-0 w-full h-full transition-all duration-350 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-60'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
        </svg>
      </span>
    </button>
  );
}
