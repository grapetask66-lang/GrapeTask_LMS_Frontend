'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ChevronDown, Bell, Mail, Menu, Play, Pause } from 'lucide-react';
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

  const categories = [
    "All", "Web Development", "Data Science", "Digital Marketing", "Video & Animation", "Music & Audio", "Business"
  ];

  const dummyCourses = [
    {
      id: 1,
      trainer: "You",
      username: "@trainer",
      title: "I will teach you full-stack web development with Next.js",
      price: "Rs 5,000",
      rating: 5.0,
      orders: 12,
      category: "Web Development",
    },
    {
      id: 2,
      trainer: "You",
      username: "@trainer",
      title: "I will guide you through advanced Python and Data Science",
      price: "Rs 4,500",
      rating: 4.9,
      orders: 8,
      category: "Data Science",
    },
    {
      id: 3,
      trainer: "You",
      username: "@trainer",
      title: "I will help you master UI/UX design from scratch",
      price: "Rs 3,000",
      rating: 4.8,
      orders: 24,
      category: "Video & Animation",
    },
    {
      id: 4,
      trainer: "You",
      username: "@trainer",
      title: "I will provide complete Digital Marketing training",
      price: "Rs 2,500",
      rating: 5.0,
      orders: 5,
      category: "Digital Marketing",
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-gray-200 flex flex-col">
      
      {/* Navbar (GrapeTask Post-Login Style) */}
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

      {/* Hero Video Section (GrapeTask Main Landing Style) */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 bg-[#020617] overflow-hidden z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-80"
          >
            <source src="/videos/Teach on GrapeTask LMS.mp4" type="video/mp4" />
          </video>

          {/* Theme Color Overlays matching HeroSection */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/50 to-transparent z-20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/60 via-transparent to-[#f0591f]/10 mix-blend-screen opacity-60 z-20" />
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute bottom-10 right-8 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
        </button>

        {/* Hero Content */}
        <div className="relative z-30 container mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-[#f0591f]/30 backdrop-blur-md mb-6">
              <span className="text-[#f0591f] text-xs sm:text-sm font-bold tracking-wider uppercase">
                Welcome to GrapeTask LMS
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 leading-tight">
              Share Your Expertise, <br />
              <span className="text-[#f0591f] text-transparent bg-clip-text bg-gradient-to-r from-[#f0591f] to-orange-300">
                Inspire the World.
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed">
              Launch your courses, manage your students, and track your revenue all in one powerful dashboard. The next generation of learning starts with you.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button 
                onClick={() => router.push('/trainer/dashboard')} 
                className="w-full sm:w-auto bg-gradient-to-r from-[#f0591f] to-orange-500 hover:from-[#d94d19] hover:to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(240,89,31,0.3)] hover:shadow-[0_0_30px_rgba(240,89,31,0.5)] flex items-center justify-center gap-2"
              >
                Go to Dashboard
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => router.push('/trainer/create-course')} 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm"
              >
                Create New Course
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Feed Content Below Fold */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        {/* Category Pills */}
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide mb-12">
          {categories.map((cat, i) => (
            <button 
              key={cat} 
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                i === 0 
                  ? 'bg-[#f0591f] text-white shadow-lg shadow-[#f0591f]/20' 
                  : 'bg-white/5 text-gray-400 border border-white/5 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section: Your Recent Courses */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Your Top Courses</h2>
            <button className="text-sm text-[#f0591f] hover:text-orange-400 font-bold tracking-wide uppercase transition-colors" onClick={() => router.push('/trainer/courses')}>
              Manage Portfolio &rarr;
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dummyCourses.map((course) => (
              <div key={course.id} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 group hover:border-[#f0591f]/50 transition-all hover:bg-white/10 hover:-translate-y-1 cursor-pointer shadow-lg backdrop-blur-sm">
                <div className="h-40 bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
                     <span className="text-xs font-bold bg-[#f0591f] text-white px-2 py-1 rounded">
                       {course.category}
                     </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white text-base mb-3 line-clamp-2 leading-tight group-hover:text-[#f0591f] transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4 border-t border-white/10 pt-4">
                    <span className="font-bold text-white">{course.price}</span>
                    <span className="text-gray-400 text-xs font-medium">{course.orders} Students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
