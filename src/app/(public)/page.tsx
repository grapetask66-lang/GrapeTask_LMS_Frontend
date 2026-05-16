'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, GraduationCap, Smartphone, Rocket, Award,
  TrendingUp, Users, BookOpen, CheckCircle2, Briefcase,
  Play, Star, Zap, Shield, Globe, Monitor, Palette, LineChart, Video, Megaphone, Camera
} from 'lucide-react';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const TRENDING = [
  { id: 1, title: 'Advanced Web Development', level: 'University', trainer: 'Ikram Tech', students: '2.4k', thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Graphic Design Mastery', level: 'College', trainer: 'Qavi Arts', students: '1.8k', thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Digital Marketing Pro', level: 'Individual', trainer: 'Market Experts', students: '3.1k', thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=80' },
  { id: 4, title: 'AI for Beginners', level: 'School', trainer: 'Future Academy', students: '900', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80' },
];

const LOGOS = ['Web Dev', 'UI/UX', 'Marketing', 'Video Edit', 'AI & ML', 'Data Science', 'Freelancing', 'E-Commerce'];

const BG_SLIDES = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop',
];

const AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&auto=format&fit=crop',
];

const CAREERS = [
  { name: 'Web Developer', icon: <Monitor className="w-8 h-8" /> },
  { name: 'Graphic Designer', icon: <Palette className="w-8 h-8" /> },
  { name: 'Data Analyst', icon: <LineChart className="w-8 h-8" /> },
  { name: 'Video Editor', icon: <Video className="w-8 h-8" /> },
  { name: 'Digital Marketer', icon: <Megaphone className="w-8 h-8" /> },
  { name: 'Content Creator', icon: <Camera className="w-8 h-8" /> },
];

