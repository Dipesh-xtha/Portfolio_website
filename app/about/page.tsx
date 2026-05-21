import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';

export default function About() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-teal-dark transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to Home
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-20">
                    <div className="md:col-span-1 rounded-2xl overflow-hidden aspect-[3/4] relative border border-zinc-200 shadow-xl">
                        <Image
                            src="/porfoilo.jpg"
                            alt="Dipesh Shrestha Portrait"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <h1 className="text-5xl font-bold tracking-tight mb-6">Hello, I'm Dipesh.</h1>
                        <div className="prose prose-lg text-zinc-600">
                            <p className="mb-6">
                                I am a UI/UX Designer based in Kathmandu, Nepal. My journey into design started from a deep curiosity about how people interact with digital environments.
                            </p>
                            <p className="mb-6">
                                Over the years, I have honed my skills across the entire product design lifecycle. I am just as comfortable conducting foundational user interviews to uncover pain points as I am pushing pixels in Figma to establish a strict, accessible design system.
                            </p>
                            <p className="mb-6">
                                I firmly believe that good design should be invisible—it shouldn't compete with the content; rather, it should act as a frictionless vehicle for the user to achieve their goals.
                            </p>
                            <p>
                                When I'm not designing, you can find me exploring new technologies, refining my front-end knowledge, or analyzing everyday interactions for inspiration.
                            </p>
                        </div>

                        <div className="mt-10">
                            <a
                                href="mailto:dipeshshresthaa70@gmail.com"
                                className="inline-flex items-center px-6 py-3 bg-teal-dark text-white font-medium rounded-full hover:scale-105 transition-all"
                            >
                                <Mail size={18} className="mr-2" /> Say Hello
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
