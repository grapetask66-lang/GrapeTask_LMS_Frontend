'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const AUTH_SLIDES = [
  {
    image: '/images/auth/slide1.png',
    badge1: 'Active Courses',
    badge1Desc: 'High-Demand Skills',
    badge2: 'Live Sessions',
    badge2Desc: 'Interactive Learning',
    title: 'Master Digital Skills',
    desc: 'Learn Smarter. Grow Faster with GrapeTask LMS. Turn your knowledge into expertise.'
  },
  {
    image: '/images/auth/slide2.png',
    badge1: 'Verified Badges',
    badge1Desc: 'Global Recognition',
    badge2: 'Expert Trainers',
    badge2Desc: 'Learn from the Best',
    title: 'Get Certified',
    desc: 'Earn certificates that prove your expertise and unlock high-paying global opportunities.'
  },
  {
    image: '/images/auth/slide3.png',
    badge1: 'Practical Tasks',
    badge1Desc: 'Hands-on Projects',
    badge2: 'Freelance Ready',
    badge2Desc: 'Direct Client Contracts',
    title: 'Skill to Earn',
    desc: 'Connect directly with global clients and launch your successful freelance career with GrapeTask.'
  }
];

export default function DoubleSliderAuth() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (mode === 'signup') {
      setIsSignUp(true);
    }
  }, [mode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % AUTH_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const togglePanel = () => setIsSignUp(!isSignUp);

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/onboarding');
  };

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.localStorage.setItem('grapetask_lms_token', 'dummy-token');
    window.localStorage.setItem('grapetask_lms_user', JSON.stringify({ role: 'trainer', name: 'Test User' }));
    router.push('/trainer/dashboard');
  };

  return (
    <div className="relative w-full max-w-5xl min-h-[100dvh] sm:min-h-[650px] sm:h-[650px] bg-[#020617] sm:bg-white/[0.02] border-0 sm:border border-white/10 rounded-none sm:rounded-[2.5rem] sm:shadow-2xl sm:backdrop-blur-2xl overflow-hidden flex flex-col sm:flex-row">
      
      {/* ─── CSS FOR THE SLIDER ANIMATION ─── */}
      <style dangerouslySetInnerHTML={{__html: `
        .auth-container { position: relative; width: 100%; height: 100%; overflow: hidden; background-color: #020617; }
        .form-container { position: absolute; top: 0; height: 100%; transition: all 0.6s ease-in-out; background-color: #020617; }
        .sign-in-container { left: 0; width: 50%; z-index: 2; opacity: 1; visibility: visible; }
        .auth-container.right-panel-active .sign-in-container { transform: translateX(100%); opacity: 0; visibility: hidden; transition: opacity 0.3s, transform 0.6s, visibility 0.6s; }
        
        .sign-up-container { left: 0; width: 50%; opacity: 0; z-index: 1; visibility: hidden; }
        .auth-container.right-panel-active .sign-up-container { transform: translateX(100%); opacity: 1; z-index: 5; visibility: visible; animation: show 0.6s; }
        
        @keyframes show {
          0%, 49.99% { opacity: 0; z-index: 1; visibility: hidden; }
          50%, 100% { opacity: 1; z-index: 5; visibility: visible; }
        }

        .overlay-container { position: absolute; top: 0; left: 50%; width: 50%; height: 100%; overflow: hidden; transition: transform 0.6s ease-in-out; z-index: 100; }
        .auth-container.right-panel-active .overlay-container { transform: translateX(-100%); }
        
        .overlay { background: transparent; position: relative; left: -100%; height: 100%; width: 200%; transform: translateX(0); transition: transform 0.6s ease-in-out; }
        .auth-container.right-panel-active .overlay { transform: translateX(50%); }
        
        .overlay-panel { position: absolute; display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 0 40px; text-align: center; top: 0; height: 100%; width: 50%; transform: translateX(0); transition: transform 0.6s ease-in-out; z-index: 20; }
        .overlay-left { transform: translateX(-20%); }
        .auth-container.right-panel-active .overlay-left { transform: translateX(0); }
        .overlay-right { right: 0; transform: translateX(0); }
        .auth-container.right-panel-active .overlay-right { transform: translateX(20%); }

        /* Mobile specific fixes - Carousel Top, Form Bottom */
        @media (max-width: 768px) {
          .auth-container { min-height: 100vh; overflow-y: auto; overflow-x: hidden; display: flex; flex-direction: column; }
          
          /* The Image Carousel Overlay goes to the top */
          .overlay-container { display: block; width: 100%; height: 380px; min-height: 380px; left: 0; top: 0; position: relative; z-index: 10; transform: none !important; transition: none; border-bottom-left-radius: 1.5rem; border-bottom-right-radius: 1.5rem; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5); }
          .auth-container.right-panel-active .overlay-container { transform: none !important; }
          
          .overlay { width: 100%; height: 100%; top: 0; left: 0; transform: none !important; transition: none; background: transparent; }
          .auth-container.right-panel-active .overlay { transform: none !important; }
          
          /* Hide the desktop overlay buttons on mobile since we will use text links at the bottom */
          .overlay-panel { display: none !important; }
          
          /* The forms take up the rest of the space below the carousel */
          .form-container { width: 100%; height: auto; position: absolute; top: 380px; padding: 30px 20px 40px 20px; transition: opacity 0.4s ease-in-out; }
          
          .sign-in-container { opacity: 1; visibility: visible; z-index: 5; transform: none !important; left: 0; }
          .auth-container.right-panel-active .sign-in-container { opacity: 0; visibility: hidden; z-index: 1; transform: none !important; left: 0; display: none; }
          
          .sign-up-container { opacity: 0; visibility: hidden; z-index: 1; transform: none !important; left: 0; display: none; }
          .auth-container.right-panel-active .sign-up-container { opacity: 1; visibility: visible; z-index: 5; animation: none; transform: none !important; left: 0; display: flex; }
        }
      `}} />

      <div className={`auth-container w-full h-full ${isSignUp ? 'right-panel-active' : ''}`}>
        
        {/* SIGN UP FORM */}
        <div className="form-container sign-up-container flex items-start sm:items-center justify-center p-0 sm:p-12">
          <form onSubmit={handleSignUpSubmit} className="flex flex-col items-center justify-center w-full sm:max-w-sm text-center sm:mt-0">
            {/* Mobile Title */}
            <div className="sm:hidden w-full text-left mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f0591f] to-[#ff7a45] flex items-center justify-center shadow-lg shadow-[#f0591f]/20">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-xl font-black text-white">GrapeTask<span className="text-[#f0591f]">.</span></span>
              </div>
              <h1 className="text-3xl font-black text-white mb-2">Create account</h1>
              <p className="text-sm text-[#a1a1aa]">Sign up to GrapeTask — Pakistan's #1 freelance marketplace</p>
            </div>
            
            <h1 className="hidden sm:block text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2 tracking-tight">Create Account</h1>
            <p className="hidden sm:block text-xs sm:text-sm text-[#a1a1aa] mb-4 sm:mb-8">Join Pakistan's #1 Skill-to-Earn platform</p>

            <div className="w-full space-y-3 sm:space-y-4">
              <div className="relative group text-left">
                <label className="sm:hidden text-xs font-bold text-white/70 mb-1 ml-1 block uppercase tracking-wider">Full Name</label>
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none sm:top-0 top-6">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-[#a1a1aa] group-focus-within:text-[#f0591f] transition-colors" />
                </div>
                <input type="text" placeholder="John Doe" required className="block w-full pl-9 sm:pl-11 pr-4 py-3 sm:py-3 bg-white/[0.03] sm:bg-white/[0.03] bg-transparent border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder-[#71717a] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all" />
              </div>
              <div className="relative group text-left">
                <label className="sm:hidden text-xs font-bold text-white/70 mb-1 ml-1 block uppercase tracking-wider">Email</label>
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none sm:top-0 top-6">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#a1a1aa] group-focus-within:text-[#f0591f] transition-colors" />
                </div>
                <input type="email" placeholder="you@example.com" required className="block w-full pl-9 sm:pl-11 pr-4 py-3 sm:py-3 bg-white/[0.03] sm:bg-white/[0.03] bg-transparent border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder-[#71717a] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all" />
              </div>
              <div className="relative group text-left">
                <label className="sm:hidden text-xs font-bold text-white/70 mb-1 ml-1 block uppercase tracking-wider">Password</label>
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none sm:top-0 top-6">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-[#a1a1aa] group-focus-within:text-[#f0591f] transition-colors" />
                </div>
                <input type="password" placeholder="••••••••" required className="block w-full pl-9 sm:pl-11 pr-4 py-3 sm:py-3 bg-white/[0.03] sm:bg-white/[0.03] bg-transparent border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder-[#71717a] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all" />
              </div>
            </div>

            <button type="submit" className="w-full mt-6 sm:mt-6 py-3.5 sm:py-4 bg-gradient-to-r from-[#f0591f] to-[#ff7a45] text-white font-bold text-sm sm:text-base rounded-xl hover:shadow-[0_0_20px_rgba(240,89,31,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2">
              Let's go <ArrowRight className="w-4 h-4" />
            </button>

            <div className="relative w-full flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
              <div className="relative bg-[#020617] px-3 sm:px-4 text-[10px] sm:text-xs text-[#71717a] lowercase tracking-wider">or sign up with Google</div>
            </div>

            <div className="flex w-full mb-6 sm:mb-0">
              <button type="button" className="w-full flex items-center justify-center gap-2 py-3 sm:py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span className="text-white font-bold text-sm">Sign up with Google</span>
              </button>
            </div>

            {/* Mobile Toggle Link */}
            <div className="sm:hidden w-full text-center mt-2 mb-8">
              <p className="text-sm text-[#71717a]">Already a member? <button type="button" onClick={togglePanel} className="text-[#f0591f] font-bold">Sign in here</button></p>
            </div>

          </form>
        </div>

        {/* SIGN IN FORM */}
        <div className="form-container sign-in-container flex items-start sm:items-center justify-center p-0 sm:p-12">
          <form onSubmit={handleSignInSubmit} className="flex flex-col items-center justify-center w-full sm:max-w-sm text-center sm:mt-0">
            
            {/* Mobile Title */}
            <div className="sm:hidden w-full text-left mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f0591f] to-[#ff7a45] flex items-center justify-center shadow-lg shadow-[#f0591f]/20">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-xl font-black text-white">GrapeTask<span className="text-[#f0591f]">.</span></span>
              </div>
              <h1 className="text-3xl font-black text-white mb-2">Welcome back</h1>
              <p className="text-sm text-[#a1a1aa]">Sign in to GrapeTask — Pakistan's #1 freelance marketplace</p>
            </div>

            <h1 className="hidden sm:block text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2 tracking-tight">Sign In</h1>
            <p className="hidden sm:block text-xs sm:text-sm text-[#a1a1aa] mb-4 sm:mb-8">Access your GrapeTask LMS dashboard</p>
            
            <div className="w-full space-y-3 sm:space-y-4">
              <div className="relative group text-left">
                <label className="sm:hidden text-xs font-bold text-white/70 mb-1 ml-1 block uppercase tracking-wider">Email</label>
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none sm:top-0 top-6">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#a1a1aa] group-focus-within:text-[#f0591f] transition-colors" />
                </div>
                <input type="email" placeholder="you@example.com" required className="block w-full pl-9 sm:pl-11 pr-4 py-3 sm:py-3 bg-white/[0.03] sm:bg-white/[0.03] bg-transparent border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder-[#71717a] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all" />
              </div>
              <div className="relative group text-left">
                <label className="sm:hidden text-xs font-bold text-white/70 mb-1 ml-1 block uppercase tracking-wider">Password</label>
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none sm:top-0 top-6">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-[#a1a1aa] group-focus-within:text-[#f0591f] transition-colors" />
                </div>
                <input type="password" placeholder="••••••••" required className="block w-full pl-9 sm:pl-11 pr-4 py-3 sm:py-3 bg-white/[0.03] sm:bg-white/[0.03] bg-transparent border border-white/10 rounded-xl text-sm sm:text-base text-white placeholder-[#71717a] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all" />
              </div>
            </div>
            
            <div className="w-full text-right mt-3 sm:mt-3 mb-2">
              <Link href="#" className="text-sm sm:text-sm text-[#f0591f] font-semibold hover:text-[#ff7a45] transition-colors">Forgot password?</Link>
            </div>

            <button type="submit" className="w-full mt-2 sm:mt-6 py-3.5 sm:py-4 bg-gradient-to-r from-[#f0591f] to-[#ff7a45] text-white font-bold text-sm sm:text-base rounded-xl hover:shadow-[0_0_20px_rgba(240,89,31,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2">
              Let's go <ArrowRight className="w-4 h-4" />
            </button>

            <div className="relative w-full flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
              <div className="relative bg-[#020617] px-3 sm:px-4 text-[10px] sm:text-xs text-[#71717a] lowercase tracking-wider">or sign in with Google</div>
            </div>

            <div className="flex w-full mb-6 sm:mb-0">
              <button type="button" className="w-full flex items-center justify-center gap-2 py-3 sm:py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l3.68-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <span className="text-white font-bold text-sm">Sign in with Google</span>
              </button>
            </div>

            {/* Mobile Toggle Link */}
            <div className="sm:hidden w-full text-center mt-2 mb-8">
              <p className="text-sm text-[#71717a]">Not a member? <button type="button" onClick={togglePanel} className="text-[#f0591f] font-bold">Sign up here</button></p>
            </div>

          </form>
        </div>

        {/* OVERLAY CONTAINER (Image Carousel) */}
        <div className="overlay-container">
          <div className="overlay relative">
            
            {/* Auto-Scrolling Images */}
            {AUTH_SLIDES.map((slide, index) => (
              <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                <Image src={slide.image} alt={slide.title} fill className="object-cover" priority={index === 0} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/20 to-[#020617] sm:to-[#020617]/60" />
                
                {/* Floating Badges */}
                <div className="absolute top-4 sm:top-12 left-2 sm:left-12 flex flex-row sm:flex-col gap-2 sm:gap-2 w-[90%] sm:w-auto">
                  <div className="bg-[#ea580c] sm:bg-[#f0591f] px-3 py-2 sm:px-6 sm:py-3.5 rounded-3xl sm:rounded-[2rem] shadow-xl transform transition-transform hover:translate-x-2 flex-1 sm:flex-none flex-col max-w-max relative overflow-hidden">
                    <div className="flex items-center gap-1.5 sm:gap-3">
                      <p className="text-white font-extrabold text-[11px] sm:text-base leading-none">{slide.badge1}</p>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#020617] animate-pulse"></div>
                    </div>
                    <p className="text-white/90 font-medium text-[8px] sm:text-xs mt-1 leading-none">{slide.badge1Desc}</p>
                  </div>
                  
                  <div className="bg-[#020617] sm:bg-[#0a0a0a] px-3 py-2 sm:px-6 sm:py-3.5 rounded-3xl sm:rounded-[2rem] shadow-xl transform transition-transform hover:translate-x-2 flex-1 sm:flex-none flex-col max-w-max sm:ml-12 relative overflow-hidden">
                    <div className="flex items-center gap-1.5 sm:gap-3">
                      <p className="text-white font-extrabold text-[11px] sm:text-base leading-none">{slide.badge2}</p>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ea580c] sm:bg-[#f0591f] animate-pulse"></div>
                    </div>
                    <p className="text-white/70 font-medium text-[8px] sm:text-xs mt-1 leading-none">{slide.badge2Desc}</p>
                  </div>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-12 sm:bottom-20 left-6 sm:left-12 pr-6">
                  <h2 className="text-2xl sm:text-4xl font-black text-white mb-1 sm:mb-2 drop-shadow-lg">{slide.title}</h2>
                  <p className="text-white/80 text-xs sm:text-sm max-w-[280px] sm:max-w-sm drop-shadow-md">{slide.desc}</p>
                </div>
              </div>
            ))}

            {/* Slider Navigation Dots */}
            <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
              {AUTH_SLIDES.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 sm:w-8 bg-[#f0591f]' : 'w-1.5 sm:w-2 bg-white/40'}`}
                />
              ))}
            </div>

            {/* Desktop Overlay Panels (for toggle buttons) */}
            <div className="overlay-panel overlay-left">
              <div className="hidden sm:flex flex-col items-center justify-center p-8 glass-card bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl transform transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f0591f] to-[#ff7a45] flex items-center justify-center mb-4 shadow-lg shadow-[#f0591f]/30">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">Already have an account?</h3>
                <p className="text-sm text-white/70 mb-6 text-center max-w-[220px]">Sign in to access your GrapeTask dashboard and continue your journey.</p>
                <button onClick={togglePanel} className="w-full py-3 bg-white text-[#020617] font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg active:scale-95">
                  Sign In to Account
                </button>
              </div>
            </div>
            
            <div className="overlay-panel overlay-right">
              <div className="hidden sm:flex flex-col items-center justify-center p-8 glass-card bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl transform transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f0591f] to-[#ff7a45] flex items-center justify-center mb-4 shadow-lg shadow-[#f0591f]/30">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <h3 className="text-xl font-black text-white mb-2">New to GrapeTask?</h3>
                <p className="text-sm text-white/70 mb-6 text-center max-w-[220px]">Create an account to start learning, earning, and growing with us.</p>
                <button onClick={togglePanel} className="w-full py-3 bg-[#f0591f] text-white font-bold rounded-xl hover:bg-[#d94d19] transition-colors shadow-lg shadow-[#f0591f]/20 active:scale-95">
                  Create an Account
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
