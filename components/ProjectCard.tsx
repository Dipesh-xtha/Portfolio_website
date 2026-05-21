"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    category: string;
    imageSrc: string;
    slug?: string;
    externalLink?: string;
}

export default function ProjectCard({ title, category, imageSrc, slug, externalLink }: ProjectCardProps) {
    const content = (
        <motion.div
            className="glass-panel rounded-2xl overflow-hidden group cursor-pointer h-full flex flex-col"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-teal-dark/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between bg-white/50 backdrop-blur-sm">
                <div>
                    <p className="text-amber-warm text-xs font-bold uppercase tracking-wider mb-2">{category}</p>
                    <h3 className="text-2xl font-bold text-teal-dark mb-4">{title}</h3>
                </div>
                <div className="flex items-center text-foreground font-medium group-hover:text-amber-warm transition-colors mt-4">
                    <span className="mr-2">View Project</span>
                    <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );

    if (externalLink) {
        return (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block h-full">
                {content}
            </a>
        );
    }

    return (
        <Link href={`/case-studies/${slug}`} className="block h-full">
            {content}
        </Link>
    );
}
