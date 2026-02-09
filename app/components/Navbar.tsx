"use client";

import Link from "next/link";
import { useState } from "react";

const subpages = [
  { title: "About", slug: "/about" },
  { title: "Resume", slug: "/resume" },
  { title: "Substack", slug: "https://treymadison.substack.com/" },
  { title: "LinkedIn", slug: "https://www.linkedin.com/in/trey-madison-116403328/" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-[100] mix-blend-difference text-white">
        <Link href="/" className="text-sm font-bold tracking-[0.3em] uppercase hover:opacity-50 transition-opacity">
          Home
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="group flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </nav>

      {/* Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl transition-all duration-500 flex items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-4 md:space-y-8 text-center py-12">
          {subpages.map((page, i) => (
            <Link 
              key={i} 
              href={page.slug}
              onClick={() => setIsOpen(false)}
              className="font-serif text-3xl md:text-5xl font-black tracking-tighter uppercase hover:text-stripe transition-all duration-300"
              style={{ 
                transitionDelay: `${i * 30}ms`,
                transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
                opacity: isOpen ? 1 : 0
              }}
            >
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
