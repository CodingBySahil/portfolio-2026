'use client';

export default function SkillCard({ category, items }) {
  return (
    <section className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
      <h4 className="text-slate-900 dark:text-white font-semibold m-0 mb-2">{category}</h4>
      <ul className="m-0 p-0 list-none flex gap-2 flex-wrap">
        {items.map((s) => (
          <li key={s} className="bg-white dark:bg-slate-700 px-2.5 py-1.5 rounded-lg text-xs text-slate-700 dark:text-slate-200 font-medium">
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
