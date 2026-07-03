import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';

const PortfolioCard = ({ img, category, title }) => {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/95 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">
      <div className="overflow-hidden rounded-[1.75rem]">
        <Image
          src={img}
          alt={title}
          width={640}
          height={420}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 sm:p-8">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
          {category || 'Portfolio'}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <div className="mt-6 flex items-center justify-between text-sm font-semibold text-slate-600 dark:text-slate-400">
          <span>View case</span>
          <MdArrowOutward className="text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;