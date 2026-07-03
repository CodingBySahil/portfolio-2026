import SectionTitle from '@/components/SectionTitle';
import { projects } from '@/lib/siteData';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <section>
      <SectionTitle eyebrow='Projects' title='Selected Projects' />
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
