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
        {/* Navy + Orange gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/25 via-[#020617]/55 to-[#020617] z-20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/60 via-transparent to-[#f0591f]/15 mix-blend-screen opacity-60 z-20" />
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primaryOrange/10 blur-[100px] sm:blur-[150px] rounded-full z-20" />
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-[400px] sm:top-[450px] right-8 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
      </button>

      <div className="pt-28 sm:pt-40 pb-20 px-4 sm:px-6 relative z-30">
        <div className="container mx-auto max-w-6xl">

          {/* Header Info */}
          <div className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6 max-w-4xl mx-auto px-2 sm:px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm">
              <Clock className="w-3.5 h-3.5" /> Affordable Excellence
            </div>
            {/* Heading slightly smaller & 3D text styled */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight text-3d break-words">
              Flexible <span className="text-primaryOrange text-3d-orange">Pricing Plans</span>
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] font-medium max-w-xl mx-auto leading-relaxed break-words">
              Find the perfect plan to master digital skills and connect directly to high-paying freelance contracts.
            </p>
          </div>

          {/* Plan Guidance */}
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-[1.4fr_0.95fr] gap-6 sm:gap-8 px-2 sm:px-4 items-start">
            <div className="p-7 sm:p-10 rounded-[2.5rem] bg-cardBg border border-lightBorder relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 orange-gradient opacity-[0.05] blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-[10px] font-black uppercase tracking-widest">
                  <UserCheck className="w-3.5 h-3.5" /> Learner Pathways
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight text-3d break-words mt-4">
                  A cleaner learning experience for learners, trainers, and institutions.
                </h2>
                <p className="text-sm text-[#a1a1aa] font-medium leading-relaxed mt-4 max-w-2xl">
                  GrapeTask LMS is built for modern skill development: flexible course access, trainer-led review, and verified certificates that prepare learners for real freelance work.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    { title: 'Flexible course access', desc: 'Choose the exact skill path you need, pay only for relevant modules, and learn at your own pace.', icon: User },
                    { title: 'Trainer-led review', desc: 'Get structured task assessments, practical feedback, and certified trainer support for each milestone.', icon: Rocket },
                    { title: 'Institution-ready scale', desc: 'Support schools, colleges, and universities with seat management, group onboarding, and shared reporting.', icon: Users },
                  ].map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={item.title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primaryOrange/10 text-primaryOrange border border-primaryOrange/20">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white">{item.title}</h3>
                          <p className="text-sm text-[#a1a1aa] leading-relaxed mt-1">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-10 rounded-[2.5rem] bg-[#0b1223]/80 border border-lightBorder shadow-2xl">
              <div className="uppercase tracking-[0.3em] text-primaryOrange text-[10px] font-black mb-5">What makes GrapeTask different</div>
              <div className="space-y-5">
                {[
                  { title: 'Clear outcome tracks', desc: 'Each pathway is aligned to skills, certification, and freelance readiness rather than vague plan labels.' },
                  { title: 'Verified badge delivery', desc: 'Certificates and badges appear directly on learner profiles and are accepted by hiring partners.' },
                  { title: 'Practical trainer support', desc: 'Live coach review, project guidance, and community feedback keep learners moving forward.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primaryOrange">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Individual Plans Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">
            {individualPlans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.level}
                  className={`theme-card card-3d p-6 sm:p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(240,89,31,0.1)] ${plan.popular ? 'border-[#f0591f]/40 bg-cardBgActive/20' : 'border-lightBorder'
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-primaryOrange/20 border border-primaryOrange/30 text-primaryOrange text-[9px] font-black uppercase tracking-widest">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primaryOrange/10 border border-primaryOrange/25 text-primaryOrange flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h3 className="text-2xl font-black text-white break-words">{plan.level}</h3>
                        <p className="text-sm text-bodyGrayText font-medium">{plan.desc}</p>
                      </div>
                    </div>

                    <div className="text-3xl sm:text-4xl font-black text-white break-words">
                      {plan.price}
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/5">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3.5">
                          <div className="w-5 h-5 rounded-full bg-primaryOrange/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primaryOrange/20">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primaryOrange" />
                          </div>
                          <span className="text-sm text-bodyGrayText font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <Link
                      href={plan.href}
                      className={`w-full py-4 rounded-2xl font-black text-sm text-center block transition-all hover:scale-105 active:scale-95 ${plan.popular
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-black uppercase tracking-widest">
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
                  <div key={item.title} className="theme-card card-3d p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primaryOrange/35 hover:bg-white/[0.055] transition-all duration-500 hover:-translate-y-2 group">
                    <div className="w-12 h-12 rounded-xl bg-primaryOrange/10 border border-primaryOrange/25 text-primaryOrange flex items-center justify-center mb-4 group-hover:bg-primaryOrange group-hover:text-white transition-colors flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-3">{item.title}</h3>
                    <p className="text-sm text-bodyGrayText font-medium leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Institutional Subscription Section - Changed background back to Navy Blue #020617 */}
          <div className="mb-24 p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 secondary-glow opacity-10" />

            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm">
                <Building2 className="w-3.5 h-3.5" /> Institutional Access
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight text-3d px-4 break-words">
                For Institutions <span className="text-primaryOrange text-3d-orange">Plans</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a1a1aa] font-medium max-w-xl mx-auto leading-relaxed px-4">
                Connect your school, college, or university to GrapeTask LMS. Train all your students on professional freelance standards.
              </p>
            </div>

            {/* Redesigned 3 Unique Geometric/Leaf Cards with orange hover turning solid & simpler clean PKR font */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { level: 'School Students', price: '200', desc: 'Beginner-friendly content', icon: School },
                { level: 'College Students', price: '300', desc: 'Intermediate practical content', icon: BookOpen },
                { level: 'University Students', price: '500', desc: 'Advanced professional content', icon: GraduationCap },
              ].map((plan) => {
                const IconComponent = plan.icon;
                return (
                  <div key={plan.level} className="relative group">
                    <div className="pricing-card p-6 sm:p-8 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center space-y-5 bg-cardBg hover:bg-primaryOrange hover:border-primaryOrange hover:text-white transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] shadow-2xl relative overflow-hidden h-full">
                      {/* Visual orange glow decoration inside card on hover */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:bg-white/20 transition-all pointer-events-none" />

                      <div className="w-14 h-14 rounded-2xl bg-primaryOrange/10 border border-primaryOrange/25 text-primaryOrange flex items-center justify-center group-hover:bg-white group-hover:text-primaryOrange transition-colors relative z-10 flex-shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-white group-hover:text-white uppercase tracking-wider relative z-10 break-words">{plan.level}</h3>

                      <div className="flex flex-col items-center relative z-10">
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="font-sans text-sm sm:text-base font-semibold text-primaryOrange group-hover:text-white transition-colors">PKR</span>
                          <span className="text-3xl sm:text-4xl font-black text-white group-hover:text-white transition-colors">{plan.price}</span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-darkGrayNumber group-hover:text-white/60 transition-colors font-black uppercase tracking-[0.18em] mt-2">Per Student / Month</span>
                      </div>

                      <p className="text-sm sm:text-base text-bodyGrayText group-hover:text-white/80 transition-colors leading-relaxed font-semibold relative z-10 max-w-[18rem]">{plan.desc}</p>

                      <Link
                        href="/contact?type=institution"
                        className="w-full py-3 sm:py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white hover:text-primaryOrange group-hover:bg-white group-hover:text-primaryOrange transition-all text-center text-xs sm:text-sm relative z-10"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Long Term Packages - Changed background back to Navy Blue #020617 */}
          <div className="p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl mb-24">
            <div className="absolute bottom-0 left-0 w-80 h-80 secondary-glow opacity-10" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              <div className="lg:col-span-7 space-y-6 sm:space-y-8 px-2 sm:px-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm">
                  <Star className="w-3.5 h-3.5" /> Long Term Committment
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight text-3d break-words">
                  Long-Term <span className="text-primaryOrange text-3d-orange">Discount Packages</span>
                </h2>
                <p className="text-sm sm:text-base text-[#a1a1aa] font-medium leading-relaxed">
                  We support educational institutions making a dedicated commitment to their students' tech skills. Get substantial savings with our multi-month packages.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-xl bg-primaryOrange/10 flex items-center justify-center text-primaryOrange border border-primaryOrange/20 flex-shrink-0">
                      <Award className="w-4.5 h-4.5" />
                    </div>
                    <p className="text-sm sm:text-base text-[#e4e4e7] font-semibold break-words"><span className="text-primaryOrange font-black">6 Months Package:</span> 25% Off total cost</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-xl bg-primaryOrange/10 flex items-center justify-center text-primaryOrange border border-primaryOrange/20 flex-shrink-0">
                      <Award className="w-4.5 h-4.5" />
                    </div>
                    <p className="text-sm sm:text-base text-[#e4e4e7] font-semibold break-words"><span className="text-primaryOrange font-black">1 Year Package:</span> 40% Off total cost (Most popular)</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col space-y-6 px-2 sm:px-4">
                <div className="theme-card p-6 sm:p-10 rounded-[2rem] border border-lightBorder relative overflow-hidden backdrop-blur-xl bg-[rgba(255,255,255,0.03)] card-3d">
                  <div className="absolute inset-0 bg-gradient-to-br from-primaryOrange/5 to-transparent pointer-events-none" />

                  <div className="text-center space-y-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight break-words">Need a custom quote?</h3>
                    <p className="text-xs sm:text-sm text-bodyGrayText font-medium leading-relaxed">
                      Have a larger student body or require specialized curriculums? Let us build a tailored corporate plan for your campus.
                    </p>
                    <div className="pt-4">
                      <Link
                        href="/contact?type=custom"
                        className="w-full py-4 bg-primaryOrange text-white font-black rounded-2xl text-xs sm:text-sm hover:bg-opacity-95 transition-all text-center block shadow-lg shadow-primaryOrange/20"
                      >
                        Contact Corporate Sales
                      </Link>
                    </div>
                  </div>
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
                <div key={i} className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] glass-card border border-[rgba(255,255,255,0.06)] hover:border-[rgba(240,89,31,0.2)] transition-all group card-3d">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-start gap-3 flex-shrink-0 break-words">
                    <span className="w-6 h-6 rounded-lg bg-[rgba(240,89,31,0.1)] flex items-center justify-center text-primaryOrange flex-shrink-0 group-hover:bg-[#f0591f] group-hover:text-white transition-all">
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
