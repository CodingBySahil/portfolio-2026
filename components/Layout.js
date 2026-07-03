'use client';

import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

const Layout = ({ children }) => {
  useEffect(() => {
    document.documentElement.style.transition = 'background-color 0.4s ease, color 0.4s ease';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <ScrollProgress />
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
