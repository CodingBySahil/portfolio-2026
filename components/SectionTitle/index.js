'use client';

export default function SectionTitle({ eyebrow, title, children }) {
  return (
    <header className="mb-5">
      {eyebrow && <p className="text-primary dark:text-blue-400 font-bold uppercase tracking-widest text-sm mb-1">{eyebrow}</p>}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white m-0">{title}</h2>
      {children && <div className="mt-2 text-slate-600 dark:text-slate-400">{children}</div>}
    </header>
  );
}
