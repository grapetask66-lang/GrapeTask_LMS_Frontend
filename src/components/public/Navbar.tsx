'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', href: '/#explore' },
    { name: 'Courses', href: '/courses' },
    { name: 'For Trainers', href: '/for-trainers' },
    { name: 'For Institutions', href: '/for-institutions' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-navbar py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 orange-gradient rounded-xl flex items-center justify-center shadow-lg shadow-primaryOrange/20">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            GrapeTask <span className="text-primaryOrange">LMS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primaryOrange ${
                pathname === link.href ? 'text-primaryOrange' : 'text-mediumGrayTitle'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="px-6 py-2 text-sm font-medium text-white hover:text-primaryOrange transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-6 py-2.5 bg-primaryOrange hover:bg-opacity-90 text-white text-sm font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primaryOrange/20"
          >
            Join Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
