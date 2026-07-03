import React from 'react';
import bannerImage from '../assets/banner.svg';
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';
import { FaLinkedinIn } from 'react-icons/fa';
import linkedin from '../assets/icon-linkedin.svg';
import sketch from '../assets/icon-sketch.svg';
import figma from '../assets/icon-figma.svg';

const HeroSection = () => {
  return (
    <section id="hero" className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-5 py-16 md:px-6 lg:px-8 lg:flex-row lg:items-center">
      <div className="flex-1 space-y-8">
        <p className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
          Building modern web experiences
        </p>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Muhammad Sahil</span>, a Full Stack MERN Developer.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            I create scalable, secure, and responsive web applications using React, Next.js, Node.js, and MongoDB. I also teach web development, AI, and product-focused engineering.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Work with me
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800">
              View portfolio
            </a>
          </div>
          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-300">
            <span className="text-sm font-semibold uppercase tracking-[0.35em]">Connect</span>
            <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"><FaFacebookF /></a>
            <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"><CiTwitter /></a>
            <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {[linkedin, sketch, figma].map((iconSrc, index) => (
            <div key={index} className="flex h-14 w-14 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <Image src={iconSrc} alt={`icon-${index}`} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <div className="relative mx-auto aspect-[4/5] max-w-[480px] overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-2xl dark:border-slate-700 dark:bg-slate-900/60">
          <Image src={bannerImage} alt="portfolio banner illustration" fill className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
