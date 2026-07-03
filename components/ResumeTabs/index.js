'use client';
import styles from './styles.module.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EducationTimeline from './EducationTimeline';
import { timelineData } from './timelineData';

const ResumeTabs = () => {
    return (
        <div className={styles.container} id='resume'>
            <h2>3+ YEARS OF EXPERIENCE</h2>
            <h1>Professional Resume</h1>

            <Tabs focusTabOnClick={false}>
                <TabList className={styles.tabList}>
                    <Tab>Education</Tab>
                    <Tab>Skills</Tab>
                    <Tab>Experience</Tab>
                </TabList>

                <TabPanel>
                    {/* education  */}
                    <EducationTimeline timelineData={timelineData} />
                </TabPanel>

                <TabPanel>
                    <div className={styles.tabContent}>
                        <p>
                            Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js,
                            Tailwind CSS, Bootstrap, and Framer Motion.
                        </p>
                        <p>
                            Backend: Node.js, Express.js, RESTful APIs, JWT authentication,
                            Socket.IO, and MongoDB.
                        </p>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className={styles.tabContent}>
                        <p>
                            Developed scalable full-stack web applications, responsive UI
                            systems, and real-world MERN solutions with a focus on performance
                            and maintainability.
                        </p>
                        <p>
                            Mentored students in web development and AI concepts through practical
                            projects and industry-aligned training.
                        </p>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ResumeTabs;
