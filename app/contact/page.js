import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { siteMetadata } from "@/lib/siteData";

export default function ContactPage() {
  const socials = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/CodingBySahil",
      color: "hover:text-slate-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/codingBySAHIL",
      color: "hover:text-blue-600 dark:hover:text-cyan-400",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      href: "https://facebook.com/codingBySahil",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.me/923192141818",
      color: "hover:text-green-600 dark:hover:text-green-400",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Hero */}
      <section className="container-main section-padding">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Build Something Amazing Together"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600 dark:text-slate-300">
          Whether you have a project, an internship opportunity, freelance work,
          collaboration, or simply want to say hello, I&apos;m always excited to
          connect with amazing people.
        </p>
      </section>

      {/* Contact */}
      <section className="container-main pb-24">
        <div className="grid gap-10 lg:grid-cols-5">

          {/* Left */}
          <div className="space-y-8 lg:col-span-2">

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-3xl text-white shadow-lg dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500">
                <FaPaperPlane />
              </div>

              <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h2>

              <p className="mb-8 text-slate-600 dark:text-slate-300">
                Feel free to reach out through any platform below.
              </p>

              <div className="space-y-5">

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-500 hover:bg-white dark:border-slate-800 dark:bg-slate-800 dark:hover:border-cyan-500 dark:hover:bg-slate-900">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="font-semibold text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-cyan-400"
                    >
                      {siteMetadata.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-500 hover:bg-white dark:border-slate-800 dark:bg-slate-800 dark:hover:border-cyan-500 dark:hover:bg-slate-900">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Location
                    </p>

                    <p className="font-semibold text-slate-900 dark:text-white">
                      Peshawar, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10">

                <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">
                  Connect With Me
                </h3>

                <div className="grid grid-cols-2 gap-4">

                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white dark:border-slate-800 dark:bg-slate-800 dark:hover:border-cyan-500 dark:hover:bg-slate-900 ${social.color}`}
                      >
                        <Icon className="text-xl transition duration-300" />

                        <span className="font-medium">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-3">

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">

              <h2 className="mb-3 text-3xl font-bold text-slate-900 dark:text-white">
                Send Me a Message
              </h2>

              <p className="mb-8 text-slate-600 dark:text-slate-300">
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </p>

              <ContactForm />

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}