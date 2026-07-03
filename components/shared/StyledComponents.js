'use client';

import Link from 'next/link';

// Tailwind-based UI components
// All styling is now handled through Tailwind CSS classes

export const Title = ({ children, ...props }) => (
  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white" {...props}>{children}</h1>
);

export const Button = ({ children, primary, ...props }) => (
  <button 
    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
      primary
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
    }`}
    {...props}
  >
    {children}
  </button>
);

export const RoundButton = ({ children, onClick, ...props }) => (
  <button
    className="p-3 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 text-slate-300 dark:text-slate-200 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

export const SquareButton = ({ children, href, ...props }) => {
  const Component = href ? Link : 'button';
  return (
    <Component
      href={href}
      className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 text-slate-300 dark:text-slate-200 hover:text-white transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-lg hover:shadow-xl"
      {...props}
    >
      {children}
    </Component>
  );
};