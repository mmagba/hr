"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "ראשי" },
    { href: "/about", label: "אודות" },
    { href: "/contact", label: "יצירת קשר" },
  ];

  return (
    <nav className="bg-white/75 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center relative">

          {/* Logo */}
          <div className="flex shrink-0 items-center gap-3">
            <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] focus-visible:ring-offset-2 rounded transform transition-transform hover:scale-105 duration-200">
              <Image
                src="/logo.png"
                alt="לוגו Enas-HR"
                width={140}
                height={48}
                className="w-auto h-10 md:h-12 object-contain"
                priority
              />
              <div className="text-[#213988] text-2xl md:text-3xl font-bold tracking-tight mt-1 sm:block">
                Enas-HR
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 md:items-center md:gap-12 lg:gap-16">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium text-sm lg:text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] focus-visible:ring-offset-2 rounded-md px-3 py-2 ${isActive
                    ? "text-[#213988] font-bold bg-[#eef1ff]"
                    : "text-gray-700 hover:text-[#213988] hover:bg-gray-50"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex shrink-0 items-center">
            <a
              href="/#contact"
              className="bg-[#213988] hover:bg-[#1a2d6b] text-white font-medium py-2 px-6 rounded shadow-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D827B] focus-visible:ring-offset-2"
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
      <div
        className={`md:hidden grid transition-all duration-300 ease-in-out ${isMenuOpen ? "grid-rows-[1fr] opacity-100 visible" : "grid-rows-[0fr] opacity-0 invisible"
          }`}
        id="mobile-menu"
      >
        <div className="overflow-hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 shadow-lg border-t border-gray-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] text-right ${isActive
                    ? "text-[#213988] font-bold bg-[#eef1ff]"
                    : "text-gray-700 hover:text-[#213988] hover:bg-gray-50"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
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
      </div>
    </nav>
  );
}
