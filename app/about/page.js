import SectionTitle from '@/components/SectionTitle';
import { siteMetadata } from '@/lib/siteData';

export default function AboutPage() {
  return (
    <section>
      <SectionTitle eyebrow='About' title={`About — ${siteMetadata.title}`}>
        <p>Professional journey, mission, and teaching philosophy.</p>
      </SectionTitle>

      <div>
        <h3>Professional Introduction</h3>
        <p>
          I’m Muhammad Sahil, a Full Stack MERN developer, software engineer, and instructor focused on
          building performant, accessible web applications and teaching modern web practices.
        </p>
      </div>
    </section>
  );
}
