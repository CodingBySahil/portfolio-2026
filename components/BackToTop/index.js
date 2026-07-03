'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button 
      className="fixed bottom-7 right-4 w-11 h-11 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white z-40 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 active:scale-95" 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      aria-label='Back to top'
    >
      ↑
    </button>
  );
}
