'use client';

export default function ProjectCard({ project }) {
  return (
    <article className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-lg" aria-labelledby={`proj-${project.title}`}>
      <h3 id={`proj-${project.title}`} className="text-slate-900 dark:text-white font-semibold text-lg m-0 mb-3">
        {project.title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 m-2 mb-3 text-sm">{project.description}</p>
      <div className="flex justify-between items-center gap-2 flex-wrap">
        <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full px-3 py-1 font-medium">
          {project.category}
        </span>
        <div className="flex gap-2 flex-wrap">
          {project.github && (
            <a href={project.github} target='_blank' rel='noreferrer' className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
              Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target='_blank' rel='noreferrer' className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
