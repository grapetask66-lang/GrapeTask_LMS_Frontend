'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, LogIn, UserPlus, GraduationCap, ChevronRight, 
  Sparkles, Zap, Star, ArrowUpRight 
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const navLinks = [
    { name: 'Explore', href: '/#explore', icon: Sparkles },
    { name: 'Courses', href: '/courses', icon: Zap },
    { name: 'For Trainers', href: '/for-trainers', icon: Star },
    { name: 'For Institutions', href: '/for-institutions', icon: ArrowUpRight },
    { name: 'Pricing', href: '/pricing', icon: null },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-2px) rotate(1deg);
          }
          75% {
            transform: translateY(2px) rotate(-1deg);
          }
        }
        
        @keyframes borderGlow {
          0%, 100% {
            border-color: rgba(249, 115, 22, 0.1);
          }
          50% {
            border-color: rgba(249, 115, 22, 0.3);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes gradientShift {
          0% {
            background: linear-gradient(135deg, #F97316 0%, #EA580C 50%, #F97316 100%);
          }
          50% {
            background: linear-gradient(135deg, #EA580C 0%, #F97316 50%, #EA580C 100%);
          }
          100% {
            background: linear-gradient(135deg, #F97316 0%, #EA580C 50%, #F97316 100%);
          }
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(249, 115, 22, 0.1) 25%,
            rgba(249, 115, 22, 0.2) 50%,
            rgba(249, 115, 22, 0.1) 75%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        .floating-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .border-glow-animation {
          animation: borderGlow 2s ease-in-out infinite;
        }
        
        .gradient-shift-animation {
          animation: gradientShift 3s ease-in-out infinite;
        }
        
        .magnetic-button {
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .glass-nav {
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border-bottom: 1px solid rgba(249, 115, 22, 0.15);
          box-shadow: 
            0 4px 24px -1px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(249, 115, 22, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        
        .nav-link-active-indicator {
          position: relative;
          overflow: hidden;
        }
        
        .nav-link-active-indicator::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #F97316, #FB923C, #F97316);
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link-active-indicator:hover::before,
        .nav-link-active-indicator.active::before {
          transform: scaleX(1);
        }
        
        .ripple-effect {
          position: relative;
          overflow: hidden;
        }
        
        .ripple-effect::after {
          content: '';
          position: absolute;
          width: 100%;
          padding-top: 100%;
          border-radius: 50%;
          background: rgba(249, 115, 22, 0.3);
          opacity: 0;
          transform: scale(0);
          pointer-events: none;
        }
        
        .ripple-effect:active::after {
          animation: ripple 0.6s ease-out;
        }
        
        .mobile-menu-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .mobile-menu-item:hover {
          transform: translateX(8px);
        }
      `}</style>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen 
            ? 'glass-nav py-2 lg:py-2.5' 
            : 'bg-transparent py-3 lg:py-5'
        }`}
      >
        {/* Ambient background glow effect */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div 
            className="absolute inset-0 transition-all duration-300"
            style={{
              background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(249, 115, 22, 0.15), transparent 70%)`
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Logo Section - Enhanced */}
          <Link 
            href="/" 
            className="flex min-w-0 items-center gap-2 sm:gap-3 group relative"
            onMouseEnter={() => setHoveredLink('logo')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div className="relative floating-animation">
              {/* Outer glow ring */}
              <div className="absolute -inset-2 bg-primaryOrange/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100" />
              
              {/* Main icon container */}
              <div className="relative w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-primaryOrange via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-primaryOrange/40 group-hover:shadow-primaryOrange/60 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-3xl">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
                <GraduationCap className="text-white w-6 h-6 sm:w-8 sm:h-8 relative z-10 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-lg" />
                
                {/* Sparkle effects */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100" />
              </div>
            </div>
            
            {/* Text section */}
            <div className="flex min-w-0 flex-col">
              <div className="relative overflow-hidden">
                <span className="text-lg sm:text-2xl font-black tracking-tight text-white leading-none transition-all duration-300 group-hover:scale-105 inline-block">
                  GrapeTask{' '}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryOrange via-orange-400 to-amber-400">
                      LMS
                    </span>
                    {/* Shimmer overlay */}
                    <span className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
                  </span>
                </span>
              </div>
              <span className="text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.32em] text-bodyGrayText mt-0.5 sm:mt-1 group-hover:text-primaryOrange/80 transition-all duration-300">
                Skill-to-Earn
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredLink === link.name;
              const Icon = link.icon;
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`nav-link-active-indicator relative group px-3 xl:px-5 py-2.5 text-sm font-bold tracking-tight transition-all duration-300 rounded-xl ${
                    isActive 
                      ? 'text-primaryOrange active bg-primaryOrange/5 shadow-lg shadow-primaryOrange/5' 
                      : 'text-mediumGrayTitle hover:text-white hover:bg-white/[0.03]'
                  } ${isHovered ? 'scale-105' : ''}`}
                >
                  <span className="flex items-center space-x-1.5">
                    {Icon && (
                      <Icon className={`w-3.5 h-3.5 transition-all duration-300 ${
                        isHovered ? 'scale-110 rotate-12' : ''
                      } ${isActive ? 'text-primaryOrange' : 'text-white/40 group-hover:text-primaryOrange/70'}`} 
                      />
                    )}
                    <span>{link.name}</span>
                  </span>
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
                      <span className="w-1 h-1 bg-primaryOrange rounded-full animate-pulse" />
                      <span className="w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-75" />
                      <span className="w-1 h-1 bg-amber-400 rounded-full animate-pulse delay-150" />
                    </span>
                  )}
                  
                  {/* Hover background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-primaryOrange/0 via-primaryOrange/5 to-primaryOrange/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : ''
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth Buttons - Enhanced */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {/* Login Button */}
            <Link
              href="/login"
              className="relative group flex items-center space-x-2 px-4 xl:px-6 py-2.5 text-sm font-bold text-white/80 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/[0.05] magnetic-button"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange/0 via-primaryOrange/5 to-primaryOrange/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <LogIn className="w-4 h-4 transition-all duration-300 group-hover:-translate-x-1 group-hover:scale-110" />
              <span className="relative z-10">Login</span>
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primaryOrange/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            
            {/* Divider */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            
            {/* CTA Button - Premium */}
            <div className="relative" 
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              {/* Outer glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-primaryOrange via-orange-500 to-amber-500 rounded-xl blur-lg transition-all duration-500 ${
                isButtonHovered ? 'opacity-75 scale-110' : 'opacity-30 scale-100'
              }`} />
              
              {/* Magnetic container */}
              <Link
                href="/login?mode=signup"
                className="ripple-effect relative flex items-center space-x-2 px-5 xl:px-7 py-3 bg-gradient-to-r from-primaryOrange via-orange-500 to-primaryOrange text-white text-sm font-black rounded-xl transition-all duration-500 shadow-2xl shadow-primaryOrange/30 hover:shadow-primaryOrange/50 transform hover:scale-105 active:scale-95 gradient-shift-animation group overflow-hidden border border-orange-400/20"
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                </div>
                
                <UserPlus className="w-4 h-4 relative z-10 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 filter drop-shadow-md" />
                <span className="relative z-10">Join Free</span>
                <ChevronRight className="w-4 h-4 relative z-10 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
              </Link>
            </div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button 
            className="lg:hidden relative p-2.5 -mr-2 text-white hover:text-primaryOrange transition-all duration-300 rounded-xl hover:bg-white/[0.05] active:bg-white/[0.1] group ripple-effect magnetic-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7">
              {/* Animated icon transition */}
              <div className={`absolute inset-0 transition-all duration-500 transform ${
                mobileMenuOpen ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}>
                <Menu className="w-full h-full transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className={`absolute inset-0 transition-all duration-500 transform ${
                mobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-180 scale-0 opacity-0'
              }`}>
                <X className="w-full h-full transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            
            {/* Notification dot for menu */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-primaryOrange rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
          </button>
        </div>
      </nav>

      {/* Premium Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[60px] sm:top-[76px] z-40"
          style={{ animation: 'fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          {/* Animated gradient overlay */}
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0"
            onClick={closeMobileMenu}
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.1), rgba(0, 0, 0, 0.8) 70%)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)'
            }}
          />
          
          <aside
            className="relative z-50 h-full w-[min(22rem,calc(100vw-1rem))] ml-2 overflow-hidden border-r border-primaryOrange/20 bg-gradient-to-br from-gray-900 via-mainBg to-gray-950 shadow-2xl rounded-r-3xl"
            style={{
              animation: 'fadeInUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) both',
              boxShadow: '0 25px 50px -12px rgba(249, 115, 22, 0.25), 0 0 0 1px rgba(249, 115, 22, 0.1)'
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primaryOrange/20 via-primaryOrange/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primaryOrange/10 via-transparent to-transparent pointer-events-none" />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" 
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
            
            <div className="relative p-4 sm:p-8 flex flex-col space-y-2 overflow-y-auto max-h-[calc(100vh-60px)] sm:max-h-[calc(100vh-76px)]">
              {/* Menu header */}
              <div className="pb-6 mb-4 border-b border-white/5">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primaryOrange to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-primaryOrange/20">
                    <GraduationCap className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-white">GrapeTask LMS</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primaryOrange/60">Navigation Menu</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation links with icons */}
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`mobile-menu-item group relative flex items-center justify-between py-3.5 px-5 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'text-primaryOrange bg-primaryOrange/10 border border-primaryOrange/20 shadow-lg shadow-primaryOrange/5' 
                        : 'text-white/80 hover:text-white hover:bg-white/[0.03] border border-transparent hover:border-white/5'
                    }`}
                    style={{
                      animationDelay: `${index * 60}ms`,
                      animation: 'fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) both'
                    }}
                  >
                    <span className="flex items-center space-x-3">
                      {Icon && (
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive ? 'bg-primaryOrange/20' : 'bg-white/5 group-hover:bg-primaryOrange/10'
                        }`}>
                          <Icon className={`w-4 h-4 transition-all duration-300 ${
                            isActive ? 'text-primaryOrange' : 'text-white/40 group-hover:text-primaryOrange/70 group-hover:scale-110'
                          }`} />
                        </div>
                      )}
                      <span className="text-sm sm:text-base font-bold tracking-tight leading-snug">{link.name}</span>
                    </span>
                    
                    <div className="flex items-center space-x-2">
                      {isActive && (
                        <span className="flex space-x-1">
                          <span className="w-1.5 h-1.5 bg-primaryOrange rounded-full animate-pulse" />
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse delay-75" />
                        </span>
                      )}
                      <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? 'text-primaryOrange translate-x-1' : 'text-white/20 group-hover:text-primaryOrange/50 group-hover:translate-x-2'
                      }`} />
                    </div>
                    
                    {/* Active indicator bar */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-10 bg-gradient-to-b from-primaryOrange via-orange-500 to-transparent rounded-r-full" />
                    )}
                    
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange/0 via-primaryOrange/5 to-primaryOrange/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                );
              })}
              
              {/* Premium divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/5"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-bodyGrayText/40 bg-mainBg/50 backdrop-blur-sm">
                    Account
                  </span>
                </div>
              </div>
              
              {/* Auth buttons with premium styling */}
              <div className="space-y-3 pt-2">
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-primaryOrange/20 text-white font-bold text-sm rounded-2xl transition-all duration-300 active:scale-[0.98] group relative overflow-hidden"
                  style={{ animation: 'fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primaryOrange/0 via-primaryOrange/5 to-primaryOrange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <LogIn className="w-4 h-4 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-primaryOrange" />
                  <span>Login to Account</span>
                </Link>
                
                <Link
                  href="/login?mode=signup"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-primaryOrange via-orange-500 to-primaryOrange text-white font-extrabold text-sm rounded-2xl transition-all duration-500 shadow-2xl shadow-primaryOrange/30 active:scale-[0.98] group relative overflow-hidden gradient-shift-animation"
                  style={{ animation: 'fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both' }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000" />
                  <UserPlus className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 filter drop-shadow-md" />
                  <span className="relative z-10 text-base">Get Started Free</span>
                  <Sparkles className="w-4 h-4 relative z-10 transition-all duration-300 group-hover:scale-125 animate-pulse" />
                </Link>
              </div>
              
              {/* Footer branding */}
              <div className="mt-auto pt-8 pb-4">
                <div className="bg-white/[0.02] rounded-2xl p-4 border border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <p className="text-[10px] font-bold text-white/40">Live Platform</p>
                    </div>
                    <p className="text-[10px] font-bold text-white/20">v2.0</p>
                  </div>
                  <p className="text-[10px] text-center text-bodyGrayText/30 mt-3">
                    © 2024 GrapeTask • Skill-to-Earn
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
      
      {/* Enhanced Spacer */}
      <div className="h-16 sm:h-[5.5rem] lg:h-[6.5rem]" />
    </>
  );
};

export default Navbar;
