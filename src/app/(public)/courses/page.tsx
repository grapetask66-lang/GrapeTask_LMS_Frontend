'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { coursesApi } from '@/services/api';
import {
  Search,
  Star,
  Users,
  ArrowRight,
  CheckCircle2,
  Filter,
  ChevronDown
} from 'lucide-react';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    level: 'All',
    category: 'All',
    sort: 'Most Popular',
    search: '',
  });

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const data = await coursesApi.getAll(filters);
      setCourses(data || []);
      setLoading(false);
    };
    fetchCourses();
  }, [filters]);

  const levels = ['All', 'School', 'College', 'University', 'Individual'];
  const categories = ['All', 'Web Dev', 'Design', 'Marketing', 'Video', 'AI', 'Business', 'Writing'];
  const sortOptions = ['Most Popular', 'Newest', 'Top Rated'];

  return (
    <div className="relative min-h-screen">
      {/* Full-width Hero Background */}
      <div className="absolute top-0 inset-x-0 h-[600px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010411]/40 via-[#010411]/80 to-[#010411]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primaryOrange/30 blur-[150px] rounded-full" />
      </div>

      <div className="pt-40 pb-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-24 space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm">
              <Star className="w-3.5 h-3.5" /> Premium Catalog
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
              Master the Skills that <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryOrange to-[#ff7a45]">Drive Careers Forward</span>
            </h1>
            <p className="text-xl text-[#a1a1aa] mx-auto font-medium leading-relaxed">
              Explore practical, level-based courses taught by verified industry experts. Built to get you certified and earning immediately.
            </p>
          </div>

        {/* Filter Bar */}
        <div className="mb-12 p-8 rounded-3xl bg-cardBg border border-lightBorder space-y-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-full md:flex-grow">
              <input
                type="text"
                placeholder="Search for courses (e.g. Web Development)..."
                className="w-full bg-[#010411] border border-lightBorder rounded-2xl py-5 px-8 text-white focus:outline-none focus:border-primaryOrange transition-all focus:ring-4 focus:ring-primaryOrange/10 text-lg"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              />
              <Search className="absolute right-8 top-1/2 -translate-y-1/2 text-bodyGrayText w-6 h-6" />
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <label className="text-sm text-mediumGrayTitle whitespace-nowrap">Sort By:</label>
              <select
                className="bg-[#010411] border border-lightBorder rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primaryOrange text-sm w-full md:w-48 [&>option]:bg-[#1a1c23] [&>option]:text-white"
                value={filters.sort}
                onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
              >
                {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-darkGrayNumber font-bold">Level</span>
              <div className="flex flex-wrap gap-2">
                {levels.map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setFilters({ ...filters, level: lvl })}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${filters.level === lvl
                      ? 'bg-primaryOrange text-white'
                      : 'bg-cardBg text-bodyGrayText border border-lightBorder hover:border-mediumBorder'
                      }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-darkGrayNumber font-bold">Category</span>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilters({ ...filters, category: cat })}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${filters.category === cat
                      ? 'bg-primaryOrange text-white'
                      : 'bg-cardBg text-bodyGrayText border border-lightBorder hover:border-mediumBorder'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
              <div key={n} className="theme-card h-96 rounded-3xl animate-pulse bg-cardBgActive/10" />
            ))}
          </div>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course: any) => (
              <Link href={`/courses/${course.id}`} key={course.id} className="theme-card rounded-3xl overflow-hidden flex flex-col group block hover:scale-[1.02] transition-transform">
                <div className="aspect-video bg-cardBgActive relative overflow-hidden">
                  {course.thumbnail ? (
                    <img src={course.thumbnail} alt={course.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60" />
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-lg glass-navbar text-[10px] font-bold text-primaryOrange uppercase tracking-wider z-10">
                    {course.level || 'All Levels'}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-black/40 backdrop-blur-sm z-20">
                    <div className="px-5 py-2 bg-primaryOrange text-white text-xs font-black rounded-full shadow-lg">View Course</div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col space-y-5">
                  <div className="flex items-center space-x-2 text-sm text-mediumGrayTitle font-medium">
                    <div className="w-6 h-6 rounded-full orange-gradient flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span>{course.trainer_name || course.trainer || 'Verified Trainer'}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primaryOrange transition-colors line-clamp-2 leading-tight">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primaryOrange fill-primaryOrange" />
                      <span className="text-base font-bold text-white">{course.rating || '4.8'}</span>
                      <span className="text-xs text-darkGrayNumber font-medium">({course.total_students || course.students || '1.2k'})</span>
                    </div>
                    <div className="group flex items-center space-x-1 text-sm font-black text-primaryOrange uppercase tracking-wider">
                      <span>Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 space-y-4">
            <div className="text-6xl">🔍</div>
            <h3 className="text-2xl font-bold text-white">No courses found</h3>
            <p className="text-bodyGrayText">Try adjusting your filters or search terms.</p>
            <button
              onClick={() => setFilters({ level: 'All', category: 'All', sort: 'Most Popular', search: '' })}
              className="px-6 py-2 bg-primaryOrange rounded-xl text-white font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Comparison Section */}
        <div className="mt-32 p-12 md:p-20 rounded-[3rem] bg-cardBg border border-lightBorder relative overflow-hidden">
          <div className="absolute -left-20 top-0 w-64 h-64 secondary-glow opacity-10" />
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Our Courses Are Different</h2>
              <p className="text-bodyGrayText">Most online courses give you a video and a certificate. GrapeTask LMS gives you a complete learning system.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Every video is followed by a structured assessment',
                'You cannot skip ahead without passing each test',
                'Your trainer reviews every submission personally',
                'You graduate with a certificate backed by real verified performance'
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-6 h-6 rounded-full bg-primaryOrange/20 border border-orangeBorderActive flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primaryOrange" />
                  </div>
                  <p className="text-white font-medium">{item}</p>
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
