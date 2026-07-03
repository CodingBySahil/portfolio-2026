import SectionTitle from '@/components/SectionTitle';
import { experience } from '@/lib/siteData';
import ExperienceCard from '@/components/ExperienceCard';

export default function ExperiencePage() {
  return (
    <section>
      <SectionTitle eyebrow='Experience' title='Professional Experience' />
      <div style={{ display: 'grid', gap: '1rem' }}>
        {experience.map((e, idx) => (
          <ExperienceCard key={idx} item={e} />
        ))}
      </div>
    </section>
  );
}
