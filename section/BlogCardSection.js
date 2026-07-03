import React from 'react';
import BlogCard from '@/components/BlogCard';
import img1 from '../assets/blog1.jpg';
import img2 from '../assets/blog2.jpg';
import img3 from '../assets/blog3.jpg';

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
    <section id="blog" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-0">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400 font-semibold mb-3">Insights and technical notes</p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Blog & learning</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {blogData.map((item, index) => (
            <BlogCard key={index} img={item.img} title={item.title} desc={item.desc} category={item.category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCardSection;
