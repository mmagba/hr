"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "ראשי" },
    { href: "/about", label: "אודות" },
    { href: "/contact", label: "יצירת קשר" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-3">
            <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] focus-visible:ring-offset-2 rounded">
              <Image
                src="/logo.png"
                alt="לוגו Enas-HR"
                width={120}
                height={40}
                className="w-auto h-8 md:h-10 object-contain"
                priority
              />
              <div className="text-[#213988] text-xl md:text-2xl font-bold tracking-tight mt-2 hidden sm:block">
                Enas-HR
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#213988] font-medium text-sm lg:text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] focus-visible:ring-offset-2 rounded px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
            <a 
              href="/#contact" 
              className="ml-4 bg-[#213988] hover:bg-[#1a2d6b] text-white font-medium py-2 px-6 rounded shadow-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D827B] focus-visible:ring-offset-2"
            >
              הגש מועמדות
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#213988] hover:text-[#1a2d6b] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#213988] p-2 rounded-md"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="תפריט ניווט ראשי"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#213988] hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] text-right"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 px-3">
              <a 
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#213988] hover:bg-[#1a2d6b] text-white font-medium py-2 px-4 rounded shadow-md"
              >
                הגש מועמדות
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
