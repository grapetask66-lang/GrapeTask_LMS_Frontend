'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bell, Mail, Menu, Play, Pause, CheckCircle2, Globe, TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import { useAuthStore } from '@/store/auth-store';

export default function TrainerWelcomePage() {
  const router = useRouter();
  const { user } = useAuthStore();
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-gray-200 flex flex-col">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#020617]/80 backdrop-blur-md border-b border-white/[0.05]">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
          <div className="w-8 h-8 bg-[#f0591f] rounded flex items-center justify-center font-bold text-white shadow-lg">
            G
          </div>
          <span className="text-xl font-bold text-white tracking-wide uppercase">
            Grape<span className="text-[#f0591f]">Task</span>
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium">
          <button onClick={() => router.push('/trainer/dashboard')} className="hover:text-white transition-colors cursor-pointer text-[#f0591f] font-bold">
            Go to Dashboard
          </button>
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f0591f] to-orange-400 flex items-center justify-center overflow-hidden border border-white/10 shadow-lg cursor-pointer">
              <span className="text-white text-xs font-bold">{user?.name?.charAt(0) || 'T'}</span>
            </div>
            <Menu className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer hidden sm:block transition-colors" />
          </div>
        </div>
      </nav>

      {/* Hero Video Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617] overflow-hidden z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-60"
          >
            {/* Using another local video and heavy CSS overlays to create the 'Virtual Teaching / Blue-Orange' feel */}
            <source src="/videos/Master the Skills that Drive CareersForward.mp4" type="video/mp4" />
          </video>

          {/* Heavy GrapeTask Theme Overlays: Dark Blue & Neon Orange */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-[#020617]/30 z-20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#003366]/60 via-transparent to-[#f0591f]/40 mix-blend-color-dodge opacity-80 z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-20" />
        </div>

        <button
          onClick={togglePlayPause}
          className="absolute bottom-10 right-8 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
        </button>

        <div className="relative z-30 container mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0591f]/20 border border-[#f0591f]/50 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(240,89,31,0.3)]">
              <span className="w-2 h-2 rounded-full bg-[#f0591f] animate-pulse" />
              <span className="text-[#f0591f] text-xs sm:text-sm font-extrabold tracking-wider uppercase">
                Welcome to the Virtual Classroom
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
              Guide Students. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0591f] to-yellow-400">
                Transform Futures.
              </span>
            </h1>
            
            <p className="text-gray-200 text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed drop-shadow-md">
              Step into your virtual studio. Build interactive courses, host live Q&A sessions, and earn a sustainable income by sharing your expertise with millions of students across GrapeTask.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => router.push('/trainer/dashboard')} 
                className="w-full sm:w-auto bg-[#f0591f] hover:bg-[#d94d19] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(240,89,31,0.5)] flex items-center justify-center gap-2"
              >
                Enter Dashboard
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => router.push('/trainer/create-course')} 
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
              >
                Create New Course
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="relative z-10 w-full border-y border-white/5 bg-[#050B14]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Students", value: "2M+", icon: <Users className="w-6 h-6 text-[#f0591f]" /> },
            { label: "Total Earnings Paid", value: "$10M+", icon: <DollarSign className="w-6 h-6 text-[#f0591f]" /> },
            { label: "Global Reach", value: "150+ Countries", icon: <Globe className="w-6 h-6 text-[#f0591f]" /> },
            { label: "Trainer Satisfaction", value: "99%", icon: <TrendingUp className="w-6 h-6 text-[#f0591f]" /> },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="p-3 bg-white/5 rounded-full border border-white/10">{stat.icon}</div>
              <h4 className="text-3xl font-black text-white">{stat.value}</h4>
              <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Features & How it works */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Why Teach on GrapeTask?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We provide everything you need to build a successful online teaching business. From virtual classrooms to instant payouts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <FeatureCard 
            icon={<Award className="w-8 h-8 text-[#f0591f]" />}
            title="Professional Branding"
            desc="Get verified, build a stunning profile, and showcase your expertise to a global audience. Your personal brand grows with every 5-star review."
          />
          <FeatureCard 
            icon={<CheckCircle2 className="w-8 h-8 text-[#f0591f]" />}
            title="Complete Toolkit"
            desc="Record lectures, design MCQs, evaluate assignments, and host live sessions directly from our unified Trainer Dashboard."
          />
          <FeatureCard 
            icon={<DollarSign className="w-8 h-8 text-[#f0591f]" />}
            title="Transparent Earnings"
            desc="No hidden fees. Track your revenue in real-time and withdraw your earnings directly to your local bank account instantly."
          />
        </div>

        {/* How to Start Steps */}
        <div className="bg-gradient-to-b from-[#0A1128] to-[#020617] rounded-[3rem] p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f0591f]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <h3 className="text-3xl font-bold text-white mb-12 text-center relative z-10">Your Journey Starts Here</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { step: "01", title: "Setup Profile", desc: "Add your bio, skills, and portfolio." },
              { step: "02", title: "Create Course", desc: "Upload videos and interactive tasks." },
              { step: "03", title: "Engage", desc: "Interact with students virtually." },
              { step: "04", title: "Earn", desc: "Get paid for every enrollment." },
            ].map((s, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-black text-white/5 group-hover:text-[#f0591f]/20 transition-colors mb-2 absolute -top-8 -left-4">
                  {s.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-2 relative z-10">{s.title}</h4>
                <p className="text-gray-400 text-sm relative z-10">{s.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-6 -right-4 w-8 border-t-2 border-dashed border-gray-700" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comprehensive Footer */}
      <footer className="w-full bg-[#01030A] border-t border-white/10 pt-20 pb-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#f0591f] rounded flex items-center justify-center font-bold text-white">G</div>
                <span className="text-2xl font-bold text-white tracking-wide">Grape<span className="text-[#f0591f]">Task</span></span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Empowering the next generation of digital professionals through world-class virtual education and real-world freelance opportunities.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">For Trainers</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#f0591f] transition-colors">Trainer Dashboard</a></li>
                <li><a href="#" className="hover:text-[#f0591f] transition-colors">Course Creation Guide</a></li>
                <li><a href="#" className="hover:text-[#f0591f] transition-colors">Revenue & Payouts</a></li>
                <li><a href="#" className="hover:text-[#f0591f] transition-colors">Trainer Policies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#f0591f] transition-colors">Browse Courses</a></li>
                <li><a href="#" className="hover:text-[#f0591f] transition-colors">Freelance Marketplace</a></li>
                <li><a href="#" className="hover:text-[#f0591f] transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-[#f0591f] transition-colors">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact & Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#f0591f] transition-colors">support@grapetask.com</a></li>
                <li><a href="#" className="hover:text-[#f0591f] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#f0591f] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} GrapeTask. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f0591f]/20 flex items-center justify-center cursor-pointer transition-colors border border-white/10">
                <span className="text-white text-xs">FB</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f0591f]/20 flex items-center justify-center cursor-pointer transition-colors border border-white/10">
                <span className="text-white text-xs">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#f0591f]/20 flex items-center justify-center cursor-pointer transition-colors border border-white/10">
                <span className="text-white text-xs">TW</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-[#050B14] border border-white/10 p-8 rounded-3xl hover:bg-white/5 transition-all group hover:-translate-y-2 shadow-xl">
      <div className="w-16 h-16 bg-[#020617] rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#f0591f]/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#f0591f] transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
