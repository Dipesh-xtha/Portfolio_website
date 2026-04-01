"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Case Studies', path: '/#case-studies' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 glass-panel border-b border-glass-border transition-all duration-300">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-6xl">
                <Link href="/">
                    <img src="/logo_portfolio.png" alt="Dipesh." className="h-8 md:h-10 w-auto object-contain mix-blend-multiply drop-shadow-sm" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="text-foreground hover:text-amber-warm transition-colors font-medium text-sm uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground hover:text-amber-warm focus:outline-none transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Nav */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 border-t border-glass-border opacity-100' : 'max-h-0 opacity-0'
                    } glass-panel`}
            >
                <div className="flex flex-col space-y-4 px-6 py-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className="text-foreground hover:text-amber-warm transition-colors font-medium text-lg"
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
