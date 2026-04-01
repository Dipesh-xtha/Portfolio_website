import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 text-zinc-900 py-16">
            <div className="container mx-auto px-6 text-center max-w-6xl">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-3 text-teal-dark tracking-tight">Dipesh Shrestha</h2>
                    <p className="max-w-md mx-auto text-zinc-600 text-lg">
                        Creative and detail-oriented UI/UX Designer based in Kathmandu, Nepal.
                    </p>
                </div>

                <div className="flex justify-center space-x-6 mb-10">
                    <a href="https://www.facebook.com/dipesh.shrestha.896902" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 bg-white hover:text-white hover:bg-teal-dark hover:border-teal-dark transition-all duration-300" aria-label="Facebook">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 bg-white hover:text-white hover:bg-teal-dark hover:border-teal-dark transition-all duration-300" aria-label="Twitter">
                        <Twitter size={20} />
                    </a>
                    <a href="https://www.instagram.com/deepesh_xtha/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 bg-white hover:text-white hover:bg-teal-dark hover:border-teal-dark transition-all duration-300" aria-label="Instagram">
                        <Instagram size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/dipesh-shrestha-7ab9a6277/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 bg-white hover:text-white hover:bg-teal-dark hover:border-teal-dark transition-all duration-300" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                </div>

                <div className="text-zinc-500 text-sm border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} by Dipesh Shrestha. All Rights Reserved.</p>
                    <div className="mt-4 md:mt-0 flex items-center space-x-4">
                        <span className="flex items-center">
                            Designed with <Heart size={14} className="text-amber-warm mx-1" fill="currentColor" /> and intent.
                        </span>
                        <span className="hidden md:inline text-zinc-300">|</span>
                        <Link href="/privacy" className="hover:text-zinc-800 transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
