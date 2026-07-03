import SectionTitle from '@/components/SectionTitle';
import { skills } from '@/lib/siteData';
import SkillCard from '@/components/SkillCard';

export default function SkillsPage() {
  return (
    <section>
      <SectionTitle eyebrow='Skills' title='Technical & Soft Skills' />
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
        {skills.map((s) => (
          <SkillCard key={s.category} category={s.category} items={s.items} />
        ))}
      </div>
    </section>
  );
}
