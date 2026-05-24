import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

export interface NavItem {
    label: string;
    href: string;
}

export interface NavbarProps {
    brandName?: string;
    navItems?: NavItem[];
    ctaText?: string;
    ctaHref?: any;
    secondaryCtaText?: string;
    secondaryCtaHref?: any;
}

const defaultNavItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar({
    brandName = 'AetherFlow',
    navItems = defaultNavItems,
    ctaText = 'Get Started',
    ctaHref = '#get-started',
    secondaryCtaText,
    secondaryCtaHref,
}: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Run once on mount to capture initial scroll status
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
                scrolled
                    ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-md shadow-slate-100/40 dark:shadow-none py-3'
                    : 'bg-transparent border-b border-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand Logo (Left) */}
                    <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 to-violet-500 shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
                            {/* Modern geometric glowing logo icon */}
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                            {/* Hover effect outer border */}
                            <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:scale-110 transition-transform duration-300 pointer-events-none"></div>
                        </div>
                        <span className="text-xl font-bold tracking-tight bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
                            {brandName}
                        </span>
                    </a>

                    {/* Navigation Menu (Center/Right-Center) */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-1.5 group"
                            >
                                {item.label}
                                {/* Expanding slide-from-center underline */}
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-violet-500 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                     {/* CTA Button & Mobile Toggle (Right) */}
                    <div className="flex items-center gap-4">
                        {/* Secondary CTA button (Desktop) */}
                        {secondaryCtaText && secondaryCtaHref && (
                            <div className="hidden md:flex items-center">
                                <Link
                                    href={secondaryCtaHref}
                                    className="relative inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 active:scale-95 transition-all duration-200"
                                >
                                    {secondaryCtaText}
                                </Link>
                            </div>
                        )}

                        {/* CTA button (Desktop) */}
                        <div className="hidden md:flex items-center">
                            <Link
                                href={ctaHref}
                                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 rounded-xl shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200 overflow-hidden group"
                            >
                                {/* Glow hover effect */}
                                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
                                <span className="relative z-10">{ctaText}</span>
                            </Link>
                        </div>

                        {/* Hamburger Menu Toggle Button (Mobile) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
                            aria-label="Toggle navigation menu"
                        >
                            <div className="relative w-5 h-5 flex flex-col justify-between items-center">
                                {/* Hamburger icon morphs into close 'X' */}
                                <span
                                    className={`w-5 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full transform transition-all duration-300 ease-in-out ${
                                        isOpen ? 'rotate-45 translate-y-2.25' : ''
                                    }`}
                                ></span>
                                <span
                                    className={`w-5 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full transition-all duration-300 ease-in-out ${
                                        isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                                    }`}
                                ></span>
                                <span
                                    className={`w-5 h-0.5 bg-slate-700 dark:bg-slate-300 rounded-full transform transition-all duration-300 ease-in-out ${
                                        isOpen ? '-rotate-45 -translate-y-2.25' : ''
                                    }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu Drawer */}
            <div
                className={`absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200/80 dark:border-slate-800/80 shadow-lg transition-all duration-300 ease-in-out transform origin-top md:hidden ${
                    isOpen
                        ? 'opacity-100 scale-y-100 translate-y-0'
                        : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                }`}
            >
                <div className="px-6 py-6 flex flex-col gap-4">
                    {navItems.map((item, idx) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2 border-b border-slate-100 dark:border-slate-800/50"
                            style={{ transitionDelay: `${idx * 40}ms` }}
                        >
                            {item.label}
                        </a>
                    ))}
                    {secondaryCtaText && secondaryCtaHref && (
                        <Link
                            href={secondaryCtaHref}
                            onClick={() => setIsOpen(false)}
                            className="mt-2 w-full inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-200 text-center"
                        >
                            {secondaryCtaText}
                        </Link>
                    )}
                    <Link
                        href={ctaHref}
                        onClick={() => setIsOpen(false)}
                        className="mt-2 w-full inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-white bg-linear-to-r from-indigo-600 to-violet-600 rounded-xl shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-95 transition-all duration-200 text-center"
                    >
                        {ctaText}
                    </Link>
                </div>
            </div>
        </header>
    );
}
