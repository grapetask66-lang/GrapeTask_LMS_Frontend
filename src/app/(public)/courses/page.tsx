'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { coursesApi } from '@/services/api';
import {
  Search, Star, Users, ArrowRight, CheckCircle2, Filter, BookOpen, Briefcase, Award, Play, Pause,
  Sparkles, TrendingUp, Clock, Shield, Zap, ChevronRight, Layers, Target, Calendar, MessageCircle,
  Code, Palette, Megaphone, Video, Bot, ShoppingBag, FileText, Trophy, Globe, Headphones, ThumbsUp,
  Eye, Rocket, Heart, GitBranch, LineChart, Settings, UserPlus, Mail, Crown, Flame, Compass,
  GraduationCap, Building2, Users2, VideoIcon, FileCheck, MessageSquare, Download, Share2, BookMarked,
  FolderKanban, BarChart, LifeBuoy, LayoutDashboard, CircleDot, Mic
} from 'lucide-react';

const MOCK_COURSES = [
  { id: 1, title: 'The Complete Web Development Bootcamp', level: 'Beginner', trainer_name: 'Dr. Angela Yu', students: '2.4k', rating: '4.9', total_students: '2.4k', duration: '45 hours', lectures: 287, thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Graphic Design Masterclass - Learn Photoshop, Illustrator', level: 'Intermediate', trainer_name: 'Lindsay Marsh', students: '1.8k', rating: '4.8', total_students: '1.8k', duration: '32 hours', lectures: 156, thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80' },
  { id: 3, title: 'The Digital Marketing Complete Course', level: 'All Levels', trainer_name: 'Phil Ebiner', students: '3.1k', rating: '4.7', total_students: '3.1k', duration: '28 hours', lectures: 189, thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=80' },
  { id: 4, title: 'Artificial Intelligence A-Z 2024', level: 'Advanced', trainer_name: 'Kirill Eremenko', students: '900', rating: '4.9', total_students: '900', duration: '52 hours', lectures: 324, thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80' },
  { id: 5, title: 'UI/UX Design Specialization', level: 'Intermediate', trainer_name: 'Brad Frost', students: '1.5k', rating: '4.8', total_students: '1.5k', duration: '38 hours', lectures: 198, thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&auto=format&fit=crop&q=80' },
  { id: 6, title: 'Python for Data Science and Machine Learning', level: 'Intermediate', trainer_name: 'Jose Portilla', students: '2.9k', rating: '4.9', total_students: '2.9k', duration: '42 hours', lectures: 267, thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=80' },
];

const CoursesPage = () => {
  const [courses, setCourses] = useState(MOCK_COURSES);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

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

  const [filters, setFilters] = useState({
    level: 'All',
    category: 'All',
    sort: 'Most Popular',
    search: '',
  });

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await coursesApi.getAll(filters);
      if (data && data.length > 0) {
        setCourses(data);
      } else if (filters.search || filters.level !== 'All' || filters.category !== 'All') {
        setCourses([]);
      } else {
        setCourses(MOCK_COURSES);
      }
    };
    fetchCourses();
  }, [filters]);

  const categories = ['All', 'Development', 'Design', 'Marketing', 'AI', 'Business', 'Photography'];

  return (
    <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-48 w-96 h-96 bg-primaryOrange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-48 w-96 h-96 bg-primaryOrange/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Video Background */}
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
              if (isPlaying) el.play().catch(() => {});
              else el.pause();
            }
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-60 sm:opacity-75 z-10"
        >
          <source src="/videos/Master the Skills that Drive CareersForward.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/30 via-[#020617]/70 to-[#020617] z-20" />
      </div>

      <button
        onClick={togglePlayPause}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
      </button>

      <div className="pt-28 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header Section */}
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest backdrop-blur-sm hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-default">
              <Sparkles className="w-3.5 h-3.5" /> Start Learning Today
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Master the Skills that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryOrange to-[#ff7a45]">Drive Careers Forward</span>
            </h1>
            <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl mx-auto text-left sm:text-center">
              Join millions of learners worldwide. Learn from industry experts with real-world projects and certificates.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#a1a1aa] w-5 h-5 group-hover:scale-110 group-hover:text-primaryOrange transition-all duration-300" />
              <input
                type="text"
                placeholder="Search for any skill..."
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-full py-4 pl-12 sm:pl-14 pr-4 sm:pr-24 text-white focus:outline-none focus:border-primaryOrange/50 focus:shadow-[0_0_25px_rgba(240,89,31,0.15)] transition-all text-sm sm:text-base"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              />
              <button className="mt-3 w-full sm:mt-0 sm:w-auto sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 px-5 py-2 bg-primaryOrange rounded-xl sm:rounded-full text-sm font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_10px_20px_rgba(240,89,31,0.3)]">
                Search
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {['Python', 'UI/UX', 'Marketing', 'Data Science', 'Business', 'Photography'].map(tag => (
                <button key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-[#a1a1aa] hover:bg-primaryOrange/10 hover:border-primaryOrange/20 hover:text-white hover:scale-110 hover:-translate-y-1 active:scale-95 transition-all duration-300">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Trust Bar */}
          <div className="bg-[#0f172a]/50 backdrop-blur-md border border-white/5 rounded-2xl p-4 sm:p-5 mb-16 hover:scale-[1.01] hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-10 text-sm text-[#94a3b8]">
              {[
                { icon: Users2, text: '25M+ learners' },
                { icon: VideoIcon, text: '75+ languages' },
                { icon: Award, text: 'Industry certificates' },
                { icon: Building2, text: '10K+ enterprise clients' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 group cursor-default text-center">
                  <item.icon className="w-4 h-4 text-primaryOrange group-hover:scale-150 group-hover:rotate-12 group-hover:-translate-y-1 transition-all duration-300" />
                  <span className="font-medium group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Strip */}
          <div className="mb-12 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-2 min-w-max">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat.toLowerCase())}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap hover:-translate-y-1 hover:shadow-lg ${
                    activeCategory === cat.toLowerCase()
                      ? 'bg-primaryOrange text-white shadow-lg shadow-primaryOrange/25 scale-105 hover:scale-110'
                      : 'bg-white/5 text-[#94a3b8] hover:bg-white/10 border border-white/5 hover:border-white/10 hover:scale-105'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Courses Section - Bento Layout with 3D */}
          <div className="mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Top courses in Development</h2>
                <p className="text-sm text-[#94a3b8] mt-1">Most popular among our learners</p>
              </div>
              <Link href="/courses" className="text-primaryOrange text-sm font-semibold hover:underline flex items-center gap-1 group hover:scale-110 transition-transform duration-300">
                View all <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 auto-rows-auto sm:auto-rows-[280px]">
              {/* Main Featured - Large Card */}
              <div className="lg:col-span-3 lg:row-span-2 relative rounded-2xl overflow-hidden border border-white/5 group cursor-pointer hover:scale-[1.03] hover:-translate-y-6 hover:rotate-1 hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.4)] transition-all duration-500 ease-out">
                <img src={courses[0].thumbnail} alt={courses[0].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent"></div>
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-primaryOrange text-xs font-bold shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">Bestseller</div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                  <span className="text-xs font-semibold text-primaryOrange uppercase tracking-widest">{courses[0].level} • {courses[0].duration}</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2 mb-3 group-hover:text-primaryOrange transition-colors">{courses[0].title}</h3>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300"/><span className="text-sm font-bold text-white">{courses[0].rating}</span></div>
                    <span className="text-sm text-[#94a3b8]">({courses[0].students} students)</span>
                    <span className="text-sm text-[#94a3b8]">• {courses[0].trainer_name}</span>
                  </div>
                  <button className="px-6 py-2.5 bg-primaryOrange rounded-lg text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-primaryOrange/20 group-hover:scale-110 active:scale-95 hover:shadow-[0_10px_20px_rgba(240,89,31,0.4)]">
                    Enroll Now
                  </button>
                </div>
              </div>

              {/* Secondary Feature - Wide Card */}
              <div className="lg:col-span-2 flex flex-col sm:flex-row bg-[#0f172a] border border-white/5 rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.05] hover:-translate-y-6 hover:-rotate-1 hover:shadow-[0_25px_50px_-12px_rgba(240,89,31,0.3)] transition-all duration-500 ease-out">
                <div className="w-full sm:w-2/5 min-h-[160px] sm:min-h-0 relative">
                  <img src={courses[1].thumbnail} alt={courses[1].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="w-full sm:w-3/5 p-5 flex flex-col justify-center text-left relative z-10">
                  <span className="text-[10px] font-bold text-primaryOrange uppercase tracking-widest mb-1">{courses[1].level}</span>
                  <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-primaryOrange transition-colors">{courses[1].title}</h3>
                  <p className="text-xs text-[#94a3b8] mb-3">{courses[1].trainer_name}</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300"/><span className="text-xs font-bold text-white">{courses[1].rating}</span>
                    <span className="text-xs text-[#94a3b8]">({courses[1].students})</span>
                  </div>
                </div>
              </div>

              {/* Secondary Feature - Wide Card */}
              <div className="lg:col-span-2 flex flex-col sm:flex-row bg-[#0f172a] border border-white/5 rounded-2xl overflow-hidden group cursor-pointer hover:scale-[1.05] hover:-translate-y-6 hover:rotate-1 hover:shadow-[0_25px_50px_-12px_rgba(240,89,31,0.3)] transition-all duration-500 ease-out">
                <div className="w-full sm:w-2/5 min-h-[160px] sm:min-h-0 relative">
                  <img src={courses[2].thumbnail} alt={courses[2].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="w-full sm:w-3/5 p-5 flex flex-col justify-center text-left relative z-10">
                  <span className="text-[10px] font-bold text-primaryOrange uppercase tracking-widest mb-1">{courses[2].level}</span>
                  <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-primaryOrange transition-colors">{courses[2].title}</h3>
                  <p className="text-xs text-[#94a3b8] mb-3">{courses[2].trainer_name}</p>
                  <div className="flex items-center gap-2">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300"/><span className="text-xs font-bold text-white">{courses[2].rating}</span>
                    <span className="text-xs text-[#94a3b8]">({courses[2].students})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Paths - Split Layout + Dashboard UI */}
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Curated <span className="text-primaryOrange">Learning Paths</span>
              </h2>
              <p className="text-[#94a3b8] text-base leading-relaxed">
                From beginner to professional, follow structured paths designed by industry experts to get job-ready faster.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  { title: 'Web Developer', icon: Code, courses: 12, level: 'Beginner to Advanced' },
                  { title: 'Data Scientist', icon: BarChart, courses: 8, level: 'Intermediate' },
                  { title: 'UI/UX Designer', icon: Palette, courses: 10, level: 'All Levels' },
                  { title: 'Digital Marketer', icon: Megaphone, courses: 9, level: 'Beginner Friendly' },
                ].map((path) => {
                  const IconComp = path.icon;
                  return (
                    <div key={path.title} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primaryOrange/30 hover:bg-white/[0.04] transition-all duration-300 group cursor-pointer hover:scale-[1.03] hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_20px_40px_-10px_rgba(240,89,31,0.2)]">
                      <div className="w-12 h-12 rounded-xl bg-white/5 group-hover:bg-primaryOrange text-white/60 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(240,89,31,0.3)]">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-bold text-white mb-0.5">{path.title}</h3>
                        <p className="text-xs text-[#94a3b8]">{path.level} • {path.courses} Courses</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#94a3b8] group-hover:text-primaryOrange group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mock Dashboard UI */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-bl from-primaryOrange/10 to-transparent rounded-3xl blur-2xl opacity-40 pointer-events-none group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0f172a] border border-white/5 rounded-2xl p-5 shadow-2xl space-y-4 hover:scale-[1.02] hover:-translate-y-4 hover:rotate-1 hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.3)] transition-all duration-500">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2 group/icon cursor-default">
                    <LayoutDashboard className="w-4 h-4 text-primaryOrange group-hover/icon:scale-125 group-hover/icon:rotate-12 transition-transform duration-300"/>
                    <span className="text-xs font-semibold text-white">My Learning Path</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-400 font-bold group-hover/icon:scale-110 transition-transform duration-300">In Progress</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-primaryOrange group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primaryOrange/20 transition-all duration-300">
                    <Code className="w-8 h-8"/>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Full-Stack Web Development</p>
                    <p className="text-xs text-[#94a3b8]">7 of 12 Courses Completed</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span className="text-[#94a3b8]">Overall Progress</span><span className="text-white font-medium">58%</span></div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-[58%] bg-gradient-to-r from-primaryOrange to-orange-400 rounded-full group-hover:w-[70%] transition-all duration-1000"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span className="text-[#94a3b8]">Projects Built</span><span className="text-white font-medium">4/6</span></div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden"><div className="h-full w-[66%] bg-white/30 rounded-full group-hover:w-[80%] transition-all duration-1000"></div></div>
                  </div>
                </div>
                <button className="w-full mt-2 py-2.5 bg-primaryOrange/10 text-primaryOrange text-sm font-semibold rounded-lg hover:bg-primaryOrange hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:scale-105 hover:shadow-lg active:scale-95">
                  Continue Learning <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"/>
                </button>
              </div>
            </div>
          </div>

          {/* Recommended Courses - Horizontal Scroll with 3D */}
          <div className="mb-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Recommended for you</h2>
                <p className="text-sm text-[#94a3b8] mt-1">Based on your interests</p>
              </div>
              <Link href="/recommended" className="text-primaryOrange text-sm font-semibold hover:underline flex items-center gap-1 group hover:scale-110 transition-transform duration-300">
                View all <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
            
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
              {courses.slice(3, 6).map((course) => (
                <div key={course.id} className="min-w-[min(18rem,calc(100vw-2rem))] w-[min(20rem,calc(100vw-2rem))] rounded-2xl overflow-hidden bg-[#0f172a] border border-white/5 group cursor-pointer hover:scale-[1.05] hover:-translate-y-6 hover:rotate-1 hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.4)] transition-all duration-500 ease-out flex-shrink-0">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-1 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <Clock className="w-3 h-3 text-primaryOrange"/> {course.duration}
                    </div>
                  </div>
                  <div className="p-5 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-primaryOrange font-bold bg-primaryOrange/10 px-2 py-0.5 rounded group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 inline-block">{course.level}</span>
                      <span className="text-xs text-[#94a3b8]">{course.lectures} lectures</span>
                    </div>
                    <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-primaryOrange transition-colors h-12">{course.title}</h3>
                    <p className="text-sm text-[#94a3b8] mb-4">{course.trainer_name}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300"/>
                        <span className="text-sm font-bold text-white">{course.rating}</span>
                        <span className="text-xs text-[#94a3b8]">({course.students})</span>
                      </div>
                      <button className="text-xs font-semibold text-primaryOrange hover:text-white hover:bg-primaryOrange px-3 py-1.5 rounded-lg border border-primaryOrange/30 hover:border-primaryOrange transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-0 hover:shadow-[0_10px_20px_rgba(240,89,31,0.3)]">
                        Enroll
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Success Stats - Modern 3D Cards */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Trusted by learners globally</h2>
              <p className="text-sm text-[#94a3b8] mt-2">Real numbers, real impact.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
              {[
                { number: '25M+', label: 'Active Learners', icon: Users2, color: 'from-blue-500/20 to-transparent' },
                { number: '1,800+', label: 'Expert Courses', icon: BookOpen, color: 'from-primaryOrange/20 to-transparent' },
                { number: '75+', label: 'Languages', icon: Globe, color: 'from-green-500/20 to-transparent' },
                { number: '85%', label: 'Career Impact', icon: TrendingUp, color: 'from-purple-500/20 to-transparent' },
              ].map((stat) => {
                const IconComp = stat.icon;
                return (
                  <div key={stat.label} className="relative p-5 sm:p-6 rounded-2xl bg-[#0f172a] border border-white/5 group cursor-default hover:scale-110 hover:-translate-y-6 hover:rotate-2 hover:shadow-[0_25px_50px_-12px_rgba(240,89,31,0.3)] transition-all duration-500 ease-out overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                    <div className="relative z-10 text-left">
                      <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-primaryOrange text-white/60 group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-150 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(240,89,31,0.4)]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="text-3xl font-extrabold text-white mb-1 group-hover:text-primaryOrange transition-colors duration-300">{stat.number}</div>
                      <div className="text-sm text-[#94a3b8] font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructor CTA - Glassmorphism & 3D */}
          <div className="relative mb-16 rounded-3xl overflow-hidden border border-white/5 bg-[#0f172a] shadow-2xl hover:scale-[1.01] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.2)] transition-all duration-500 group/main">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primaryOrange/10 rounded-full blur-3xl pointer-events-none group-hover/main:opacity-80 transition-opacity"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primaryOrange/5 rounded-full blur-3xl pointer-events-none group-hover/main:opacity-80 transition-opacity"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 sm:gap-10 p-5 sm:p-8 md:p-12 items-center">
              <div className="space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primaryOrange/10 border border-primaryOrange/20 text-primaryOrange text-xs font-bold uppercase tracking-widest hover:scale-110 hover:rotate-3 transition-transform duration-300 cursor-default">
                  <Crown className="w-3.5 h-3.5" /> Become an Instructor
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Teach what you <span className="text-primaryOrange">love</span>
                </h2>
                <p className="text-[#94a3b8] text-base leading-relaxed">
                  Share your expertise with millions of learners worldwide. Join our community of instructors and earn money doing what you enjoy.
                </p>
                <button className="px-6 py-3 bg-primaryOrange rounded-xl text-white font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-primaryOrange/20 hover:scale-110 hover:-translate-y-1 active:scale-95 active:translate-y-0 hover:shadow-[0_10px_20px_rgba(240,89,31,0.3)] group/btn flex items-center gap-2 w-fit">
                  Start Teaching Today <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"/>
                </button>
              </div>
              
              <div className="relative flex justify-center items-center py-6">
                {/* Floating 3D Elements */}
                <div className="absolute w-24 h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center animate-bounce shadow-xl group-hover/main:scale-125 group-hover/main:rotate-12 transition-transform duration-500" style={{ animationDuration: '3s' }}>
                  <Video className="w-8 h-8 text-primaryOrange group-hover/main:scale-110 transition-transform"/>
                </div>
                <div className="absolute top-0 right-8 w-16 h-16 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center animate-bounce shadow-xl group-hover/main:scale-125 group-hover/main:-rotate-12 transition-transform duration-500" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                  <Mic className="w-6 h-6 text-blue-400"/>
                </div>
                <div className="absolute bottom-0 left-8 w-20 h-20 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center animate-bounce shadow-xl group-hover/main:scale-125 group-hover/main:rotate-6 transition-transform duration-500" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                  <Palette className="w-7 h-7 text-green-400"/>
                </div>
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primaryOrange/20 to-transparent border border-primaryOrange/20 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover/main:scale-110 group-hover/main:rotate-6 transition-transform duration-500">
                  <span className="text-2xl font-black text-white">5K+</span>
                </div>
                <p className="absolute -bottom-4 text-sm text-[#94a3b8] font-medium">Active Instructors</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
