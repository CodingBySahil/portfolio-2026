'use client';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EducationTimeline from './EducationTimeline';
import { timelineData } from './timelineData';

const ResumeTabs = () => {
  return (
    <section id="resume" className="max-w-6xl mx-auto px-5 py-16 lg:px-0">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400 font-semibold mb-3">Resume</p>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Professional Resume</h2>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">Experience, education, and skills presented in a polished timeline with clear priorities for recruiters and hiring teams.</p>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-lg dark:border-slate-700 dark:bg-slate-900">
        <Tabs focusTabOnClick={false}>
          <TabList className="flex flex-wrap gap-3 bg-slate-100 p-3 dark:bg-slate-800">
            {['Education', 'Skills', 'Experience'].map((label) => (
              <Tab
                key={label}
                className="cursor-pointer rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition duration-200 hover:bg-white hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700"
                selectedClassName="bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow"
              >
                {label}
              </Tab>
            ))}
          </TabList>

          <div className="px-6 py-8 sm:px-10">
            <TabPanel>
              <EducationTimeline timelineData={timelineData} />
            </TabPanel>
            <TabPanel>
              <div className="space-y-5 text-slate-600 dark:text-slate-300">
                <p>Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Bootstrap, and Framer Motion.</p>
                <p>Backend: Node.js, Express.js, RESTful APIs, JWT authentication, Socket.IO, and MongoDB.</p>
                <p>Collaboration: Agile workflows, Git validation, code reviews, and cross-functional team mentorship.</p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-5 text-slate-600 dark:text-slate-300">
                <p>Built scalable full-stack applications, responsive UI systems, and production-ready MERN solutions with optimized performance and maintainability.</p>
                <p>Delivered technical mentorship, guided learners through hands-on projects, and supported outcomes for teams and students.</p>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ResumeTabs;