export default function HomePage() {
  const [courses, setCourses] = useState(TRENDING);
  const [slide, setSlide] = useState(0);
  useScrollReveal();

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % BG_SLIDES.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-24">
        {/* Preload Background Images to prevent flash */}
        <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none">
          {BG_SLIDES.map((src, i) => (
            <img key={i} src={src} alt="preload" />
          ))}
        </div>
        
        {/* Image Slideshow Background */}
        <div className="absolute inset-0 overflow-hidden bg-[#020617]">
          {BG_SLIDES.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${slide === i ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `url('${src}')`,
              }}
            />
          ))}
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-[#020617]/30" />
          {/* Grid on top */}
          <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
        </div>

        {/* Orange glow blob */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#f0591f] opacity-[0.05] blur-[120px] pointer-events-none animate-float-slow" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — Text */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-semibold text-white shadow-lg animate-fade-in">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-[#f0591f] to-[#ff7a45] shadow-inner">
                  <Award className="w-3.5 h-3.5 text-white" />
                </span>
                <span>Pakistan's <span className="font-bold text-[#f0591f]">#1</span> Skill-to-Earn Platform</span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight text-white">
                Learn Skills.<br />
                <span className="text-[#f0591f]">Get Certified.</span><br />
                <span className="text-gradient">Start Earning.</span>
              </h1>

              <p className="text-lg text-[#71717a] leading-relaxed max-w-lg">
                GrapeTask LMS is Pakistan's first skill-based learning platform directly connected to a live freelance marketplace. Learn from experts, earn a verified certificate, and start working immediately.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <Link href="/courses"
                  className="group flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#f0591f] to-[#ff7a45] text-white font-black text-lg rounded-2xl shadow-[0_8px_24px_rgba(240,89,31,0.3)] hover:shadow-[0_0_30px_rgba(240,89,31,0.6)] transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 active:scale-95">
                  Explore Courses
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/for-institutions"
                  className="flex items-center justify-center gap-2 px-10 py-5 rounded-2xl border border-white/20 bg-white/5 text-white font-bold text-lg backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95">
                  For Institutions
                </Link>
              </div>

              {/* Trust Row */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {AVATARS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="learner"
                      className="w-10 h-10 rounded-full border-2 border-[#020617] object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#f0591f] text-[#f0591f]" />)}</div>
                  <p className="text-xs text-[#71717a] mt-0.5">50,000+ learners trust GrapeTask LMS</p>
                </div>
              </div>
            </div>

            {/* RIGHT — Floating Visual */}
            <div className="relative hidden lg:flex items-center justify-center h-[560px] animate-fade-in opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              {/* Rotating ring */}
              <div className="absolute w-[420px] h-[420px] rounded-full border border-[rgba(240,89,31,0.15)] animate-spin-slow" />
              <div className="absolute w-[320px] h-[320px] rounded-full border border-[rgba(240,89,31,0.08)]" style={{ animation: 'spin-slow 15s linear infinite reverse' }} />

              {/* Center badge */}
              <div className="relative z-10 w-28 h-28 bg-gradient-to-br from-[#f0591f]/90 to-[#f0591f]/40 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center border border-white/20 shadow-[0_8px_32px_rgba(240,89,31,0.2)] animate-float-slow">
                <Award className="w-8 h-8 text-white mb-1 drop-shadow-md" />
                <span className="text-white font-black text-[10px] tracking-widest drop-shadow-sm">CERTIFIED</span>
              </div>

              {/* Stacked Stats Cards */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                {/* Stats Card 1 */}
                <div className="glass-card w-56 p-4 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md animate-scale-in opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[rgba(240,89,31,0.15)] rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-[#f0591f]" />
                    </div>
                    <div>
                      <div className="text-white font-black text-lg leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">87%</div>
                      <div className="text-[#e4e4e7] font-semibold text-xs mt-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Growth Rate</div>
                    </div>
                  </div>
                </div>

                {/* Stats Card 2 */}
                <div className="glass-card w-56 p-4 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md animate-scale-in opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[rgba(16,185,129,0.15)] rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-white font-black text-lg leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">50K+</div>
                      <div className="text-[#e4e4e7] font-semibold text-xs mt-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Active Learners</div>
                    </div>
                  </div>
                </div>

                {/* Stats Card 3 */}
                <div className="glass-card w-56 p-4 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md animate-scale-in opacity-0" style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/15 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-black text-lg leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">1.2K+</div>
                      <div className="text-[#e4e4e7] font-semibold text-xs mt-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">Courses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl glass-card border border-[rgba(255,255,255,0.06)]">
            {[
              { label: 'Learners', value: '50K+', icon: <Users className="w-5 h-5" /> },
              { label: 'Courses', value: '1.2K+', icon: <BookOpen className="w-5 h-5" /> },
              { label: 'Satisfaction', value: '98%', icon: <Star className="w-5 h-5" /> },
              { label: 'Active Users', value: '4K+', icon: <Zap className="w-5 h-5" /> },
            ].map((stat, i) => (
              <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex justify-center mb-2 text-[#f0591f]">{stat.icon}</div>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-[#71717a] uppercase tracking-wider font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE SLIDER ── */}
      <div className="relative py-6 overflow-hidden border-y border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)] marquee-wrap">
        <div className="flex">
          <div className="animate-marquee-premium flex gap-8 shrink-0 pl-8">
            {[...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => (
              <span key={i} className="marquee-pill">
                <span className="dot" />{l}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURE HIGHLIGHTS ── */}
      <section className="py-24 px-6 bg-[#010411]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
              Why Choose <span className="text-[#f0591f]">GrapeTask LMS?</span>
            </h2>
            <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto font-light">
              Everything you need to go from absolute beginner to certified professional, all in one ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                title: 'Verified Experts', 
                desc: 'Learn directly from industry professionals and certified institutes handpicked by the GrapeTask team.', 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 drop-shadow-md">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                ),
                delay: 0 
              },
              { 
                title: 'Study Anywhere', 
                desc: 'Access your courses anytime, anywhere. Master new skills at your own pace with our platform.', 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 drop-shadow-md">
                    <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z" clipRule="evenodd" />
                  </svg>
                ),
                delay: 150 
              },
              { 
                title: 'Start Earning', 
                desc: 'Complete your course, earn your certificate, and start freelancing on GrapeTask immediately.', 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 drop-shadow-md">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                ),
                delay: 300 
              },
            ].map((f) => (
              <div key={f.title} className="theme-card card-3d p-10 rounded-[2.5rem] space-y-6 group reveal backdrop-blur-xl border border-white/10 bg-[rgba(255,255,255,0.03)] hover:bg-[#020617]/80 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(240,89,31,0.15)] transition-all duration-500 relative overflow-hidden" style={{ transitionDelay: `${f.delay}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0591f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#f0591f]/10 border border-[#f0591f]/20 flex items-center justify-center text-[#f0591f] group-hover:bg-[#f0591f] group-hover:text-white transition-colors duration-500 shadow-inner">
                  {f.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-[#a1a1aa] text-base leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GRAPETASK ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 secondary-glow opacity-20 pointer-events-none" />
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 reveal-left">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                The Complete <br />
                <span className="text-[#f0591f]">Learning Ecosystem</span>
              </h2>
              <div className="space-y-5 text-lg text-[#a1a1aa] leading-relaxed">
                <p>GrapeTask LMS is not just another online learning platform. It is a complete pipeline from learning to earning.</p>
                <p>Once you complete your course and pass your assessments, you receive a <span className="text-white font-bold">GrapeTask LMS Certified badge</span> and you can immediately create your profile and start getting paid on the GrapeTask freelance marketplace.</p>
                <p className="text-white font-bold">No wasted time. No gap between learning and earning.</p>
              </div>
              <div className="space-y-4 pt-2">
                {[
                  'Structured assessment after every video',
                  'Trainer-reviewed submissions — not auto-graded',
                  'Certificate directly linked to your freelancer profile',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#f0591f]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#f0591f]" />
                    </div>
                    <span className="text-[#e4e4e7] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Link href="/how-it-works" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:border-[#f0591f]/50 text-white font-bold text-base rounded-xl transition-all duration-300 hover:bg-[#f0591f]/10 group hover:-translate-y-1 shadow-lg">
                  See how it works
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Side Glass Card */}
            <div className="reveal-right" style={{ transitionDelay: '150ms' }}>
              <div className="relative rounded-[2.5rem] bg-[#020617]/40 backdrop-blur-xl border border-white/10 p-10 overflow-hidden shadow-2xl group hover:border-[#f0591f]/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0591f]/5 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                  {/* Premium Certificate Icon */}
                  <div className="relative z-10 w-28 h-28 bg-[#020617]/90 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center border border-[#f0591f]/50 shadow-[0_15px_30px_rgba(0,0,0,0.8)] animate-float-slow group-hover:scale-105 transition-transform duration-500">
                    <div className="w-10 h-10 bg-[#f0591f] rounded-full flex items-center justify-center mb-1.5 shadow-[0_0_15px_rgba(240,89,31,0.5)]">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-black text-[10px] tracking-widest">CERTIFIED</span>
                  </div>

                  <div className="w-full space-y-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-inner transition-colors group-hover:bg-white/10">
                      <div className="flex items-center gap-3 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-[#f0591f]" />
                        <span className="text-xs text-[#a1a1aa] font-semibold uppercase tracking-widest">Official Credential</span>
                      </div>
                      <div className="text-lg font-bold text-white">GrapeTask Certified</div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-inner transition-colors group-hover:bg-white/10">
                      <div className="flex items-center gap-3 mb-1">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <span className="text-xs text-[#a1a1aa] font-semibold uppercase tracking-widest">Marketplace Ready</span>
                      </div>
                      <div className="text-sm text-[#e4e4e7] font-medium leading-relaxed">Directly syncs to your public freelancer profile</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRENDING COURSES ── */}
      <section className="py-24 px-6 bg-[#010411]">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Trending Courses</h2>
            <p className="text-lg text-[#71717a] max-w-xl mx-auto">Handpicked by our experts — the courses everyone is enrolling in right now.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, i) => (
              <Link href={`/courses/${course.id}`} key={course.id} className="theme-card card-3d p-6 rounded-[2.5rem] space-y-5 group reveal block" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="aspect-video bg-[rgba(255,255,255,0.04)] rounded-2xl relative overflow-hidden">
                  <img src={course.thumbnail} alt={course.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-card text-[10px] font-black text-[#f0591f] uppercase border border-[rgba(240,89,31,0.2)] z-10">{course.level}</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/40 backdrop-blur-sm z-20">
                    <div className="px-5 py-2 bg-[#f0591f] text-white text-xs font-black rounded-full">View Course</div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-black text-white group-hover:text-[#f0591f] transition-colors line-clamp-2 tracking-tight">{course.title}</h4>
                  <div className="flex justify-between items-center text-xs text-[#71717a] font-medium">
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{course.students} Learners</span>
                    <span className="text-[rgba(255,255,255,0.3)]">{course.trainer}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12 reveal">
            <Link href="/courses" className="inline-flex items-center gap-2 text-[#f0591f] font-black hover:underline underline-offset-8">
              Explore all courses <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CAREERS ── */}
      <section className="py-24 px-6 bg-[#010411]">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Explore Careers</h2>
            <p className="text-lg text-[#71717a] max-w-xl mx-auto">Discover the skills and technologies behind in-demand professional roles.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CAREERS.map((career, i) => (
              <Link key={career.name} href="/courses"
                className="theme-card card-3d p-8 rounded-[2rem] text-center group flex flex-col items-center justify-center space-y-4 min-h-[180px] reveal backdrop-blur-xl border border-white/10 bg-[rgba(255,255,255,0.03)] hover:bg-[#020617]/80 hover:-translate-y-3 hover:scale-105 hover:shadow-[0_30px_60px_rgba(240,89,31,0.15)] transition-all duration-500 relative overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0591f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#f0591f]/10 border border-[#f0591f]/20 flex items-center justify-center text-[#f0591f] group-hover:bg-[#f0591f] group-hover:text-white transition-colors duration-500 shadow-inner">
                  {career.icon}
                </div>
                <div className="relative z-10 text-[15px] font-black text-white group-hover:text-[#f0591f] transition-colors leading-tight">{career.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="p-12 md:p-20 rounded-[4rem] glass-card border border-[rgba(255,255,255,0.06)] relative overflow-hidden shadow-2xl reveal">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] secondary-glow opacity-10 -mr-32 -mt-32 pointer-events-none" />
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Freelancing By The Numbers</h2>
              <p className="text-lg text-[#71717a] max-w-xl mx-auto">The global shift towards independent work is here — and it's accelerating.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {[
                { val: '1.57B', label: 'Freelancers Worldwide', color: 'text-[#f0591f]' },
                { val: '46.7%', label: 'Global Workforce', color: 'text-white' },
                { val: '$16.5B', label: 'Market Size by 2030', color: 'text-white' },
              ].map((s, i) => (
                <div key={i} className="p-8 rounded-3xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className={`text-5xl font-black tracking-tighter ${s.color} mb-3`}>{s.val}</div>
                  <div className="text-[#71717a] font-bold uppercase tracking-widest text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="py-24 px-6 bg-[#010411]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-[#71717a]">Got questions? We've got answers.</p>
          </div>
          <div className="space-y-5">
            {[
              { q: 'Is GrapeTask LMS accredited and are certificates recognized?', a: 'GrapeTask LMS certificates are issued after structured assessments reviewed by verified trainers. Every certified learner receives a badge displayed on their GrapeTask marketplace profile, which clients can see when hiring.' },
              { q: 'Is a GrapeTask certificate worth it?', a: 'Absolutely. Unlike most platforms, your GrapeTask certificate is directly linked to your freelance profile. Clients can see your certification date and skills, which significantly increases your chances of getting hired.' },
              { q: 'Does GrapeTask offer free courses?', a: 'GrapeTask LMS offers a variety of courses across multiple price ranges. Individual learners can browse available courses and enroll based on their budget and goals.' },
            ].map((faq, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] glass-card border border-[rgba(255,255,255,0.06)] hover:border-[rgba(240,89,31,0.3)] transition-all group reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <h3 className="text-xl font-black text-white mb-4 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-xl bg-[rgba(240,89,31,0.1)] flex items-center justify-center text-[#f0591f] text-sm font-black flex-shrink-0 group-hover:bg-[#f0591f] group-hover:text-white transition-all">?</span>
                  {faq.q}
                </h3>
                <p className="text-[#71717a] text-base leading-relaxed pl-12">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link href="/faq" className="inline-flex items-center gap-2 px-10 py-4 glass-card border border-[rgba(255,255,255,0.08)] rounded-2xl text-white font-bold hover:scale-105 transition-all">
              View All FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] orange-gradient rounded-full opacity-5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] relative overflow-hidden text-center reveal shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(240,89,31,0.08)] to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                Ready to Start Your<br />
                <span className="text-[#f0591f]">Earning Journey?</span>
              </h2>
              <p className="text-lg text-[#71717a] max-w-2xl mx-auto font-medium leading-relaxed">
                Join thousands of learners who are already building their careers on Pakistan's first skill-to-earn platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Link href="/register" className="group w-full sm:w-auto px-10 py-5 bg-[#f0591f] text-white font-black text-lg rounded-2xl shadow-xl shadow-[rgba(240,89,31,0.25)] hover:bg-[#d94d19] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                  Join Now for Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/courses" className="w-full sm:w-auto px-10 py-5 bg-[rgba(255,255,255,0.03)] text-white font-bold text-lg rounded-2xl border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.08)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
