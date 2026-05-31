'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Play, Pause, Star, Zap, Users, BookOpen, TrendingUp } from 'lucide-react';

const AVATARS = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&auto=format&fit=crop',
];

const HERO_STATS = [
  { label: 'Learners', value: '50K+', icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: 'Courses', value: '1.2K+', icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: 'Satisfaction', value: '98%', icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: 'Active Users', value: '4K+', icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" /> },
];

const HERO_SLIDES = [
  {
    badge: "LEARN FROM THE BEST",
    highlight: "Pakistan's #1 Skill-to-Earn Platform",
    title: (
      <>
        Learn High-Income <br className="hidden sm:block" />
        <span className="text-[#f0591f] text-3d-orange">Digital Skills.</span>
      </>
    ),
    desc: "GrapeTask LMS brings you top-tier courses taught by vetted industry experts. Master programming, graphic design, and artificial intelligence with structured assessments.",
    ctaText: "Explore Courses",
    ctaLink: "/courses",
    secCtaText: "Partner Institutes",
    secCtaLink: "/for-institutions",
    video: "/videos/main_hero/learn high-income digital skills.mp4"
  },
  {
    badge: "GLOBAL STANDARDS",
    highlight: "Get Verified & Certified",
    title: (
      <>
        Earn Professional <br className="hidden sm:block" />
        <span className="text-[#f0591f] text-3d-orange">Verified Badges.</span>
      </>
    ),
    desc: "Every certificate you earn is verified by certified trainers and directly synced with your live freelance profile on GrapeTask, showing real proof of expertise.",
    ctaText: "How It Works",
    ctaLink: "/how-it-works",
    secCtaText: "Apply as Trainer",
    secCtaLink: "/for-trainers",
    video: "/videos/main_hero/Earn Professional Verifid Badges..mp4"
  },
  {
    badge: "INSTANT INCOME FLOW",
    highlight: "Bridge the Gap to dollar earnings",
    title: (
      <>
        Launch Your Remote <br className="hidden sm:block" />
        <span className="text-[#f0591f] text-3d-orange">Freelance Career.</span>
      </>
    ),
    desc: "Stop chasing bids. GrapeTask connects certified students directly to global client contracts on our active freelance marketplace. Work, deliver, and get paid instantly.",
    ctaText: "Join Free Now",
    ctaLink: "/login?mode=signup",
    secCtaText: "Pricing Plans",
    secCtaLink: "/pricing",
    video: "/videos/main_hero/launch your remote freelance career..mp4"
  }
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveSlide(s => (s + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const togglePlayPause = () => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
    videoRefs.current.forEach(video => {
      if (video) {
        if (newIsPlaying) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  };

  return (
    <>
      <section className="relative min-h-0 sm:min-h-[80vh] lg:min-h-screen flex items-start sm:items-center px-4 sm:px-6 pt-0 sm:pt-28 pb-4 sm:pb-20 overflow-hidden">
        {/* Absolute Video Background Container: z-0 */}
        <div className="absolute inset-0 bg-[#020617] overflow-hidden z-0">
          {HERO_SLIDES.map((slide, idx) => (
            <video
              key={idx}
              autoPlay
              muted
              loop
              playsInline
              preload={idx === 0 ? "auto" : "none"}
              ref={el => {
                videoRefs.current[idx] = el;
                if (el) {
                  el.muted = true;
                  el.defaultMuted = true;
                  if (isPlaying) {
                    el.play().catch(() => {});
                  } else {
                    el.pause();
                  }
                }
              }}
              className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ${
                activeSlide === idx ? 'opacity-80' : 'opacity-0'
              }`}
            >
              <source src={slide.video} type="video/mp4" />
            </video>
          ))}

          {/* Custom Theme Color Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/85 via-[#020617]/40 to-transparent z-20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/60 via-transparent to-[#f0591f]/10 mix-blend-screen opacity-50 z-20" />
          <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none z-20" />
        </div>

        {/* Ambient background glow blob */}
        <div className="absolute top-1/4 right-1/4 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] rounded-full bg-[#f0591f] opacity-[0.07] blur-[100px] sm:blur-[130px] pointer-events-none animate-float-slow z-20" />

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute bottom-4 right-3 sm:bottom-10 sm:right-8 z-40 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-5 sm:h-5" /> : <Play className="w-3.5 h-3.5 sm:w-5 sm:h-5 ml-0.5 sm:ml-1" />}
        </button>

        <div className="container mx-auto relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-16 items-center">
            {/* LEFT — Dynamic Text & Info */}
            <div className="lg:col-span-7 space-y-2.5 sm:space-y-8 text-left max-w-2xl py-4 sm:py-0">
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-semibold text-white shadow-lg animate-fade-in">
                <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-[#f0591f] to-[#ff7a45] shadow-inner">
                  <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </span>
                <span className="uppercase tracking-widest text-[9px] sm:text-[10px] font-black text-primaryOrange sm:mr-1">
                  {HERO_SLIDES[activeSlide].badge}
                </span>
                <span className="text-[#e4e4e7] hidden sm:inline">| {HERO_SLIDES[activeSlide].highlight}</span>
              </div>

              <h1 className="text-[1.85rem] sm:text-5xl md:text-6xl font-black leading-[1.06] sm:leading-[1.1] tracking-tight text-white transition-all duration-700 transform translate-y-0 text-3d max-w-none">
                {HERO_SLIDES[activeSlide].title}
              </h1>

              <p className="text-xs sm:text-base md:text-lg text-[#d4d4d8] leading-5 sm:leading-relaxed font-medium max-w-[32rem]">
                {HERO_SLIDES[activeSlide].desc}
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 pt-0.5 sm:pt-2">
                <Link href={HERO_SLIDES[activeSlide].ctaLink}
                  className="group w-auto min-w-[180px] sm:min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-1.5 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#f0591f] to-[#ff7a45] text-white font-bold text-[11px] sm:text-sm rounded-lg sm:rounded-xl shadow-[0_6px_20px_rgba(240,89,31,0.2)] hover:shadow-[0_0_25px_rgba(240,89,31,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 active:scale-95 text-center">
                  <span>{HERO_SLIDES[activeSlide].ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link href={HERO_SLIDES[activeSlide].secCtaLink}
                  className="w-auto min-w-[180px] sm:min-w-0 flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-lg sm:rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-[11px] sm:text-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-white/10 hover:border-white/30 active:scale-95 text-center">
                  <span>{HERO_SLIDES[activeSlide].secCtaText}</span>
                </Link>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-6 pt-0.5 sm:pt-4">
                <div className="flex -space-x-2.5 sm:-space-x-3">
                  {AVATARS.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt="learner avatar"
                      width={40}
                      height={40}
                      className="w-7 h-7 sm:w-10 sm:h-10 rounded-full border-2 border-[#020617] object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#f0591f] text-[#f0591f]" />)}</div>
                  <p className="text-[10px] sm:text-xs text-[#a1a1aa] mt-0.5 font-semibold leading-snug">50,000+ learners trust GrapeTask LMS</p>
                </div>
              </div>
            </div>

            {/* RIGHT — Premium 3D Floating Widget */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center h-[520px] relative">
              <div className="absolute w-[380px] h-[380px] rounded-full border border-[rgba(240,89,31,0.15)] animate-spin-slow" />
              <div className="absolute w-[280px] h-[280px] rounded-full border border-[rgba(240,89,31,0.08)]" style={{ animation: 'spin-slow 15s linear infinite reverse' }} />

              <div className="relative z-10 w-28 h-28 bg-gradient-to-br from-[#f0591f]/90 to-[#f0591f]/40 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center border border-white/20 shadow-[0_8px_32px_rgba(240,89,31,0.2)] animate-float-slow hover:rotate-6 transition-transform">
                <Award className="w-8 h-8 text-white mb-1" />
                <span className="text-white font-black text-[9px] tracking-widest">CERTIFIED</span>
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
                <div className="glass-card w-48 p-4 rounded-xl border border-white/10 shadow-lg backdrop-blur-md transition-all hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#f0591f]/10 rounded-lg flex items-center justify-center text-primaryOrange">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-black text-base leading-none">87%</div>
                      <div className="text-[#a1a1aa] font-bold text-[10px] mt-0.5">Growth Rate</div>
                    </div>
                  </div>
                </div>

                <div className="glass-card w-48 p-4 rounded-xl border border-white/10 shadow-lg backdrop-blur-md transition-all hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primaryOrange/10 rounded-lg flex items-center justify-center text-primaryOrange">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-black text-base leading-none">50K+</div>
                      <div className="text-[#a1a1aa] font-bold text-[10px] mt-0.5">Active Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2.5 sm:gap-3 mt-2 sm:mt-16">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 ${activeSlide === idx
                  ? 'w-8 sm:w-10 bg-primaryOrange shadow-md shadow-primaryOrange/30'
                  : 'w-2 sm:w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="hidden md:grid mt-24 grid-cols-4 gap-6 p-8 rounded-3xl glass-card border border-[rgba(255,255,255,0.06)] backdrop-blur-md">
            {HERO_STATS.map((stat, i) => (
              <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex justify-center mb-1.5 text-[#f0591f]">{stat.icon}</div>
                <div className="text-3xl font-black text-white mb-0.5">{stat.value}</div>
                <div className="text-[10px] text-[#a1a1aa] uppercase tracking-wider font-extrabold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Stats Section */}
      <section className="block md:hidden px-4 pb-8 bg-transparent">
        <div className="grid grid-cols-2 gap-3 p-5 rounded-[2rem] glass-card border border-[rgba(255,255,255,0.12)] backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.25)]">
          {HERO_STATS.map((stat, i) => (
            <div key={i} className="card-3d bg-white/[0.04] border border-[rgba(255,255,255,0.08)] p-5 rounded-2xl text-center py-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.22)] hover:bg-white/[0.06]">
              <div className="flex justify-center mb-3 text-[#f0591f]">{stat.icon}</div>
              <div className="text-xl font-black text-white leading-tight">{stat.value}</div>
              <div className="text-[9px] text-[#a1a1aa] uppercase tracking-wider font-extrabold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
