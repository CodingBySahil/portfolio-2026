'use client';
import { Timeline } from 'rsuite';

const EducationTimeline = ({ timelineData }) => {
  return (
    <div className="space-y-6">
      <Timeline className="rs-timeline" align="left">
        {timelineData.map((item, index) => (
          <Timeline.Item key={index}>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.university} • {item.year}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                  {item.cgpa}/{item.total}
                </span>
              </div>
              <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default EducationTimeline;
