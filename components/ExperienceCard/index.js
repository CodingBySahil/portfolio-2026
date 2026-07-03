'use client';

export default function ExperienceCard({ item }) {
  return (
    <article className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
      <header className="mb-3">
        <h4 className="text-slate-900 dark:text-white font-semibold text-base m-0">{item.role}</h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 font-medium">{item.company} • {item.period}</p>
      </header>
      <ul className="m-3 pl-4 space-y-1">
        {item.responsibilities.map((r, i) => (
          <li key={i} className="text-slate-700 dark:text-slate-300 text-sm list-disc">{r}</li>
        ))}
      </ul>
    </article>
  );
}
