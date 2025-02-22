    // src/components/Navigation.js
    "use client";
    import { IoReorderThree } from "react-icons/io5";


    import { useState } from "react";
    import Link from "next/link";

    export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex w-full justify-between items-center gap-4 text-2xl">
        <div className="ml-4 text-4xl">Sabrina Shafer</div>
        
        {/* Hamburger Menu Button */}
        <button 
            className="lg:hidden z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
        >
            <IoReorderThree />
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Mobile Menu */}
        <div className={`
            lg:hidden fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-300 ease-in-out z-40
            ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}>
            <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>About Me</Link>
            <Link href="/work" onClick={() => setIsMenuOpen(false)}>Work</Link>
            <Link href="/resume" onClick={() => setIsMenuOpen(false)}>Resume</Link>
            <Link 
                href="/contact" 
                className="bg-special px-6 py-2 rounded-full hover:bg-special2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
            >
                Get in Touch!
            </Link>
            </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 mr-4 text-black text-base">
            <Link href="/">About Me</Link>
            <Link href="/work">Work</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/contact" className="bg-special px-4 py-1 rounded-full hover:bg-special2 transition-colors">
            Get in Touch!
            </Link>
        </div>
        </nav>
    );
    }