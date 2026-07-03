import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import { HiBars4, HiBuildingLibrary } from 'react-icons/hi2';

const featureData = [
  {
    icon: <HiBars4 />,
    title: 'Full Stack Development',
    description: 'Building scalable applications with React, Next.js, Node.js, Express, and MongoDB.',
  },
  {
    icon: <HiBuildingLibrary />,
    title: 'API & Backend Services',
    description: 'Designing secure REST APIs, authentication flows, and server-side logic.',
  },
  {
    icon: <HiBars4 />,
    title: 'Responsive UI Design',
    description: 'Creating polished user experiences across desktop, tablet, and mobile.',
  },
  {
    icon: <HiBars4 />,
    title: 'AI & Automation',
    description: 'Integrating AI features and intelligent automation for better engagement.',
  },
  {
    icon: <HiBars4 />,
    title: 'Web Performance',
    description: 'Optimizing performance, accessibility, and frontend stability.',
  },
  {
    icon: <HiBars4 />,
    title: 'Technical Mentorship',
    description: 'Guiding learners with practical web development training.',
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-0">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400 font-semibold mb-3">What I offer</p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Technical expertise</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureData.map((item, index) => (
            <FeatureCard key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
