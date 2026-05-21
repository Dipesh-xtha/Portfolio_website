"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, ArrowRight, Download } from 'lucide-react';

const projects = [
  {
    title: "Vigorous Hospital",
    category: "UX Case Study • Healthcare",
    description: "A comprehensive redesign to humanize digital healthcare access in Nepal, prioritizing empathy and removing friction from the booking process.",
    imageSrc: "/thumbnail.png",
    slug: "vigorous-hospital",
    year: "2024"
  },
  {
    title: "Consultancy Platform",
    category: "UI Design • Landing Page",
    description: "A user-friendly consultancy landing page designed to establish credibility and trust through strategic typography, empathetic visual hierarchy, and clear calls-to-action.",
    imageSrc: "/web_home_pagemk.png",
    externalLink: "https://www.figma.com/design/NlxJFafkYekZsW9EdplsRM/UI-Design?node-id=527-1123&t=MTLVWBcaJ24DWwek-1",
    year: "2024"
  },
  {
    title: "Food Ordering App",
    category: "UI Design • Mobile App",
    description: "Designed a clean, user-centric food ordering mobile app focusing on intuitive navigation, seamless checkout, and frictionless user flows to enhance daily meal delivery experiences.",
    imageSrc: "/mockups.png",
    externalLink: "https://www.figma.com/design/NlxJFafkYekZsW9EdplsRM/UI-Design?node-id=376-1011&t=MTLVWBcaJ24DWwek-1",
    year: "2025"
  }
];

const skills = [
  "Interaction Design", "Prototyping", "Design Systems",
  "User Research", "Wireframing", "Usability Testing",
  "Information Architecture"
];

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <main className="w-full bg-white text-zinc-900 selection:bg-teal-light/30">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-24 border-b border-zinc-100 overflow-hidden">
        {/* Very subtle ambient background */}
        <div className="absolute top-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-50 via-white to-white -z-10" />

        <div className="container mx-auto max-w-5xl text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block mb-8 px-4 py-1.5 border border-zinc-200 rounded-full text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              Dipesh Shrestha • Product Designer
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.9] text-zinc-950 mb-8">
              Clarity <span className="text-zinc-300 font-light italic">&</span> <br className="hidden md:block" />
              Purpose<span className="text-teal-dark">.</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              Crafting meticulous, user-centered digital experiences that balance aesthetic elegance with rigorous functionality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="#work"
                className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-teal-dark transition-colors"
              >
                Selected Work
                <span className="w-12 h-px bg-zinc-300 group-hover:bg-teal-dark group-hover:w-16 transition-all duration-300"></span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SELECTED WORK (Alternating Rows) */}
      <section id="work" className="py-32 md:py-48 px-6 border-b border-zinc-100">
        <div className="container mx-auto max-w-7xl">
          <FadeIn className="mb-24 md:mb-40 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Case Studies</h2>
            <p className="text-zinc-500 text-lg max-w-xl">A closer look at my process, problem-solving methodologies, and final deliverables.</p>
          </FadeIn>

          <div className="flex flex-col gap-32 md:gap-48">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={project.title} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>

                  {/* Image Container */}
                  <div className="w-full md:w-3/5 group">
                    <FadeIn delay={0.1}>
                      {project.slug ? (
                        <Link href={`/case-studies/${project.slug}`} className="block relative aspect-[4/3] bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                          <Image
                            src={project.imageSrc}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                        </Link>
                      ) : (
                        <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="block relative aspect-[4/3] bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
                          <Image
                            src={project.imageSrc}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                        </a>
                      )}
                    </FadeIn>
                  </div>

                  {/* Text Container */}
                  <div className="w-full md:w-2/5 flex flex-col justify-center">
                    <FadeIn delay={0.2} className="flex flex-col items-start">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">{project.year}</span>
                        <div className="w-1 h-1 rounded-full bg-amber-warm" />
                        <span className="text-xs font-bold tracking-widest text-teal-dark uppercase">{project.category}</span>
                      </div>

                      <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                        {project.title}
                      </h3>

                      <p className="text-zinc-500 text-lg leading-relaxed mb-10">
                        {project.description}
                      </p>

                      {project.slug ? (
                        <Link href={`/case-studies/${project.slug}`} className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border border-zinc-200 px-8 py-4 rounded-full hover:border-teal-dark hover:text-teal-dark transition-all duration-300">
                          Read Case Study
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      ) : (
                        <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest border border-zinc-200 px-8 py-4 rounded-full hover:border-teal-dark hover:text-teal-dark transition-all duration-300">
                          View Prototype
                          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                      )}
                    </FadeIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES / SKILLS */}
      <section className="py-32 px-6 bg-zinc-50 border-b border-zinc-100 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 max-w-sm">
              <FadeIn>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Capabilities</h2>
                <p className="text-zinc-500 leading-relaxed mb-8">
                  Focusing on creating invisible, frictionless systems that allow users to accomplish their goals without technological hindrance.
                </p>
                <a
                  href="/Resume_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-dark hover:text-teal-600 font-bold transition-colors"
                >
                  Download Full Resume
                  <Download size={16} />
                </a>
              </FadeIn>
            </div>

            <div className="md:col-span-8 flex flex-wrap content-start gap-4">
              {skills.map((skill, index) => (
                <FadeIn key={skill} delay={index * 0.05}>
                  <div className="px-6 py-4 bg-white border border-zinc-200 rounded-full text-zinc-900 font-medium shadow-sm hover:border-zinc-300 hover:shadow-md transition-all">
                    {skill}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT SPLIT */}
      <section className="py-32 px-6 border-b border-zinc-100">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full lg:w-5/12">
              <FadeIn>
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-none border border-zinc-200 overflow-hidden">
                  <Image
                    src="/porfoilo.jpg"
                    alt="Dipesh Shrestha"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </FadeIn>
            </div>

            <div className="w-full lg:w-7/12">
              <FadeIn delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Beyond the Canvas</h2>
                <div className="space-y-6 text-xl text-zinc-500 leading-relaxed font-light">
                  <p>
                    I'm deeply fascinated by the intersection of human psychology and digital interfaces. Based in Kathmandu, Nepal, I spend my days orchestrating pixels to build products people actually enjoy using.
                  </p>
                  <p>
                    Design isn't just about aesthetics; it's about translating complex logic into intuitive emotional responses. My approach involves rigorous research, rapid prototyping, and close collaboration with engineering teams.
                  </p>
                </div>

                <div className="mt-12">
                  <Link href="/about" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-teal-dark hover:text-teal-600 transition-colors group">
                    Read The Full Story
                    <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT FOOTER BLOCK */}
      <section className="py-40 px-6 bg-teal-dark text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Got a project?</h2>
            <p className="text-xl md:text-2xl text-teal-light/80 font-light max-w-2xl mx-auto mb-16">
              I am currently available for freelance projects and selectively open to full-time opportunities.
            </p>
            <a
              href="mailto:dipeshshresthaa70@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-teal-dark font-bold text-lg rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <Mail size={22} />
              Let's Talk
            </a>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}
