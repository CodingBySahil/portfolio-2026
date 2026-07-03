'use client';

export default function EducationCard({ item }) {
  return (
    <article className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
      <h4 className="text-slate-900 dark:text-white font-semibold text-base m-0">{item.title}</h4>
      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 font-medium">{item.institution} • {item.period}</p>
      <p className="text-slate-700 dark:text-slate-300 text-sm mt-3">{item.description}</p>
    </article>
  );
}
