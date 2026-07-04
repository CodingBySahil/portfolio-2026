import {
  FaGraduationCap,
  FaAward,
  FaUniversity,
  FaCertificate,
  FaLaptopCode,
  FaBookOpen,
} from "react-icons/fa";

import SectionTitle from "@/components/SectionTitle";
import EducationCard from "@/components/EducationCard";
import { education } from "@/lib/siteData";

export default function EducationPage() {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Computer Science",
      description: "Strong academic foundation in modern software engineering.",
    },
    {
      icon: FaLaptopCode,
      title: "Practical Learning",
      description: "Focused on building real-world Full Stack MERN applications.",
    },
    {
      icon: FaCertificate,
      title: "Professional Certifications",
      description: "Continuously learning through online certifications.",
    },
    {
      icon: FaBookOpen,
      title: "Self Learning",
      description: "Passionate about mastering new technologies every day.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero */}
      <section className="container-main section-padding">
        <SectionTitle
          eyebrow="Education"
          title="Education & Professional Learning"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600 dark:text-slate-300">
          My educational journey combines academic excellence, practical
          software engineering experience, and continuous learning through
          certifications to stay updated with modern technologies.
        </p>
      </section>

      {/* Highlights */}
      <section className="container-main pb-20">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-500"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500">
                  <Icon />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-main pb-24">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500">
            <FaUniversity className="text-2xl" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Academic Journey
            </h2>

            <p className="text-slate-600 dark:text-slate-400">
              Education, certifications and continuous learning.
            </p>
          </div>
        </div>

        <div className="relative ml-4 border-l-2 border-blue-200 pl-8 dark:border-cyan-800">
          {education.map((ed, index) => (
            <div key={ed.title} className="relative mb-10 last:mb-0">
              <div className="absolute -left-[43px] top-8 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg dark:border-slate-950 dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500">
                {index === 0 ? (
                  <FaGraduationCap />
                ) : (
                  <FaAward />
                )}
              </div>

              <EducationCard item={ed} />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container-main pb-24">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 p-12 text-center text-white shadow-2xl dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500">
          <FaCertificate className="mx-auto mb-6 text-5xl" />

          <h2 className="mb-5 text-4xl font-bold">
            Learning Never Stops
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-blue-100">
            Technology evolves every day, and so do I. Along with my academic
            education, I continuously invest in learning new frameworks,
            software architecture, AI technologies, cloud platforms, and modern
            development practices to deliver better solutions.
          </p>
        </div>
      </section>
    </main>
  );
}