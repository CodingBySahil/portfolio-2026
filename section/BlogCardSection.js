import React from 'react';
import styles from './blogSection.module.scss';
import BlogCard from '@/components/BlogCard';
import img1 from '../assets/blog1.jpg';
import img2 from '../assets/blog2.jpg';
import img3 from '../assets/blog3.jpg';
import { CiClock2 } from 'react-icons/ci';

const blogData = [
    {
        img: img1,
        title: 'Building scalable MERN applications with modern architecture.',
        desc: '4 min read',
        category: 'Web Development',
    },
    {
        img: img2,
        title: 'Teaching JavaScript, React, and AI through hands-on projects.',
        desc: '4 min read',
        category: 'Education',
    },
    {
        img: img3,
        title: 'Designing responsive user interfaces for modern web platforms.',
        desc: '4 min read',
        category: 'UI/UX',
    },
];

const BlogCardSection = () => {
    return (
        <div>
            <section className={styles.container} id='blog'>
                <h2>INSIGHTS AND TECHNICAL NOTES</h2>
                <h1>Blog & Learning</h1>
                <div className={styles.cardContainer}>
                    {blogData.map((item, index) => {
                        return (
                            <BlogCard
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                category={item.category}
                                key={index}
                            />
                        );
                    })}
                    ;
                </div>
            </section>
        </div>
    );
};

export default BlogCardSection;
