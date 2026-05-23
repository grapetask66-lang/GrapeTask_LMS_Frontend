'use client';

import React from 'react';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, Star, Shield, HelpCircle, BadgeQuestionMark,
  Clock, DollarSign, Building2, UserCheck, Play, Pause, Award, User, Zap,
  TrendingUp, Users, Lightbulb, Rocket, School, BookOpen, GraduationCap,
  Target, Briefcase, Medal
} from 'lucide-react';

const pricing = [
  { level: 'School Students', price: '200', desc: 'Beginner-friendly content' },
  { level: 'College Students', price: '300', desc: 'Intermediate practical content' },
  { level: 'University Students', price: '500', desc: 'Advanced professional content' },
];

export default function PricingPage() {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const togglePlayPause = () => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
    if (videoRef.current) {
      if (newIsPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  };

  const individualPlans = [
    {
      level: 'Starter Course',
      price: 'Flexible Access',
      desc: 'Self-paced course access with practical milestones and verified badge outcomes.',
      icon: Lightbulb,
      features: [
        'Choose skill-based modules and pay only for the clear learning paths you follow',
        'Practical tasks reviewed by certified trainers',
        'Verified badge attached to learner profile on completion',
        'Freelance-ready portfolio exercises and practical case studies',
        'Active community support with peer collaboration'
      ],
      cta: 'Browse Courses',
      href: '/courses',
      badge: 'Flexible'
    },
    {
      level: 'Premium Path',
      price: 'Guided Certification',
      desc: 'Trainer-backed growth track with live review, coaching, and career preparation.',
      icon: Medal,
      features: [
        'Priority access to new professional course modules',
        'One-on-one trainer feedback on projects and submissions',
        'Weekly live coaching sessions and milestone reviews',
        'Verified certification badge synced to the freelancer profile',
        'Dedicated portfolio support and freelance-ready preparation'
      ],
      cta: 'Join Now',
      href: '/register',
      badge: 'Recommended',
      popular: true
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#020617] text-white">

      {/* ── HERO VIDEO BACKGROUND ── */}
      <div className="absolute top-0 inset-x-0 h-[500px] sm:h-[600px] pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          ref={el => {
            videoRef.current = el;
            if (el) {
              el.muted = true;
              el.defaultMuted = true;
              if (isPlaying) {
                el.play().catch(() => { });
              } else {
                el.pause();
              }
            }
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-75 sm:opacity-85 z-10"
        >
          <source src="/videos/Flexible Pricing Plans.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/25 via-[#020617]/55 to-[#020617] z-20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/60 via-transparent to-[#f0591f]/15 mix-blend-screen opacity-60 z-20" />
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primaryOrange/10 blur-[100px] sm:blur-[150px] rounded-full z-20" />
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-[400px] sm:top-[450px] right-4 sm:right-8 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-125 hover:-translate-y-2 shadow-lg hover:shadow-[0_15px_30px_rgba(240,89,31,0.3)]"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
      </button>

      <div className="pt-28 sm:pt-40 pb-20 px-4 sm:px-6 relative z-30">
        <div className="container mx-auto max-w-6xl">

          {/* Header Info */}
          <div className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6 max-w-4xl mx-auto px-2 sm:px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
              <Clock className="w-3.5 h-3.5" /> Affordable Excellence
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight text-3d break-words">
              Flexible <span className="text-primaryOrange text-3d-orange">Pricing Plans</span>
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] font-medium max-w-xl mx-auto leading-relaxed break-words">
              Find the perfect plan to master digital skills and connect directly to high-paying freelance contracts.
            </p>
          </div>

          {/* Plan Guidance - PERFECT SYMMETRICAL LAYOUT */}
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 sm:px-4 items-stretch">
            
            {/* Left Card */}
            <div className="p-7 sm:p-8 rounded-[2.5rem] bg-cardBg border border-lightBorder relative overflow-hidden shadow-2xl hover:-translate-y-4 hover:scale-[1.01] hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.4)] transition-all duration-500 group flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 orange-gradient opacity-[0.05] blur-3xl pointer-events-none" />
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-[10px] font-black uppercase tracking-widest hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default w-fit mb-4">
                  <UserCheck className="w-3.5 h-3.5" /> Learner Pathways
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight text-3d break-words mb-4">
                  A cleaner learning experience for learners, trainers, and institutions.
                </h2>
                <p className="text-sm text-[#a1a1aa] font-medium leading-relaxed max-w-2xl mb-6">
                  GrapeTask LMS is built for modern skill development: flexible course access, trainer-led review, and verified certificates that prepare learners for real freelance work.
                </p>

                <div className="space-y-4 flex-1">
                  {[
                    { title: 'Flexible course access', desc: 'Choose the exact skill path you need, pay only for relevant modules, and learn at your own pace.', icon: User },
                    { title: 'Trainer-led review', desc: 'Get structured task assessments, practical feedback, and certified trainer support for each milestone.', icon: Rocket },
                    { title: 'Institution-ready scale', desc: 'Support schools, colleges, and universities with seat management, group onboarding, and shared reporting.', icon: Users },
                  ].map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(240,89,31,0.2)] transition-all duration-300 group/item">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primaryOrange/10 text-primaryOrange border border-primaryOrange/20 group-hover/item:scale-110 group-hover/item:rotate-6 group-hover/item:-translate-y-1 transition-all duration-300 flex-shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white">{item.title}</h3>
                          <p className="text-xs text-[#a1a1aa] leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Enlarged Image with Aspect Ratio for consistency */}
                <div className="relative mt-6 rounded-2xl overflow-hidden border border-white/5 group/img flex-shrink-0 aspect-[16/9]">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" 
                    alt="Trainer mentoring student" 
                    className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cardBg via-cardBg/20 to-transparent"></div>
                  {/* Image Overlay Heading */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <h3 className="text-white font-bold text-xl tracking-tight drop-shadow-lg">Record from Home & Office</h3>
                    <p className="text-white/80 text-sm">Complete tutorial & receiving support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="p-7 sm:p-8 rounded-[2.5rem] bg-[#0b1223]/80 border border-lightBorder shadow-2xl hover:-translate-y-4 hover:scale-[1.01] hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.4)] transition-all duration-500 group flex flex-col">
              <div className="uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primaryOrange text-[10px] font-black mb-6">What makes GrapeTask different</div>
              <div className="space-y-5 flex-1">
                {[
                  { title: 'Clear outcome tracks', desc: 'Each pathway is aligned to skills, certification, and freelance readiness rather than vague plan labels.' },
                  { title: 'Verified badge delivery', desc: 'Certificates and badges appear directly on learner profiles and are accepted by hiring partners.' },
                  { title: 'Practical trainer support', desc: 'Live coach review, project guidance, and community feedback keep learners moving forward.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 hover:-translate-y-1 transition-all duration-300 group/item">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primaryOrange group-hover/item:scale-110 group-hover/item:rotate-6 group-hover/item:-translate-y-1 transition-all duration-300 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Added Image to balance right side perfectly */}
              <div className="relative mt-6 rounded-2xl overflow-hidden border border-white/5 group/img flex-shrink-0 aspect-[16/9]">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80" 
                  alt="Team support and consulting" 
                  className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1223] via-[#0b1223]/20 to-transparent"></div>
                {/* Image Overlay Heading */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight drop-shadow-lg">Trainer Support & Consulting</h3>
                  <p className="text-white/80 text-xs sm:text-sm">Expert guidance every step of the way</p>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Plans Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 max-w-4xl mx-auto">
            {individualPlans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.level}
                  className={`theme-card p-5 sm:p-7 rounded-[2rem] flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:-translate-y-6 hover:scale-[1.03] hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.4)] group ${plan.popular ? 'border-[#f0591f]/40 bg-cardBgActive/20' : 'border-lightBorder'}`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primaryOrange/20 border border-primaryOrange/30 text-primaryOrange text-[9px] font-black uppercase tracking-widest group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primaryOrange/10 border border-primaryOrange/25 text-primaryOrange flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-1 transition-all duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-xl sm:text-2xl font-black text-white break-words">{plan.level}</h3>
                        <p className="text-sm text-bodyGrayText font-medium">{plan.desc}</p>
                      </div>
                    </div>

                    <div className="text-2xl sm:text-3xl font-black text-white break-words">
                      {plan.price}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-white/5">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3 group/feat">
                          <div className="w-4.5 h-4.5 rounded-full bg-primaryOrange/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primaryOrange/20 group-hover/feat:scale-125 group-hover/feat:-translate-y-1 transition-all duration-300">
                            <CheckCircle2 className="w-3 h-3 text-primaryOrange" />
                          </div>
                          <span className="text-sm text-bodyGrayText font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={plan.href}
                      className={`w-full py-3 rounded-2xl font-black text-sm text-center block transition-all duration-300 hover:-translate-y-1 hover:scale-110 active:scale-95 active:translate-y-0 hover:shadow-[0_15px_30px_-8px_rgba(240,89,31,0.3)] ${plan.popular
                          ? 'bg-primaryOrange text-white shadow-lg shadow-primaryOrange/20 hover:shadow-primaryOrange/30'
                          : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                        }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Included Value */}
          <div className="mb-24 p-6 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[3rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl">
            <div className="absolute bottom-0 left-0 w-80 h-80 secondary-glow opacity-10 pointer-events-none" />
            <div className="text-center mb-12 space-y-4 relative z-10 px-2 sm:px-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-black uppercase tracking-widest hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                <Shield className="w-3.5 h-3.5" /> Included Value
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight text-3d break-words">
                Every plan includes <span className="text-primaryOrange text-3d-orange">learning proof</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a1a1aa] font-medium max-w-2xl mx-auto leading-relaxed">
                The core LMS experience is built into every route, from single-course learners to full institutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative z-10">
              {[
                { title: 'Structured Lessons', desc: 'Video modules, assessments, and guided progression keep learning focused.', icon: BookOpen },
                { title: 'Verified Certificates', desc: 'Learners can show completion with a certificate tied to LMS activity.', icon: Award },
                { title: 'Progress Visibility', desc: 'Students and institutions can see movement through lessons and outcomes.', icon: TrendingUp },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="theme-card p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primaryOrange/35 hover:bg-white/[0.055] transition-all duration-500 hover:-translate-y-6 hover:scale-[1.03] hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.4)] group">
                    <div className="w-12 h-12 rounded-xl bg-primaryOrange/10 border border-primaryOrange/25 text-primaryOrange flex items-center justify-center mb-4 group-hover:bg-primaryOrange group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-3">{item.title}</h3>
                    <p className="text-sm text-bodyGrayText font-medium leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Institutional Subscription Section */}
          <div className="mb-24 p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 secondary-glow opacity-10" />

            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                <Building2 className="w-3.5 h-3.5" /> Institutional Access
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight text-3d px-4 break-words">
                For Institutions <span className="text-primaryOrange text-3d-orange">Plans</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a1a1aa] font-medium max-w-xl mx-auto leading-relaxed px-4">
                Connect your school, college, or university to GrapeTask LMS. Train all your students on professional freelance standards.
              </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto px-4 sm:px-6">
  {[
    { level: 'School Students', price: '200', desc: 'Beginner-friendly content', icon: School },
    { level: 'College Students', price: '300', desc: 'Intermediate practical content', icon: BookOpen },
    { level: 'University Students', price: '500', desc: 'Advanced professional content', icon: GraduationCap },
  ].map((plan) => {
    const IconComponent = plan.icon;
    return (
      <div key={plan.level} className="relative group">
        <div className="pricing-card p-4 sm:p-5 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-3 bg-cardBg hover:bg-primaryOrange hover:border-primaryOrange hover:text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(240,89,31,0.3)] relative overflow-hidden h-full">
          
          {/* Background Effect - Subtle */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full blur-xl group-hover:bg-white/20 transition-all pointer-events-none" />

          {/* Icon - Smaller */}
          <div className="w-12 h-12 rounded-xl bg-primaryOrange/10 border border-primaryOrange/25 text-primaryOrange flex items-center justify-center group-hover:bg-white group-hover:text-primaryOrange group-hover:scale-105 transition-all duration-300 relative z-10 flex-shrink-0">
            <IconComponent className="w-5 h-5" />
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-black text-white group-hover:text-white uppercase tracking-wider relative z-10 break-words">
            {plan.level}
          </h3>

          {/* Price */}
          <div className="flex flex-col items-center relative z-10">
            <div className="flex items-baseline justify-center gap-0.5">
              <span className="font-sans text-xs font-semibold text-primaryOrange group-hover:text-white transition-colors">PKR</span>
              <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-white transition-colors">{plan.price}</span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-darkGrayNumber group-hover:text-white/60 transition-colors font-black uppercase tracking-wider mt-1">
              Per Student / Month
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-bodyGrayText group-hover:text-white/80 transition-colors leading-relaxed font-medium relative z-10 px-2">
            {plan.desc}
          </p>

          {/* Button - Smaller */}
          <Link
            href="/contact?type=institution"
            className="w-full py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white font-semibold hover:bg-white hover:text-primaryOrange group-hover:bg-white group-hover:text-primaryOrange transition-all duration-300 text-center text-xs relative z-10 hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>
      </div>
    );
  })}
</div>
            
          </div>

          {/* Long Term Packages - FIXED LAYOUT NO EXTRA SPACE */}
          <div className="p-6 sm:p-10 md:p-16 lg:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl mb-24">
            <div className="absolute bottom-0 left-0 w-80 h-80 secondary-glow opacity-10" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
              {/* Left – Heading, description & Image */}
              <div className="lg:col-span-5 space-y-5 sm:space-y-6 px-2 sm:px-4 lg:sticky lg:top-24">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default w-fit">
                  <Star className="w-3.5 h-3.5" /> Long-Term Savings
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight tracking-tight text-3d break-words">
                  Discounted packages for lasting LMS adoption
                </h2>

                <p className="text-sm text-[#a1a1aa] font-medium leading-relaxed max-w-lg">
                  The longer you commit, the more you save. Designed for institutions and training partners who plan ahead and scale learning over time.
                </p>

                <div className="hidden lg:flex items-center gap-3 text-xs text-[#71717a] font-medium group cursor-default">
                  <Award className="w-4 h-4 text-primaryOrange group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300" />
                  <span>Up to <span className="text-primaryOrange font-bold text-sm">40%</span> savings on 3-year plans</span>
                </div>

                {/* Perfectly sized image to match right column height */}
                <div className="relative mt-4 rounded-2xl overflow-hidden border border-white/5 group/img aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80" 
                    alt="Strategic planning and growth" 
                    className="absolute inset-0 w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent"></div>
                </div>
              </div>

              {/* Right – Cards grid */}
              <div className="lg:col-span-7 px-2 sm:px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                  {[
                    { term: '3 Months', discount: 15, highlight: 'Kickstart with short-term savings', barWidth: 'w-[38%]' },
                    { term: '6 Months', discount: 20, highlight: 'Solid value for semester planning', accent: true, barWidth: 'w-1/2' },
                    { term: '1 Year', discount: 25, highlight: 'Best fit for annual academic cycles', barWidth: 'w-[63%]' },
                    { term: '2 Years', discount: 30, highlight: 'Smart savings for multi-year strategy', barWidth: 'w-3/4' },
                    { term: '3 Years', discount: 40, highlight: 'Maximum value & long-term growth', best: true, barWidth: 'w-full' },
                  ].map((plan) => (
                    <div
                      key={plan.term}
                      className={`
                        group relative rounded-2xl border p-4 sm:p-5
                        transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(240,89,31,0.3)]
                        sm:col-span-1
                        ${plan.best
                          ? 'sm:col-span-2 border-primaryOrange/40 bg-gradient-to-br from-primaryOrange/15 via-[#0b1223]/95 to-[#0b1223]/95'
                          : plan.accent
                            ? 'border-primaryOrange/25 bg-gradient-to-br from-primaryOrange/8 via-[#0b1223]/90 to-[#0b1223]/90'
                            : 'border-white/[0.07] bg-[#0b1223]/80 hover:border-white/15'
                        }
                      `}
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`
                            w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border
                            ${plan.best
                              ? 'bg-primaryOrange/20 border-primaryOrange/30 text-primaryOrange'
                              : 'bg-white/[0.04] border-white/[0.08] text-[#a1a1aa] group-hover:text-primaryOrange group-hover:bg-primaryOrange/10 group-hover:border-primaryOrange/20 transition-colors'
                            }
                            group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-1 transition-all duration-300
                          `}>
                            <Clock className="w-4 h-4" />
                          </div>
                          <p className="text-sm sm:text-base font-bold text-white">{plan.term}</p>
                        </div>

                        <div className={`
                          flex items-center gap-1.5 rounded-full px-3 py-1 text-xs sm:text-sm font-bold flex-shrink-0
                          ${plan.best
                            ? 'bg-primaryOrange text-[#020617] shadow-lg shadow-primaryOrange/25 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300'
                            : 'bg-primaryOrange/10 text-primaryOrange border border-primaryOrange/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300'
                          }
                        `}>
                          {plan.best && <Zap className="w-3.5 h-3.5" />}
                          {plan.discount}% Off
                        </div>
                      </div>

                      <p className={`
                        mt-3 text-xs sm:text-sm leading-relaxed sm:pl-12
                        ${plan.best ? 'text-[#d4d4d8] font-medium' : 'text-[#71717a]'}
                      `}>
                        {plan.highlight}
                      </p>

                      <div className="mt-3 sm:pl-12">
                        <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className={`
                              h-full rounded-full transition-all duration-700
                              ${plan.barWidth}
                              ${plan.best
                                ? 'bg-gradient-to-r from-primaryOrange to-orange-400'
                                : 'bg-primaryOrange/40'
                              }
                            `}
                          />
                        </div>
                      </div>

                      {plan.best && (
                        <div className="absolute -top-px right-6">
                          <div className="bg-primaryOrange text-[#020617] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-b-lg shadow-lg shadow-primaryOrange/20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                            Best Value
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

          {/* Pricing FAQ Section */}
          <div className="max-w-4xl mx-auto px-2 sm:px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 text-3d break-words">
                Frequently Asked <span className="text-primaryOrange text-3d-orange">Questions</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a1a1aa] font-medium">Simple answers to common questions about GrapeTask subscriptions.</p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {[
                { q: 'Is there a setup fee or hidden charges?', a: 'No setup fees whatsoever. You only pay the listed per-student price for the level of your institution, or the pay-per-course rate if you are an individual learner. No hidden platform maintenance costs.' },
                { q: 'Can individual students get institutional pricing?', a: 'No, institutional pricing is exclusively for partner academic schools, colleges, and universities subscribing their students as a bulk group. Individual students can pay per course or join the premium track.' },
                { q: 'How does the billing cycles work?', a: 'Institutional subscriptions are billed monthly in advance based on the active seat allocation. You can upgrade or add more student seats at any time during your billing period.' },
              ].map((faq, i) => (
                <div key={i} className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] glass-card border border-[rgba(255,255,255,0.06)] hover:border-[rgba(240,89,31,0.2)] transition-all duration-300 group hover:-translate-y-3 hover:scale-[1.01] hover:shadow-[0_20px_40px_-10px_rgba(240,89,31,0.3)]">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-start gap-3 flex-shrink-0 break-words">
                    <span className="w-6 h-6 rounded-lg bg-[rgba(240,89,31,0.1)] flex items-center justify-center text-primaryOrange flex-shrink-0 group-hover:bg-[#f0591f] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-1 transition-all duration-300">
                      <BadgeQuestionMark className="w-3.5 h-3.5" />
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-sm sm:text-base text-bodyGrayText leading-relaxed pl-9 font-medium break-words">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
