"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "דף הבית" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "יצירת קשר" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" aria-label="ניווט ראשי">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] rounded-md px-1" aria-label="Enas-HR - דף הבית">
            <Image
              src="/logo.png"
              alt="לוגו Enas-HR"
              width={160}
              height={52}
              className="w-auto h-9 md:h-12 object-contain"
              priority
            />
            <span className="text-[#213988] text-2xl md:text-3xl font-bold tracking-tight mt-1 group-hover:opacity-80 transition-opacity">Enas-HR</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988] focus-visible:ring-offset-2
                    ${isActive
                      ? "text-[#213988] bg-[#213988]/10 font-semibold"
                      : "text-gray-600 hover:text-[#213988] hover:bg-gray-100"
                    }
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#213988] hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988]"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? "סגירת תפריט" : "פתיחת תפריט"}
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-60 border-t border-gray-200" : "max-h-0"}`}
      >
        <div className="px-4 py-3 space-y-1 bg-white">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  block px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#213988]
                  ${isActive
                    ? "text-[#213988] bg-[#213988]/10 font-semibold"
                    : "text-gray-600 hover:text-[#213988] hover:bg-gray-50"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
