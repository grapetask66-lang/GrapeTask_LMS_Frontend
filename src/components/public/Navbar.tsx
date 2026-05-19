'use client';

import React, { useState, useEffect, useCallback } from 'react';
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
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
        className={`fixed top-0 left-0 right-0 z-50 will-change-transform ${
          isScrolled || mobileMenuOpen ? 'glass-navbar py-4 shadow-2xl' : 'bg-transparent py-8'
        }`}
        style={{ transition: 'background-color 0.15s ease, padding 0.15s ease, box-shadow 0.15s ease' }}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 orange-gradient rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-primaryOrange/20 group-hover:scale-105 active:scale-95 transition-transform duration-150">
              <GraduationCap className="text-white w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-white leading-none">
                GrapeTask <span className="text-primaryOrange">LMS</span>
              </span>
              <span className="text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-bodyGrayText mt-0.5 sm:mt-1">Skill-to-Earn</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold tracking-tight hover:text-primaryOrange active:scale-95 transition-colors duration-100 ${
                  pathname === link.href ? 'text-primaryOrange' : 'text-mediumGrayTitle'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
            <Link
              href="/login"
              className="flex items-center space-x-2 px-4 xl:px-6 py-2 xl:py-2.5 text-sm font-bold text-white hover:text-primaryOrange active:scale-95 transition-all duration-100"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link
              href="/register"
              className="flex items-center space-x-2 px-6 xl:px-8 py-2.5 xl:py-3.5 bg-primaryOrange hover:bg-opacity-90 text-white text-sm font-black rounded-xl sm:rounded-2xl active:scale-95 shadow-lg xl:shadow-xl shadow-primaryOrange/20 transition-all duration-100"
            >
              <UserPlus className="w-4 h-4" />
              <span>Join Free</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -mr-2 text-white hover:bg-white/10 active:bg-white/15 rounded-lg transition-colors duration-100"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 top-[72px] sm:top-[80px] bg-[#020617]/98 backdrop-blur-xl z-40"
            style={{ 
              animation: 'fadeIn 0.15s ease-out'
            }}
          >
            <div className="p-4 sm:p-8 flex flex-col space-y-1 sm:space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`text-base sm:text-lg font-bold tracking-tight py-3 px-4 rounded-xl hover:bg-white/5 active:bg-white/10 active:scale-[0.98] transition-all duration-100 ${
                    pathname === link.href ? 'text-primaryOrange bg-primaryOrange/5' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 sm:pt-6 flex flex-col space-y-3">
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="w-full py-3 sm:py-4 bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-white font-bold text-sm rounded-xl text-center flex items-center justify-center space-x-2 active:scale-[0.98] transition-all duration-100"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  onClick={closeMobileMenu}
                  className="w-full py-3 sm:py-4 bg-primaryOrange hover:bg-opacity-95 active:bg-opacity-100 text-white font-extrabold text-sm rounded-xl text-center flex items-center justify-center space-x-2 shadow-lg shadow-primaryOrange/20 active:scale-[0.98] transition-all duration-100"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Join Free</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer to prevent content jump */}
      <div className="h-16 sm:h-20 md:h-24" />
    </>
  );
};

export default Navbar;
