import SectionTitle from '@/components/SectionTitle';
import { education } from '@/lib/siteData';
import EducationCard from '@/components/EducationCard';

export default function EducationPage() {
  return (
    <section>
      <SectionTitle eyebrow='Education' title='Education & Certifications' />
      <div style={{ display: 'grid', gap: '1rem' }}>
        {education.map((ed) => (
          <EducationCard key={ed.title} item={ed} />
        ))}
      </div>
    </section>
  );
}
