'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Search, ChevronDown, Heart, Share2, MoreVertical, Bell, Mail, Menu } from 'lucide-react';
import { useAuthStore } from '@/store/auth-store';

export default function TrainerWelcomePage() {
  const router = useRouter();
  const { user } = useAuthStore();

  const categories = [
    "All", "Web Development", "Data Science", "Digital Marketing", "Video & Animation", "Music & Audio", "Business"
  ];

  const dummyCourses = [
    {
      id: 1,
      trainer: "Umar Aziz",
      username: "@umar",
      title: "I will teach you full-stack web development with Next.js",
      price: "Rs 5,000",
      rating: 5.0,
      orders: 12,
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      trainer: "Sara Khan",
      username: "@sara_k",
      title: "I will guide you through advanced Python and Data Science",
      price: "Rs 4,500",
      rating: 4.9,
      orders: 8,
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      trainer: "Ali Raza",
      username: "@ali_raza",
      title: "I will help you master UI/UX design from scratch",
      price: "Rs 3,000",
      rating: 4.8,
      orders: 24,
      category: "Video & Animation",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      trainer: "Nida",
      username: "@nida_seo",
      title: "I will provide complete Digital Marketing training",
      price: "Rs 2,500",
      rating: 5.0,
      orders: 5,
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0D14] font-sans text-gray-200">
      
      {/* Navbar (GrapeTask Homepage Style) */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#0A0D14] border-b border-white/[0.05]">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-[#f0591f] rounded flex items-center justify-center font-bold text-white shadow-lg">
            G
          </div>
          <span className="text-xl font-bold text-white tracking-wide uppercase">
            Grape<span className="text-[#f0591f]">Task</span>
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium">
          <span className="text-gray-400 hidden sm:inline-block">Bids: 215 Bids</span>
          <button onClick={() => router.push('/trainer/dashboard')} className="hover:text-white transition-colors cursor-pointer text-gray-300">
            Dashboard
          </button>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Mail className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-purple-500 flex items-center justify-center overflow-hidden border border-white/10">
              <span className="text-white text-xs font-bold">{user?.name?.charAt(0) || 'T'}</span>
            </div>
            <Menu className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f0591f]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 text-center w-full max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Teach, Inspire & <span className="text-[#f0591f]">Earn</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mb-10">
            Share your <span className="text-[#f0591f]">Expertise</span>, Build your <span className="text-[#f0591f]">Audience</span>, Grow your <span className="text-[#f0591f]">Revenue</span>.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-center w-full max-w-3xl mx-auto bg-[#1A1D24] rounded-full p-2 border border-white/10 shadow-2xl">
            <div className="flex-1 flex items-center px-4 py-2 w-full">
              <Search className="w-5 h-5 text-gray-500 mr-3" />
              <input 
                type="text" 
                placeholder="Search your courses, students or analytics..." 
                className="w-full bg-transparent border-none outline-none text-white placeholder-gray-500 text-sm"
              />
            </div>
            <div className="hidden sm:flex items-center px-4 border-l border-white/10">
              <span className="text-sm text-gray-400 mr-2">All Courses</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            <button onClick={() => router.push('/trainer/dashboard')} className="w-full sm:w-auto mt-2 sm:mt-0 bg-[#f0591f] hover:bg-[#d94d19] text-white px-8 py-3 rounded-full font-medium transition-colors">
              Go to Dashboard
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm font-medium">
            <span className="px-6 py-2 bg-[#f0591f] text-white rounded-full cursor-pointer">My Courses</span>
            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors" onClick={() => router.push('/trainer/assignments')}>Assignments</span>
            <span className="text-gray-400 hover:text-white cursor-pointer transition-colors" onClick={() => router.push('/trainer/analytics')}>Analytics</span>
          </div>
        </div>
      </div>

      {/* Categories & Feed */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Pills */}
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide mb-12">
          {categories.map((cat, i) => (
            <button 
              key={cat} 
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                i === 0 
                  ? 'bg-[#f0591f] text-white' 
                  : 'bg-[#1A1D24] text-gray-400 border border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section: Your Recent Courses */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Your Recent Courses</h2>
            <button className="text-sm text-[#f0591f] hover:text-orange-400 font-medium" onClick={() => router.push('/trainer/courses')}>Manage All &rarr;</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dummyCourses.map((course) => (
              <div key={course.id} className="bg-[#13161C] rounded-2xl overflow-hidden border border-white/5 group hover:border-[#f0591f]/50 transition-colors">
                
                {/* Header (Trainer info) */}
                <div className="flex items-center gap-3 p-4">
                  <div className="w-8 h-8 rounded-full bg-[#f0591f] flex items-center justify-center text-white font-bold text-xs">
                    {course.trainer.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">You</span>
                    <span className="text-xs text-gray-500">{course.username}</span>
                  </div>
                  <div className="ml-auto text-yellow-500 text-xs flex items-center">
                    {'★'.repeat(Math.floor(course.rating))}
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="w-full h-40 relative overflow-hidden bg-gray-800">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-medium text-white">
                    {course.category}
                  </div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-200 line-clamp-2 leading-relaxed mb-4 group-hover:text-[#f0591f] transition-colors">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-lg font-bold text-[#f0591f]">{course.price}</span>
                    <span className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded">{course.orders} orders</span>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-white/5 text-gray-500">
                  <div className="flex items-center gap-4">
                    <Heart className="w-4 h-4 hover:text-red-500 cursor-pointer transition-colors" />
                    <Share2 className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                  </div>
                  <MoreVertical className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
