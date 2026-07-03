import { FaArrowRightLong } from 'react-icons/fa6';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <article className="group rounded-[2rem] border border-slate-200/80 bg-slate-950/90 p-8 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900">
      <div className="flex h-full flex-col justify-between gap-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/15 to-slate-900 text-blue-400 text-2xl">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-400 transition duration-300 group-hover:text-blue-300">
          <span>Discover</span>
          <FaArrowRightLong className="text-base" />
        </div>
      </div>
    </article>
  );
};

export default FeatureCard;