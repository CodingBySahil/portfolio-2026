import React from 'react';
import { CiClock2 } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({img ,category,icon, title,desc}) => {
    return (
        <div className="min-w-[250px] h-auto bg-slate-800 dark:bg-slate-900 p-7 rounded-xl transition-all duration-500 overflow-hidden cursor-pointer hover:bg-slate-700 dark:hover:bg-slate-800">
            <div className="w-full h-auto">
                <div className="w-full border-b border-slate-700 rounded-3xl overflow-hidden h-64">
                    <Image 
                        src={img} 
                        alt='blog post preview' 
                        width={250}
                        className="object-cover rounded-lg transition-all duration-400 h-full w-auto hover:scale-110"
                    />
                </div>

                <div className="flex flex-col mt-3 justify-between">
                    <Link href='#' className="text-pink-600 dark:text-pink-400 text-xs uppercase tracking-widest font-semibold">
                        {category}
                    </Link>

                    <div className="flex justify-start items-center gap-1 mt-2">
                        {icon}
                        <p className="font-medium text-sm text-slate-300 dark:text-slate-400">
                            {desc}
                        </p>
                    </div>
                </div>

                <Link href={"#"} className="text-slate-200 dark:text-slate-100 font-semibold text-lg mt-6 block transition-all duration-400 hover:text-pink-600 dark:hover:text-pink-400">
                    <h2 className="text-slate-100 dark:text-white text-lg leading-5 tracking-wide font-medium text-left capitalize m-0 group-hover:text-pink-600">
                        {title}
                    </h2>
                    <FiArrowUpRight className="block ml-1.5 opacity-0 transition-all duration-400 fill-pink-600 dark:fill-pink-400" />
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;