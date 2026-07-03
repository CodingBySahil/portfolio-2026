import React from 'react';
import styles from './featureSection.module.scss';
import FeatureCard from '@/components/FeatureCard';
import { HiBars4, HiBuildingLibrary } from 'react-icons/hi2';

let featureData = [
  {
    icon: <HiBars4 />,
    title: 'Full Stack Development',
    description:
      'Building scalable applications with React, Next.js, Node.js, Express, and MongoDB for modern web experiences.',
  },
  {
    icon: <HiBuildingLibrary />,
    title: 'API & Backend Services',
    description:
      'Designing secure REST APIs, authentication flows, and server-side logic for data-driven applications.',
  },
  {
    icon: <HiBars4 />,
    title: 'Responsive UI Design',
    description:
      'Creating responsive interfaces and polished user experiences across desktop, tablet, and mobile devices.',
  },
  {
    icon: <HiBars4 />,
    title: 'AI & Automation',
    description:
      'Integrating AI features and intelligent automation into applications for stronger user engagement.',
  },
  {
    icon: <HiBars4 />,
    title: 'Web Performance',
    description:
      'Optimizing load times, accessibility, and frontend performance for reliable production experiences.',
  },
  {
    icon: <HiBars4 />,
    title: 'Technical Mentorship',
    description:
      'Guiding learners in web development, JavaScript, React, and MERN Stack through practical projects.',
  },
];

const FeatureSection = () => {
  return (
      <div className={styles.container} id='features'>
          <h2>WHAT I OFFER</h2>
          <h1>Technical Expertise</h1>

          <div className={styles.cardsContainer}>
              {featureData.map((item, index) => {
                  return (
                      <FeatureCard
                          key={index}
                          icon={item.icon}
                          title={item.title}
                          decription={item.description}
                      />
                  );
              })}
          </div>
      </div>
  );
};

export default FeatureSection;
