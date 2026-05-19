'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap, Building2, ShieldCheck, BarChart3, Users, Clock,
  ArrowRight, CheckCircle2, ChevronRight, Play, Pause, BookOpen, Star, HelpCircle
} from 'lucide-react';

const pricing = [
  { level: 'School Students', price: '200', desc: 'Beginner-friendly content' },
  { level: 'College Students', price: '300', desc: 'Intermediate practical content' },
  { level: 'University Students', price: '500', desc: 'Advanced professional content' },
];

export default function ForInstitutionsPage() {
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

  const portalFeatures = [
    { title: 'Student Management', desc: 'Add, view, and organize students by grade or section. Manage licenses effortlessly.' },
    { title: 'Course Assignment', desc: 'Assign courses to classes or individual students based on their level and learning paths.' },
    { title: 'Detailed Reports', desc: 'Generate high-quality progress reports for individual students or classes with one click.' },
    { title: 'Grading Review', desc: 'View student test scores and check detailed grading reviews left by the course trainers.' },
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
          <source src="/videos/Partner with GrapeTask LMS.mp4" type="video/mp4" />
        </video>
        {/* Navy + Orange thematic overlays */}
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
          <div className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm">
              <Building2 className="w-3.5 h-3.5" /> Academic Partnerships
            </div>
            {/* Heading slightly smaller & 3D text styled */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight text-3d">
              Partner with <span className="text-primaryOrange text-3d-orange">GrapeTask LMS</span>
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] font-medium max-w-2xl mx-auto leading-relaxed">
              Equip your students with professional digital skills. Bring structured, trainer-graded freelance training directly to your campus.
            </p>
          </div>

          {/* Benefits Grid - All background classes are bg-[#020617] or bg-cardBg instead of black */}
          <div className="mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-12 sm:mb-16 text-center tracking-tight text-3d">
              Why Partner with <span className="text-primaryOrange text-3d-orange">GrapeTask LMS?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
              {[
                { title: 'Level-Based Courses', desc: 'Specialized content built specifically for school, college, and university students.', icon: <GraduationCap className="w-6 h-6" /> },
                { title: 'Dedicated Portal', desc: 'A complete dashboard to manage students, assign courses, and track performance.', icon: <Building2 className="w-6 h-6" /> },
                { title: 'Trainer Grading', desc: 'Expert trainers grade practical submissions, leaving detailed code and design feedback.', icon: <ShieldCheck className="w-6 h-6" /> },
                { title: 'Direct Reports', desc: 'Instant progress reports delivered directly to your portal inbox with one click.', icon: <BarChart3 className="w-6 h-6" /> },
              ].map((benefit) => (
                <div key={benefit.title} className="theme-card card-3d h-full p-6 sm:p-8 rounded-[2rem] flex flex-col items-start text-left relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:from-primaryOrange/[0.08] hover:to-transparent border border-white/10 hover:border-primaryOrange/40 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(240,89,31,0.15)] group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primaryOrange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-white/[0.04] group-hover:bg-primaryOrange/10 text-white/80 group-hover:text-primaryOrange border border-white/10 group-hover:border-primaryOrange/30 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(240,89,31,0.2)] transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 flex-shrink-0 z-10">
                    {benefit.icon}
                  </div>

                  <div className="flex-1 flex flex-col justify-start z-10 w-full text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 group-hover:text-primaryOrange transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-sm text-bodyGrayText group-hover:text-[#d4d4d8] font-medium leading-relaxed transition-colors duration-300">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How it Works - Changed background to Navy Blue #020617 */}
          <div className="mb-24 p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 secondary-glow opacity-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-12 sm:mb-16 text-center tracking-tight text-3d">
              How the Partnership <span className="text-primaryOrange text-3d-orange">Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative items-stretch">
              {[
                { step: '01', title: 'Select a Level Plan', desc: 'Choose a subscription plan matching your students\' levels (School, College, or University).' },
                { step: '02', title: 'Register Students', desc: 'Receive dedicated portal credentials. Add your student body and assign student licenses.' },
                { step: '03', title: 'Receive Reports', desc: 'Students complete video lessons and pass assessments. Get verified reports on their progress.' },
              ].map((step, idx) => (
                <div key={step.step} className="theme-card card-3d h-full p-6 sm:p-8 rounded-[2rem] flex flex-col items-start text-left relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:from-primaryOrange/[0.08] hover:to-transparent border border-white/10 hover:border-primaryOrange/40 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(240,89,31,0.15)] group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primaryOrange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="text-5xl sm:text-6xl font-black text-primaryOrange/20 group-hover:text-primaryOrange/40 tracking-tighter leading-none mb-6 transition-colors duration-500 z-10">
                    {step.step}
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-start z-10 w-full text-left">
                    <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-primaryOrange transition-colors duration-300">{step.title}</h3>
                    <p className="text-sm text-bodyGrayText group-hover:text-[#d4d4d8] font-medium leading-relaxed transition-colors duration-300">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portal Features - Changed background to Navy Blue #020617 */}
          <div className="mb-24 p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl">
            <div className="absolute bottom-0 left-0 w-80 h-80 secondary-glow opacity-10" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight text-3d">
                  Your Institution <span className="text-primaryOrange text-3d-orange">Portal</span>
                </h2>
                <p className="text-sm sm:text-base text-[#a1a1aa] font-medium leading-relaxed">
                  Every partner school, college, and university receives a dedicated manager portal. No complicated IT setups required. Manage licenses, assign classes, and pull report cards from one clean interface.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 items-stretch">
                  {portalFeatures.map((feat) => (
                    <div key={feat.title} className="theme-card card-3d h-full p-5 sm:p-6 rounded-2xl flex flex-col items-start text-left relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:from-primaryOrange/[0.08] hover:to-transparent border border-white/10 hover:border-primaryOrange/40 transition-all duration-500 shadow-md hover:shadow-[0_15px_30px_rgba(240,89,31,0.15)] group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primaryOrange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      
                      <div className="flex-1 flex flex-col justify-start z-10 w-full text-left">
                        <div className="flex items-center space-x-3 mb-2 sm:mb-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-primaryOrange/50 group-hover:bg-primaryOrange group-hover:scale-125 transition-all duration-300 flex-shrink-0 shadow-[0_0_8px_rgba(240,89,31,0)] group-hover:shadow-[0_0_8px_rgba(240,89,31,0.6)]" />
                          <h4 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-primaryOrange transition-colors duration-300">{feat.title}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-bodyGrayText group-hover:text-[#d4d4d8] leading-relaxed font-medium transition-colors duration-300 pl-5">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graphical Portal Widget Card */}
              <div className="lg:col-span-5">
                <div className="theme-card p-6 sm:p-8 rounded-[2rem] border border-lightBorder relative overflow-hidden backdrop-blur-xl bg-[rgba(255,255,255,0.03)] card-3d">
                  <div className="absolute inset-0 bg-gradient-to-br from-primaryOrange/5 to-transparent pointer-events-none" />
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-white/5">
                      <span className="text-[10px] text-darkGrayNumber font-black uppercase tracking-widest">Active Licenses</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-primaryOrange/20 text-primaryOrange">250 Allocated</span>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center text-xs">
                        <span className="font-semibold text-white">School Students Plan</span>
                        <span className="text-[#a1a1aa] font-bold">120 Seats used</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center text-xs">
                        <span className="font-semibold text-white">College Students Plan</span>
                        <span className="text-[#a1a1aa] font-bold">85 Seats used</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex justify-between items-center text-xs">
                        <span className="font-semibold text-white">University Students Plan</span>
                        <span className="text-[#a1a1aa] font-bold">45 Seats used</span>
                      </div>
                    </div>
                    <div className="pt-2 text-center text-[10px] text-darkGrayNumber font-black uppercase tracking-widest leading-none">
                      Secured by GrapeTask LMS Guard
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Plans - Changed background to Navy Blue #020617 */}
          <div className="p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl mb-24">
            <div className="absolute top-0 right-0 w-80 h-80 secondary-glow opacity-10" />

            <div className="text-center mb-16 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight text-3d">
                For Institutions <span className="text-primaryOrange text-3d-orange">plans</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a1a1aa] font-medium max-w-xl mx-auto leading-relaxed">
                Connect your institution and provide premium digital tech skill courses to your student body.
              </p>
            </div>

            {/* Asymmetrical Premium Pricing Cards with clean PKR text and Orange Hover */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan) => (
                <div key={plan.level} className="relative group">
                  <div className="pricing-card p-8 sm:p-10 rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] border border-white/10 flex flex-col items-center text-center space-y-6 bg-cardBg hover:bg-primaryOrange hover:border-primaryOrange hover:text-white transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] shadow-2xl relative overflow-hidden h-full">
                    {/* Visual orange glow decoration inside card on hover */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/20 transition-all pointer-events-none" />

                    <h3 className="text-lg font-black text-white group-hover:text-white uppercase tracking-wider">{plan.level}</h3>

                    <div className="flex flex-col items-center">
                      <div className="flex items-baseline justify-center">
                        {/* Simpler clean font, reduced relative size */}
                        <span className="font-sans text-base font-semibold text-primaryOrange group-hover:text-white transition-colors mr-1">PKR</span>
                        <span className="text-4xl sm:text-5xl font-black text-white group-hover:text-white transition-colors">{plan.price}</span>
                      </div>
                      <span className="text-[9px] text-darkGrayNumber group-hover:text-white/60 transition-colors font-black uppercase tracking-[0.2em] mt-2">Per Student / Month</span>
                    </div>

                    <p className="text-sm text-bodyGrayText group-hover:text-white/80 transition-colors leading-relaxed font-semibold">{plan.desc}</p>

                    <Link
                      href="/contact?type=institution"
                      className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white hover:text-primaryOrange group-hover:bg-white group-hover:text-primaryOrange transition-all text-center text-xs sm:text-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white text-3d">
              Ready to Partner with <span className="text-primaryOrange text-3d-orange">GrapeTask LMS?</span>
            </h2>
            <div className="flex justify-center">
              <Link
                href="/contact?type=institution"
                className="group inline-flex items-center space-x-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-primaryOrange hover:bg-opacity-95 text-white font-black text-sm sm:text-base rounded-xl shadow-lg shadow-primaryOrange/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Request Institution Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
