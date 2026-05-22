'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, GraduationCap, Smartphone, Rocket, Award,
  TrendingUp, Users, BookOpen, CheckCircle2, Briefcase,
  Play, Pause, Star, Zap, Shield, Globe, Monitor, Palette, LineChart, Video, Megaphone, Camera, ChevronRight,
  ShieldCheck, Laptop, DollarSign, ChevronDown, HelpCircle,
  Cpu, ShoppingBag, Code, Layers, PiggyBank, BarChart3, Building2
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
  { id: 1, title: 'Advanced Web Development', level: 'University', trainer: 'Ikram Tech', students: '2.4k', thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Graphic Design Mastery', level: 'College', trainer: 'Qavi Arts', students: '1.8k', thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Digital Marketing Pro', level: 'Individual', trainer: 'Market Experts', students: '3.1k', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80' },
  { id: 4, title: 'AI for Beginners', level: 'School', trainer: 'Future Academy', students: '900', thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80' },
];

const CATEGORIES = [
  {
    title: 'UI/UX Design',
    slug: 'ui-ux',
    tag: 'Design',
    description: 'Figma, Design Systems',
    icon: <Layers className="w-5 h-5" />,
    glowColor: 'from-purple-500/10 to-pink-500/10',
    accentColor: 'text-purple-400 group-hover:text-purple-300',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&auto=format&fit=crop&q=80'
  },
  {
    title: 'Digital Marketing',
    slug: 'marketing',
    tag: 'Growth',
    description: 'SEO, Ads & Socials',
    icon: <Megaphone className="w-5 h-5" />,
    glowColor: 'from-amber-500/10 to-orange-500/10',
    accentColor: 'text-amber-400 group-hover:text-amber-300',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&auto=format&fit=crop&q=80'
  },
  {
    title: 'Video Edit & VFX',
    slug: 'video-edit',
    tag: 'Creative',
    description: 'Premiere Pro, DaVinci',
    icon: <Video className="w-5 h-5" />,
    glowColor: 'from-red-500/10 to-orange-600/10',
    accentColor: 'text-red-400 group-hover:text-red-300',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop&q=80'
  },
  {
    title: 'AI & Machine Learning',
    slug: 'ai-ml',
    tag: 'Future',
    description: 'Python, Neural Networks',
    icon: <Cpu className="w-5 h-5" />,
    glowColor: 'from-cyan-500/10 to-blue-500/10',
    accentColor: 'text-cyan-400 group-hover:text-cyan-300',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&auto=format&fit=crop&q=80'
  },
  {
    title: 'Data Science & Stats',
    slug: 'data-science',
    tag: 'Analytics',
    description: 'R, Big Data, SQL',
    icon: <LineChart className="w-5 h-5" />,
    glowColor: 'from-teal-500/10 to-emerald-500/10',
    accentColor: 'text-teal-400 group-hover:text-teal-300',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80'
  },
  {
    title: 'Freelance Mastery',
    slug: 'freelancing',
    tag: 'Business',
    description: 'Upwork, Client Contracts',
    icon: <Briefcase className="w-5 h-5" />,
    glowColor: 'from-primaryOrange/10 to-orange-500/10',
    accentColor: 'text-primaryOrange group-hover:text-orange-300',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80'
  },
  {
    title: 'E-Commerce Retail',
    slug: 'e-commerce',
    tag: 'E-Store',
    description: 'Shopify, Amazon FBA',
    icon: <ShoppingBag className="w-5 h-5" />,
    glowColor: 'from-indigo-500/10 to-blue-600/10',
    accentColor: 'text-indigo-400 group-hover:text-indigo-300',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&auto=format&fit=crop&q=80'
  },
  {
    title: 'Web Development',
    slug: 'web-dev',
    tag: 'Development',
    description: 'Next.js, Tailwind, APIs',
    icon: <Code className="w-5 h-5" />,
    glowColor: 'from-blue-500/10 to-violet-500/10',
    accentColor: 'text-blue-400 group-hover:text-blue-300',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80'
  },
];

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

const CAREERS = [
  { name: 'Web Developer', icon: <Monitor className="w-8 h-8" />, image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&auto=format&fit=crop&q=80' },
  { name: 'Graphic Designer', icon: <Palette className="w-8 h-8" />, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&auto=format&fit=crop&q=80' },
  { name: 'Data Analyst', icon: <LineChart className="w-8 h-8" />, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format&fit=crop&q=80' },
  { name: 'Video Editor', icon: <Video className="w-8 h-8" />, image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&auto=format&fit=crop&q=80' },
  { name: 'Digital Marketer', icon: <Megaphone className="w-8 h-8" />, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80' },
  { name: 'Content Creator', icon: <Camera className="w-8 h-8" />, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80' },
];

// Rich Premium Video Slides configuration for Hero Section
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
    ctaLink: "/register",
    secCtaText: "Pricing Plans",
    secCtaLink: "/pricing",
    video: "/videos/main_hero/launch your remote freelance career..mp4"
  }
];

type FAQItem = {
  q: string;
  a: string;
};

type FAQCategory = {
  id: string;
  name: string;
  questions: FAQItem[];
};

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'general',
    name: 'General FAQ',
    questions: [
      { q: 'What is GrapeTask LMS?', a: 'GrapeTask LMS is Pakistan\'s first skill-to-earn platform. It provides high-quality practical training directly connected to a live freelance marketplace, allowing you to learn from verified experts, complete assessments, and start earning immediately.' },
      { q: 'Is GrapeTask LMS free to join?', a: 'Yes, it is completely free to create an account on GrapeTask. You only pay for individual premium courses you choose to enroll in, or if you are part of a subscribed partner institution, your access is covered by your school, college, or university.' },
      { q: 'Are the certificates verified?', a: 'Absolutely. Every certificate is backed by your actual test scores and trainer reviews, and automatically appears as a verified badge on your live GrapeTask freelance marketplace profile, making you instantly credible to global clients.' },
      { q: 'How is GrapeTask different from other platforms?', a: 'Unlike other online platforms that just offer video lectures, GrapeTask LMS features a progressive module unlocking system, manual grading of practical assignments by expert trainers, and a direct pipeline to active client contracts on the freelance marketplace.' }
    ]
  },
  {
    id: 'learners',
    name: 'For Learners FAQ',
    questions: [
      { q: 'Who can join GrapeTask LMS?', a: 'Anyone can join — school students, college students, university students, and individual self-taught learners. GrapeTask LMS is open to all who want to build high-paying digital skills.' },
      { q: 'Do I need to pay to enroll in a course?', a: 'Individual learners pay per course. Institutional students (school, college, university) are enrolled by their institution under a subscription plan and do not need to pay individually.' },
      { q: 'What happens if I fail a test?', a: 'If you fail, you must re-watch the video before attempting the test again. Your next attempt will feature a completely different set of questions — not the same test repeated.' },
      { q: 'Can I skip a video and go to the next one?', a: 'No. GrapeTask LMS uses a progressive unlocking system. You must pass the assessment for each video before the next one becomes available.' },
      { q: 'What do I get after completing a course?', a: 'You receive an official GrapeTask LMS Certificate and a verified badge on your marketplace profile. You can then immediately start freelancing on GrapeTask.' },
    ]
  },
  {
    id: 'trainers',
    name: 'For Trainers FAQ',
    questions: [
      { q: 'Who can become a trainer?', a: 'Both individual professionals and training institutes can apply. You must submit your portfolio, experience, and reason for joining. The GrapeTask team will review your application.' },
      { q: 'What video quality is required for my course?', a: 'All course videos must be HD quality, recorded using professional equipment (DSLR or iPhone), in a clean professional environment, with clear audio.' },
      { q: 'How do I get paid?', a: 'Trainers receive 70% of all revenue generated from their courses. GrapeTask retains 30% for platform operations.' },
      { q: 'Can I teach at more than one level?', a: 'Yes. If you are qualified to teach at multiple levels (school, college, university), you can create courses for each level.' },
    ]
  },
  {
    id: 'institutions',
    name: 'For Institutions FAQ',
    questions: [
      { q: 'How does the institutional subscription work?', a: 'Your institution pays a monthly per-student fee based on your student level. GrapeTask provides a dedicated portal where you assign courses, manage students, and receive progress reports.' },
      { q: 'Can I get a discount for a longer commitment?', a: 'Yes. GrapeTask offers significant discounts for 6-month (25% off) and 1-year (40% off) packages. These packages are available directly from your institutional dashboard.' },
      { q: 'How are progress reports delivered?', a: 'Trainers generate reports directly in the system with one click. Reports are automatically branded with the GrapeTask logo and your institution\'s logo, then delivered to your portal inbox and email.' },
      { q: 'Can parents see their child\'s progress?', a: 'Yes. The institution head can forward reports to parents after reviewing them.' },
    ]
  }
];

export default function HomePage() {
  const [courses, setCourses] = useState(TRENDING);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeFaqTab, setActiveFaqTab] = useState('general');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const currentFaqCategory = FAQ_CATEGORIES.find(c => c.id === activeFaqTab) || FAQ_CATEGORIES[0];

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFaqTabChange = (tabId: string) => {
    setActiveFaqTab(tabId);
    setOpenFaqIndex(null);
  };

  useScrollReveal();

  useEffect(() => {
    const t = setInterval(() => {
      handleNextSlide();
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

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlide(s => (s + 1) % HERO_SLIDES.length);
      setIsTransitioning(false);
    }, 4000);
  };

  const handlePrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlide(s => (s - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <div className="overflow-hidden bg-[#020617] text-white">

      {/* ── HERO VIDEO SLIDER ── (NO CHANGES) */}
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
              preload="auto"
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

          {/* Custom Theme Color Overlays - Orange + Navy Blue blending: z-20 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/85 via-[#020617]/40 to-transparent z-20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/60 via-transparent to-[#f0591f]/10 mix-blend-screen opacity-50 z-20" />
          <div className="absolute inset-0 hero-grid opacity-15 pointer-events-none z-20" />
        </div>

        {/* Ambient background glow blob: z-20 */}
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

              {/* Responsive Slide Badge */}
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-semibold text-white shadow-lg animate-fade-in">
                <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-[#f0591f] to-[#ff7a45] shadow-inner">
                  <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </span>
                <span className="uppercase tracking-widest text-[9px] sm:text-[10px] font-black text-primaryOrange sm:mr-1">
                  {HERO_SLIDES[activeSlide].badge}
                </span>
                <span className="text-[#e4e4e7] hidden sm:inline">| {HERO_SLIDES[activeSlide].highlight}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-[1.65rem] sm:text-5xl md:text-6xl font-black leading-[1.04] sm:leading-[1.1] tracking-tight text-white transition-all duration-700 transform translate-y-0 text-3d max-w-[17rem] sm:max-w-none">
                {HERO_SLIDES[activeSlide].title}
              </h1>

              <p className="text-xs sm:text-base md:text-lg text-[#d4d4d8] leading-5 sm:leading-relaxed font-medium max-w-[32rem]">
                {HERO_SLIDES[activeSlide].desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 pt-0.5 sm:pt-2">
                <Link href={HERO_SLIDES[activeSlide].ctaLink}
                  className="group w-auto min-w-[180px] sm:min-w-0 sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-1.5 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#f0591f] to-[#ff7a45] text-white font-bold text-[11px] sm:text-sm rounded-lg sm:rounded-xl shadow-[0_6px_20px_rgba(240,89,31,0.2)] hover:shadow-[0_0_25px_rgba(240,89,31,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 active:scale-95 text-center">
                  <span>{HERO_SLIDES[activeSlide].ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link href={HERO_SLIDES[activeSlide].secCtaLink}
                  className="w-auto min-w-[180px] sm:min-w-0 sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-lg sm:rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-[11px] sm:text-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-white/10 hover:border-white/30 active:scale-95 text-center">
                  <span>{HERO_SLIDES[activeSlide].secCtaText}</span>
                </Link>
              </div>

              {/* Trust Row / Social proof */}
              <div className="flex items-center gap-2.5 sm:gap-6 pt-0.5 sm:pt-4">
                <div className="flex -space-x-2.5 sm:-space-x-3">
                  {AVATARS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="learner avatar"
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
              {/* Rotating ring */}
              <div className="absolute w-[380px] h-[380px] rounded-full border border-[rgba(240,89,31,0.15)] animate-spin-slow" />
              <div className="absolute w-[280px] h-[280px] rounded-full border border-[rgba(240,89,31,0.08)]" style={{ animation: 'spin-slow 15s linear infinite reverse' }} />

              {/* Center Badge */}
              <div className="relative z-10 w-28 h-28 bg-gradient-to-br from-[#f0591f]/90 to-[#f0591f]/40 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center border border-white/20 shadow-[0_8px_32px_rgba(240,89,31,0.2)] animate-float-slow hover:rotate-6 transition-transform">
                <Award className="w-8 h-8 text-white mb-1" />
                <span className="text-white font-black text-[9px] tracking-widest">CERTIFIED</span>
              </div>

              {/* Stacked Interactive Stats Cards */}
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

          {/* Slider Pagination Controls */}
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

          {/* Responsive Stats Bar */}
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

      {/* ── SKILL PATHS SHOWCASE SECTION ── */}
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

      <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-[#020617] border-y border-[rgba(255,255,255,0.04)] z-10">
        <div className="absolute inset-0 hero-grid opacity-[0.02] pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#f0591f]/[0.03] to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 left-1/4 w-[500px] h-[300px] bg-gradient-to-t from-blue-500/[0.02] to-transparent rounded-full blur-[80px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 relative z-20">
          <div className="mx-auto max-w-4xl text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f0591f]/20 bg-[#f0591f]/5 text-[#f0591f] text-xs font-black uppercase tracking-widest backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#f0591f] animate-pulse" />
              Trending Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-3d leading-tight">
              Explore High-Income <span className="text-[#f0591f] text-3d-orange">Skill Floor Paths</span>
            </h2>
            <p className="mx-auto lg:mx-0 max-w-3xl text-sm sm:text-base text-[#a1a1aa] font-medium leading-relaxed sm:leading-7">
              Choose from <span className="text-white font-semibold">Pakistan's most sought-after categories</span>, designed to take you from <span className="text-[#f0591f] font-semibold">structured learning modules</span> directly to <span className="text-[#f0591f] font-semibold">verified freelance gig contracts</span>. Start your journey today.
            </p>
          </div>
        </div>

        {/* ── PREMIUM INTERACTIVE CAROUSEL ── */}
        <div className="relative w-full overflow-hidden py-6 sm:py-8 marquee-wrap">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 lg:w-56 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 lg:w-56 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-20" />

          <div className="flex w-max">
            <div className="animate-marquee-premium flex gap-5 sm:gap-6 lg:gap-8 shrink-0 px-4 sm:px-6">
              {[...CATEGORIES, ...CATEGORIES, ...CATEGORIES].map((cat, idx) => (
                <Link
                  key={idx}
                  href={`/courses?category=${cat.slug}`}
                  className="group relative flex items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-[#f0591f]/30 transition-all duration-500 ease-out min-w-[260px] sm:min-w-[300px] lg:min-w-[320px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(240,89,31,0.15)] hover:-translate-y-2"
                  style={{ transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  {/* BG Image */}
                  {cat.image && (
                    <>
                      <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover opacity-[0.08] group-hover:opacity-[0.18] transition-opacity duration-700 rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 to-[#020617]/80 group-hover:from-[#020617]/90 group-hover:to-[#020617]/70 transition-all duration-500 rounded-2xl z-10" />
                    </>
                  )}
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none z-0`} />
                  
                  <div className={`relative z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.05] border border-white/[0.1] ${cat.accentColor} group-hover:scale-110 group-hover:border-[#f0591f]/30 transition-all duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(240,89,31,0.2)]`}>
                    <div className="w-6 h-6 sm:w-7 sm:h-7">
                      {cat.icon}
                    </div>
                  </div>

                  <div className="relative z-20 flex flex-col flex-1 text-left min-w-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#a1a1aa] group-hover:text-white/90 transition-colors duration-300">
                      {cat.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#f0591f] transition-colors duration-300 mt-1 truncate">
                      {cat.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-[#71717a] group-hover:text-[#d4d4d8] transition-colors duration-300 font-medium mt-1.5 line-clamp-1">
                      {cat.description}
                    </span>
                  </div>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#f0591f] z-20">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#f0591f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex justify-center">
            <Link 
              href="/courses" 
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-[#f0591f] to-[#ff7a45] text-white font-bold text-sm rounded-xl shadow-[0_8px_25px_rgba(240,89,31,0.25)] hover:shadow-[0_12px_35px_rgba(240,89,31,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              <span className="relative z-10">Explore All Paths</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY GRAPETASK ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#010411]">
        <div className="container mx-auto max-w-6xl">

          <div className="flex flex-col items-center text-center mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 text-3d">
              Why Choose <span className="text-[#f0591f] text-3d-orange">GrapeTask LMS?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#a1a1aa] max-w-2xl mx-auto font-medium">
              Everything you need to go from absolute beginner to certified professional, all in one ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Verified Experts',
                badge: 'VETTED INSTRUCTORS',
                desc: 'Learn directly from handpicked industry professionals and certified institutions. Our trainers must pass a rigorous verification process to teach.',
                icon: <ShieldCheck className="w-6 h-6 text-[#f0591f] transition-transform duration-500 group-hover:scale-110" />,
                num: '01',
                delay: 0,
                image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80'
              },
              {
                title: 'Study Anywhere',
                badge: '100% FLEXIBLE',
                desc: 'Access your courses anytime, on any device. Master high-demand digital skills at your own pace with our beautiful, responsive ecosystem.',
                icon: <Laptop className="w-6 h-6 text-[#f0591f] transition-transform duration-500 group-hover:scale-110" />,
                num: '02',
                delay: 150,
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80'
              },
              {
                title: 'Start Earning',
                badge: 'DIRECT CONTRACTS',
                desc: 'Complete your path, claim your verified badge, and launch your freelance career. We connect certified learners directly with global contracts.',
                icon: <DollarSign className="w-6 h-6 text-[#f0591f] transition-transform duration-500 group-hover:scale-110" />,
                num: '03',
                delay: 300,
                image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80'
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group relative rounded-3xl flex flex-col justify-between items-start text-left reveal overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(240,89,31,0.12)] hover:-translate-y-2.5 transition-all duration-500"
                style={{ transitionDelay: `${f.delay}ms` }}
              >
                {/* BG Image */}
                <img src={f.image} alt={f.title} className="absolute inset-0 w-full h-full object-cover opacity-[0.15] group-hover:opacity-[0.25] group-hover:scale-105 transition-all duration-700" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/95 to-[#020617]/80 z-10 group-hover:via-[#020617]/90 transition-all duration-500" />
                
                {/* Border Glow */}
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#f0591f]/35 to-purple-500/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none z-20" />
                <div className="absolute inset-[1px] rounded-[22px] bg-transparent pointer-events-none z-20" />

                {/* Ambient Glows */}
                <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-[#f0591f]/8 blur-2xl group-hover:bg-[#f0591f]/15 transition-all duration-700 pointer-events-none z-0" />
                <div className="absolute -left-12 -bottom-12 w-32 h-32 rounded-full bg-purple-500/8 blur-2xl group-hover:bg-purple-500/15 transition-all duration-700 pointer-events-none z-0" />

                {/* Content */}
                <div className="relative z-30 w-full p-6 sm:p-8 md:p-10">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-[#f0591f]/40 group-hover:bg-[#f0591f]/5 group-hover:shadow-[0_0_15px_rgba(240,89,31,0.2)]">
                      {f.icon}
                    </div>
                    <span className="font-mono text-3xl font-black tracking-widest text-white/5 group-hover:text-[#f0591f]/30 transition-colors duration-500">
                      {f.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-black tracking-widest text-[#f0591f] bg-[#f0591f]/10 border border-[#f0591f]/20 px-2.5 py-0.5 rounded-full inline-block mb-3.5">
                    {f.badge}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#f0591f]/85 transition-all duration-500">
                    {f.title}
                  </h3>

                  <p className="text-slate-400 font-medium text-sm leading-relaxed mt-2.5 group-hover:text-slate-300 transition-colors duration-500">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GRAPETASK (THE SYSTEM) ── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 secondary-glow opacity-10 pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-72 h-72 bg-[#f0591f]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

            {/* Left Column - Content */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10 reveal-left">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f0591f]/10 border border-[#f0591f]/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f0591f] animate-pulse" />
                <span className="text-xs font-bold text-[#f0591f] uppercase tracking-widest">Zero Gap Education</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight text-3d">
                The Complete <br />
                <span className="text-[#f0591f] text-3d-orange">Learning Ecosystem</span>
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl">
                <p>GrapeTask LMS is not just another online learning platform. It is a complete pipeline from learning to earning.</p>
                <p>Once you complete your course and pass your assessments, you receive a <span className="text-white font-bold">GrapeTask LMS Certified badge</span> and can immediately create your profile and start getting paid on the GrapeTask freelance marketplace.</p>
                <div className="pt-2 pb-4 pl-4 border-l-4 border-[#f0591f] bg-white/[0.02] rounded-r-lg">
                  <p className="text-white font-bold text-lg sm:text-xl italic">"No wasted time. No gap between learning and earning."</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                {[
                  'Structured assessment after every video',
                  'Trainer-reviewed submissions — not auto-graded',
                  'Certificate directly linked to your freelancer profile',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#f0591f]/30 transition-all duration-300 group/item cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-[#f0591f]/10 flex items-center justify-center shrink-0 border border-[#f0591f]/20 group-hover/item:bg-[#f0591f]/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#f0591f]" />
                    </div>
                    <span className="text-[#e4e4e7] font-semibold text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link href="/how-it-works" className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#f0591f] hover:bg-[#d94f17] text-white font-bold text-base rounded-xl transition-all duration-300 group hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(240,89,31,0.5)]">
                  <span>See how it works</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/courses" className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  Browse Courses
                </Link>
              </div>
            </div>

            {/* Right Column - Professional UI Mockup */}
            <div className="lg:col-span-5 reveal-right" style={{ transitionDelay: '150ms' }}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group hover:border-[#f0591f]/20 transition-all duration-500 card-3d border border-white/[0.08]">
                {/* BG Image */}
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80" alt="Learning Ecosystem" className="absolute inset-0 w-full h-full object-cover opacity-[0.15] group-hover:opacity-[0.25] group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 to-[#020617]/90 z-10 group-hover:from-[#020617]/90 group-hover:to-[#020617]/85 transition-all duration-500" />
                
                <div className="relative z-20 p-8 sm:p-10 space-y-6">
                  
                  {/* Decorative Top Bar */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#f0591f] via-orange-400 to-[#f0591f]/50 z-30" />

                  {/* Window Header Mockup */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] text-[#a1a1aa] uppercase tracking-widest font-bold">GrapeTask LMS</span>
                  </div>

                  {/* Certificate Display Area */}
                  <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/5 text-center relative overflow-hidden backdrop-blur-md">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#f0591f]/10 blur-3xl rounded-full pointer-events-none" />
                    <div className="relative z-10">
                      <div className="w-20 h-20 mx-auto bg-[#020617] rounded-full flex items-center justify-center mb-5 border-4 border-[#f0591f]/30 shadow-[0_0_30px_rgba(240,89,31,0.3)] animate-float-slow">
                        <Award className="w-10 h-10 text-[#f0591f]" />
                      </div>
                      <h4 className="text-white font-extrabold text-xl tracking-tight">Certificate of Completion</h4>
                      <p className="text-[#a1a1aa] text-sm mt-1 font-medium">Full Stack Development</p>
                      <div className="mt-5 inline-flex items-center gap-2 bg-[#f0591f]/10 text-[#f0591f] text-xs font-extrabold px-4 py-1.5 rounded-full border border-[#f0591f]/20 uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified Credential
                      </div>
                    </div>
                  </div>

                  {/* Profile Sync UI Area */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/5 hover:border-blue-400/30 transition-colors cursor-default group/card">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                        <Globe className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-bold text-white">Freelancer Profile Sync</span>
                          <span className="text-[10px] text-[#f0591f] font-extrabold uppercase">Active</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                          <div className="bg-gradient-to-r from-[#f0591f] to-orange-400 h-2 rounded-full w-full transition-all duration-1000" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.02] border border-dashed border-white/10">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] text-[#a1a1aa] font-medium">Ready to receive paid tasks</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRENDING COURSES ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#010411]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3 text-3d">
              Trending <span className="text-primaryOrange text-3d-orange">Courses</span>
            </h2>
            <p className="text-base sm:text-lg text-[#a1a1aa] max-w-xl mx-auto">Handpicked by our experts — the courses everyone is enrolling in right now.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {courses.map((course, i) => (
              <Link
                href={`/courses/${course.id}`}
                key={course.id}
                className="theme-card card-3d rounded-[2rem] group reveal block overflow-hidden border border-white/5 hover:border-primaryOrange/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 shadow-lg hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="aspect-video relative overflow-hidden rounded-t-[2rem]">
                  <img src={course.thumbnail} alt={course.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-card text-[9px] font-black text-[#f0591f] uppercase border border-[rgba(240,89,31,0.2)] z-10 backdrop-blur-md">{course.level}</div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/30 backdrop-blur-[2px] z-20">
                    <div className="px-5 py-2.5 bg-[#f0591f] text-white text-xs font-black rounded-full shadow-lg shadow-primaryOrange/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">View Course</div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg">
                      <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-5 sm:p-6 space-y-2 text-left">
                  <h4 className="text-base sm:text-lg font-black text-white group-hover:text-[#f0591f] transition-colors line-clamp-2 tracking-tight leading-snug">{course.title}</h4>
                  <div className="flex justify-between items-center text-xs text-[#a1a1aa] font-medium pt-1 border-t border-white/5">
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-primaryOrange/50" />{course.students} Learners</span>
                    <span className="text-[rgba(255,255,255,0.35)]">{course.trainer}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link href="/courses" className="inline-flex items-center gap-1.5 text-[#f0591f] font-black hover:underline underline-offset-8 text-sm sm:text-base">
              <span>Explore all courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EXPLORE CAREERS ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#010411] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#f0591f]/[0.03] to-transparent rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3 text-3d">
              Explore <span className="text-primaryOrange text-3d-orange">Careers</span>
            </h2>
            <p className="text-base sm:text-lg text-[#a1a1aa] max-w-xl mx-auto">Discover the skills and technologies behind in-demand professional roles.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {CAREERS.map((career, i) => (
              <Link
                key={career.name}
                href="/courses"
                className="theme-card card-3d rounded-[1.5rem] sm:rounded-[2rem] text-center group flex flex-col items-center justify-center space-y-3 sm:space-y-4 min-h-[160px] reveal overflow-hidden relative hover:-translate-y-2.5 hover:scale-105 hover:shadow-[0_20px_50px_rgba(240,89,31,0.12)] transition-all duration-500 border border-white/5 hover:border-primaryOrange/30"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* BG Image */}
                <img src={career.image} alt={career.name} className="absolute inset-0 w-full h-full object-cover opacity-[0.15] group-hover:opacity-[0.3] group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/90 to-[#020617]/60 z-10 group-hover:via-[#020617]/80 transition-all duration-500" />
                
                <div className="relative z-20 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#f0591f]/10 border border-[#f0591f]/20 flex items-center justify-center text-[#f0591f] group-hover:bg-[#f0591f] group-hover:text-white transition-colors duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(240,89,31,0.3)]">
                  {career.icon}
                </div>
                <div className="relative z-20 text-xs sm:text-sm font-black text-white group-hover:text-[#f0591f] transition-colors leading-snug">{career.name}</div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 reveal flex justify-center">
            <Link 
              href="/courses" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#f0591f]/10 hover:bg-[#f0591f] text-[#f0591f] hover:text-white font-black text-sm sm:text-base rounded-2xl border border-[#f0591f]/30 hover:border-[#f0591f] transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(240,89,31,0.15)] hover:shadow-[0_15px_40px_rgba(240,89,31,0.4)] hover:-translate-y-1.5"
            >
              <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              <span className="relative z-10">Explore All Careers</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* LMS STATS SECTION - ENHANCED WITH IMAGES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#f0591f]/[0.04] to-transparent rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] glass-card border border-[rgba(255,255,255,0.06)] relative overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.28)] reveal backdrop-blur-xl">
            <div className="absolute top-0 right-0 w-80 h-80 secondary-glow opacity-10 -mr-24 -mt-24 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 orange-gradient opacity-[0.04] blur-3xl -ml-24 -mb-24 pointer-events-none" />

            <div className="text-center mb-12 sm:mb-16 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-black uppercase tracking-widest mb-5 shadow-sm">
                <LineChart className="w-3.5 h-3.5" /> Industry Insights
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 tracking-tight text-3d">
                The LMS Market Is <span className="text-primaryOrange text-3d-orange">Booming</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl mx-auto font-medium leading-relaxed">
                Data-driven reasons why institutions and enterprises are shifting to learning management systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left items-stretch relative z-10">
              {[
                {
                  val: '$40B+',
                  title: 'Global LMS Market',
                  label: 'projected market value by 2029, signaling massive worldwide adoption.',
                  icon: <BarChart3 className="w-6 h-6" />,
                  image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80'
                },
                {
                  val: '70%+',
                  title: 'Corporate Adoption',
                  label: 'of organizations now rely on LMS platforms for employee training and skill development.',
                  icon: <Building2 className="w-6 h-6" />,
                  image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop&q=80'
                },
                {
                  val: '60%',
                  title: 'E-Learning Retention',
                  label: 'more knowledge retained through LMS-based learning compared to traditional classrooms.',
                  icon: <BookOpen className="w-6 h-6" />,
                  image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=80'
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="group relative rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.07)] reveal card-3d hover:-translate-y-2 hover:border-primaryOrange/35 transition-all duration-500 flex flex-col h-full shadow-[0_12px_34px_rgba(0,0,0,0.18)] hover:shadow-[0_22px_55px_rgba(0,0,0,0.24),0_0_24px_rgba(240,89,31,0.08)]"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Background Image */}
                  <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover opacity-[0.15] group-hover:opacity-[0.25] group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/95 to-[#020617]/70 z-10 group-hover:via-[#020617]/90 transition-all duration-500" />
                  
                  <div className="relative z-20 p-6 sm:p-8 flex flex-col h-full justify-between">
                    <div className="flex items-center justify-between gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primaryOrange/10 border border-primaryOrange/25 text-primaryOrange flex items-center justify-center group-hover:bg-primaryOrange group-hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(240,89,31,0.1)] group-hover:shadow-[0_0_25px_rgba(240,89,31,0.3)]">
                        {s.icon}
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-primaryOrange">
                        <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="text-5xl sm:text-6xl font-black tracking-tight text-primaryOrange text-3d-orange mb-3 leading-none drop-shadow-[0_0_15px_rgba(240,89,31,0.3)]">{s.val}</div>
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-2 leading-snug">{s.title}</h3>
                      <p className="text-sm sm:text-base text-[#a1a1aa] font-medium leading-relaxed">
                        <span className="text-primaryOrange font-bold">{s.val}</span> {s.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#010411] relative overflow-hidden">
        {/* Subtle Section Image Background */}
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80" alt="FAQ Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] pointer-events-none" />
        <div className="absolute inset-0 bg-[#010411]/95 z-0 pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">

          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-black uppercase tracking-widest shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 animate-bounce" /> Support Center
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight text-3d">
              Got <span className="text-primaryOrange text-3d-orange">Questions?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#a1a1aa] font-medium max-w-xl mx-auto">
              Everything you need to know about GrapeTask LMS. Explore answers sorted by categories.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 p-2 rounded-2xl sm:rounded-3xl glass-card border border-lightBorder max-w-3xl mx-auto backdrop-blur-xl">
            {FAQ_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleFaqTabChange(category.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${activeFaqTab === category.id
                  ? 'bg-primaryOrange text-white shadow-lg shadow-primaryOrange/25 scale-[1.02]'
                  : 'text-mediumGrayTitle hover:text-white hover:bg-white/5'
                  }`}
              >
                {category.name.replace(' FAQ', '')}
              </button>
            ))}
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {currentFaqCategory.questions.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`theme-card p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-500 relative overflow-hidden group backdrop-blur-xl ${isOpen
                    ? 'border-primaryOrange/40 bg-cardBgActive/20 shadow-[0_15px_30px_rgba(240,89,31,0.06)]'
                    : 'border-lightBorder hover:border-orangeBorderActive/30 hover:bg-cardBgActive/10'
                    }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primaryOrange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="w-full flex items-center justify-between text-left focus:outline-none relative z-10"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 pr-4">
                      <span className={`w-8 h-8 rounded-lg sm:rounded-xl flex items-center justify-center text-sm flex-shrink-0 transition-all duration-300 ${isOpen
                        ? 'bg-primaryOrange text-white rotate-[360deg] shadow-md shadow-primaryOrange/25'
                        : 'bg-white/5 text-primaryOrange group-hover:bg-primaryOrange/10'
                        }`}>
                        <HelpCircle className="w-4 h-4" />
                      </span>
                      <h3 className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 pr-2 ${isOpen ? 'text-primaryOrange' : 'text-white group-hover:text-primaryOrange'
                        }`}>
                        {item.q}
                      </h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 text-mediumGrayTitle group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180 text-primaryOrange' : ''
                      }`} />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4 sm:mt-6' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-12 sm:pl-14 border-l-2 border-primaryOrange/20 py-2 ml-1">
                        <p className="text-sm sm:text-base text-bodyGrayText leading-relaxed font-medium">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Image */}
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=80" alt="CTA Background" className="absolute inset-0 w-full h-full object-cover opacity-[0.1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/98 to-[#020617] z-0 pointer-events-none" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] orange-gradient rounded-full opacity-5 blur-[100px] sm:blur-[120px] pointer-events-none z-0" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="p-8 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] relative overflow-hidden text-center reveal shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(240,89,31,0.08)] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#f0591f]/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/5 blur-3xl rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight text-3d">
                Ready to Start Your<br />
                <span className="text-[#f0591f] text-3d-orange">Earning Journey?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#a1a1aa] max-w-xl mx-auto font-medium leading-relaxed">
                Join thousands of learners who are already building their careers on Pakistan's first skill-to-earn platform.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
                <Link href="/register" className="group w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-4 bg-[#f0591f] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-[rgba(240,89,31,0.2)] hover:bg-[#d94d19] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                  <span>Join Now for Free</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/courses" className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-4 bg-[rgba(255,255,255,0.03)] text-white font-semibold text-sm sm:text-base rounded-xl border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.08)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center">
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