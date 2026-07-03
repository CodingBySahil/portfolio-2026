import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import { siteMetadata } from '@/lib/siteData';

export default function ContactPage() {
  return (
    <section>
      <SectionTitle eyebrow='Contact' title='Get in touch' />
      <p>Prefer email? Reach me at {siteMetadata.email}.</p>
      <ContactForm />
    </section>
  );
}
