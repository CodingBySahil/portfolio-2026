'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const Testimonial = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section id="testimonial" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-5 lg:px-0">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400 font-semibold mb-3">Testimonials</p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">What clients say</h2>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <article key={index} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-700 dark:bg-slate-950">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800">
                      <Image src={testimonial.imgSrc} alt={testimonial.name} width={80} height={80} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400">{testimonial.theme}</p>
                      <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.position}</p>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{testimonial.description}</p>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-900">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{testimonial.project}</h4>
                  <p className="mt-3 text-slate-600 dark:text-slate-400">{testimonial.projectDetails}</p>
                  <div className="mt-6 flex gap-2 flex-wrap text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
