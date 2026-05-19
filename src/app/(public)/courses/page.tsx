'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { coursesApi } from '@/services/api';
import {
  Search,
  Star,
  Users,
  ArrowRight,
  CheckCircle2,
  Filter,
  ChevronDown,
  Play,
  Pause
} from 'lucide-react';

const MOCK_COURSES = [
  { id: 1, title: 'Advanced Web Development', level: 'University', trainer_name: 'Ikram Tech', students: '2.4k', rating: '4.9', total_students: '2.4k', thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Graphic Design Mastery', level: 'College', trainer_name: 'Qavi Arts', students: '1.8k', rating: '4.8', total_students: '1.8k', thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80' },
  { id: 3, title: 'Digital Marketing Pro', level: 'Individual', trainer_name: 'Market Experts', students: '3.1k', rating: '4.7', total_students: '3.1k', thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=80' },
  { id: 4, title: 'AI for Beginners', level: 'School', trainer_name: 'Future Academy', students: '900', rating: '4.9', total_students: '900', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80' },
  { id: 5, title: 'UI/UX Design Essentials', level: 'College', trainer_name: 'Design Experts', students: '1.5k', rating: '4.8', total_students: '1.5k', thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&auto=format&fit=crop&q=80' },
  { id: 6, title: 'Python Programming Masterclass', level: 'University', trainer_name: 'Code Academy', students: '2.9k', rating: '4.9', total_students: '2.9k', thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&auto=format&fit=crop&q=80' },
  { id: 7, title: 'Video Editing Pro (Premiere/After Effects)', level: 'Individual', trainer_name: 'Visual Arts', students: '2.1k', rating: '4.8', total_students: '2.1k', thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80' },
  { id: 8, title: 'E-Commerce Business Blueprint', level: 'Individual', trainer_name: 'Commerce Experts', students: '1.2k', rating: '4.6', total_students: '1.2k', thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80' },
];

const CoursesPage = () => {
  // Pre-seed with mock courses so page loads INSTANTLY without waiting for API timeouts
  const [courses, setCourses] = useState(MOCK_COURSES);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
      // Keep loading false on initial render to prevent blank layouts, then fetch
      const data = await coursesApi.getAll(filters);
      if (data && data.length > 0) {
        setCourses(data);
      } else if (filters.search || filters.level !== 'All' || filters.category !== 'All') {
        // Only empty list if user is actively searching/filtering and nothing matches
        setCourses([]);
      } else {
        // Fall back to robust mock data if offline or network fails
        setCourses(MOCK_COURSES);
      }
    };
    fetchCourses();
  }, [filters]);

  const levels = ['All', 'School', 'College', 'University', 'Individual'];
  const categories = ['All', 'Web Dev', 'Design', 'Marketing', 'Video', 'AI', 'Business', 'Writing'];
  const sortOptions = ['Most Popular', 'Newest', 'Top Rated'];

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
          <source src="/videos/Master the Skills that Drive CareersForward.mp4" type="video/mp4" />
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
              <Star className="w-3.5 h-3.5" /> Premium Catalog
            </div>
            {/* Slightly smaller text with 3D styled header */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight text-3d">
              Master the Skills that <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryOrange to-[#ff7a45] text-3d-orange">Drive Careers Forward</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#a1a1aa] mx-auto font-medium leading-relaxed max-w-2xl">
              Explore practical, level-based courses taught by verified industry experts. Built to get you certified and earning immediately.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="mb-12 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-cardBg border border-lightBorder space-y-6 sm:space-y-8 backdrop-blur-md">
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
              <div className="relative w-full md:flex-grow">
                <input
                  type="text"
                  placeholder="Search for courses (e.g. Web Development)..."
                  className="w-full bg-[#020617]/90 border border-lightBorder rounded-xl sm:rounded-2xl py-4 sm:py-5 px-6 sm:px-8 text-white focus:outline-none focus:border-primaryOrange transition-all focus:ring-4 focus:ring-primaryOrange/10 text-base sm:text-lg"
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
                <Search className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 text-bodyGrayText w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 w-full md:w-auto">
                <label className="text-xs sm:text-sm text-mediumGrayTitle whitespace-nowrap">Sort By:</label>
                <select
                  className="bg-[#020617] border border-lightBorder rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primaryOrange text-xs sm:text-sm w-full md:w-48 [&>option]:bg-[#111827] [&>option]:text-white"
                  value={filters.sort}
                  onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                >
                  {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-darkGrayNumber font-extrabold">Level</span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {levels.map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setFilters({ ...filters, level: lvl })}
                      className={`px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all ${filters.level === lvl
                          ? 'bg-primaryOrange text-white shadow-md shadow-primaryOrange/25'
                          : 'bg-cardBg text-[#a1a1aa] border border-lightBorder hover:border-mediumBorder hover:text-white'
                        }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-darkGrayNumber font-extrabold">Category</span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setFilters({ ...filters, category: cat })}
                      className={`px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all ${filters.category === cat
                          ? 'bg-primaryOrange text-white shadow-md shadow-primaryOrange/25'
                          : 'bg-cardBg text-[#a1a1aa] border border-lightBorder hover:border-mediumBorder hover:text-white'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="theme-card h-80 rounded-3xl animate-pulse bg-cardBgActive/10" />
              ))}
            </div>
          ) : courses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {courses.map((course: any) => (
                <Link
                  href={`/courses/${course.id}`}
                  key={course.id}
                  className="theme-card card-3d rounded-[2rem] overflow-hidden flex flex-col group block hover:-translate-y-2.5 hover:shadow-[0_20px_50px_rgba(240,89,31,0.12)] transition-all duration-500"
                >
                  <div className="aspect-video bg-[#020617] relative overflow-hidden">
                    {course.thumbnail ? (
                      <img src={course.thumbnail} alt={course.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60" />
                    )}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg glass-navbar text-[9px] font-black text-primaryOrange uppercase tracking-widest z-10 border border-primaryOrange/20">
                      {course.level || 'All Levels'}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/40 backdrop-blur-sm z-20">
                      <div className="px-4 py-2 bg-primaryOrange text-white text-xs font-black rounded-full shadow-lg">View Course</div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 md:p-8 flex-grow flex flex-col space-y-4">
                    <div className="flex items-center space-x-2 text-xs sm:text-sm text-mediumGrayTitle font-semibold">
                      <div className="w-5 h-5 rounded-full orange-gradient flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      <span>{course.trainer_name || course.trainer || 'Verified Trainer'}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white group-hover:text-primaryOrange transition-colors line-clamp-2 leading-snug tracking-tight">
                      {course.title}
                    </h3>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <div className="flex items-center space-x-1.5">
                        <Star className="w-3.5 h-3.5 text-primaryOrange fill-primaryOrange" />
                        <span className="text-sm font-bold text-white">{course.rating || '4.8'}</span>
                        <span className="text-[10px] text-darkGrayNumber font-extrabold">({course.total_students || course.students || '1.2k'})</span>
                      </div>
                      <div className="group flex items-center space-x-0.5 text-xs font-black text-primaryOrange uppercase tracking-wider">
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 space-y-4 bg-cardBg rounded-[2rem] border border-lightBorder max-w-xl mx-auto">
              <div className="text-5xl">🔍</div>
              <h3 className="text-xl font-bold text-white">No courses found</h3>
              <p className="text-sm text-bodyGrayText px-6">We couldn't find any courses matching your search terms or filters.</p>
              <button
                onClick={() => setFilters({ level: 'All', category: 'All', sort: 'Most Popular', search: '' })}
                className="px-6 py-2.5 bg-primaryOrange rounded-xl text-white font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-md shadow-primaryOrange/20"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Comparison Section */}
          <div className="mt-24 md:mt-32 p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3rem] bg-cardBg border border-lightBorder relative overflow-hidden shadow-2xl">
            <div className="absolute -left-20 top-0 w-64 h-64 secondary-glow opacity-10" />
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 tracking-tight text-3d">
                  How Our Courses Are <span className="text-primaryOrange text-3d-orange">Different</span>
                </h2>
                <p className="text-sm sm:text-base text-[#a1a1aa] font-medium max-w-2xl mx-auto leading-relaxed">
                  Most online courses give you a video and a certificate. GrapeTask LMS gives you a complete learning system connected to active freelance contracts.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[
                  'Every video is followed by a structured assessment',
                  'You cannot skip ahead without passing each test',
                  'Your trainer reviews every submission personally',
                  'You graduate with a certificate backed by real verified performance'
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-5 h-5 rounded-full bg-primaryOrange/20 border border-orangeBorderActive flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primaryOrange" />
                    </div>
                    <p className="text-sm sm:text-base text-[#e4e4e7] font-semibold leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
