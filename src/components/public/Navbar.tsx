'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, LogIn, UserPlus, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen ? 'glass-navbar py-4 shadow-2xl' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 orange-gradient rounded-2xl flex items-center justify-center shadow-lg shadow-primaryOrange/20 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="text-white w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white leading-none">
                GrapeTask <span className="text-primaryOrange">LMS</span>
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-bodyGrayText mt-1">Skill-to-Earn</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold tracking-tight transition-all hover:text-primaryOrange ${
                  pathname === link.href ? 'text-primaryOrange' : 'text-mediumGrayTitle'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/login"
              className="flex items-center space-x-2 px-6 py-2.5 text-sm font-bold text-white hover:text-primaryOrange transition-all duration-200"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link
              href="/register"
              className="flex items-center space-x-2 px-8 py-3.5 bg-primaryOrange hover:bg-opacity-90 text-white text-sm font-black rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-primaryOrange/20"
            >
              <UserPlus className="w-4 h-4" />
              <span>Join Free</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white hover:bg-white/5 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-x-0 top-[88px] bg-[#020617]/95 backdrop-blur-2xl border-t border-white/5 transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-black tracking-tighter ${
                  pathname === link.href ? 'text-primaryOrange' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 flex flex-col space-y-4">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-5 bg-white/5 text-white font-black text-xl rounded-2xl text-center flex items-center justify-center space-x-3"
              >
                <LogIn className="w-6 h-6" />
                <span>Login</span>
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-5 bg-primaryOrange text-white font-black text-xl rounded-2xl text-center flex items-center justify-center space-x-3 shadow-2xl shadow-primaryOrange/20"
              >
                <UserPlus className="w-6 h-6" />
                <span>Join Free</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content jump */}
      <div className="h-20 md:h-24" />
    </>
  );
};

export default Navbar;
