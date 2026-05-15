'use client';

import React, { useState, useEffect } from 'react';
import { coursesApi } from '@/services/api';

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
    <div className="pt-40 pb-20 px-6 min-h-screen">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Browse All Courses</h1>
          <p className="text-bodyGrayText max-w-2xl mx-auto">
            Practical, structured, level-based courses taught by verified experts — built to get you certified and earning.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 p-8 rounded-3xl bg-cardBg border border-lightBorder space-y-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-full md:flex-grow">
               <input 
                type="text" 
                placeholder="Search for courses (e.g. Web Development)..."
                className="w-full bg-[#010411] border border-lightBorder rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-primaryOrange transition-colors"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
               />
               <span className="absolute right-6 top-1/2 -translate-y-1/2 text-bodyGrayText">🔍</span>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
               <label className="text-sm text-mediumGrayTitle whitespace-nowrap">Sort By:</label>
               <select 
                className="bg-[#010411] border border-lightBorder rounded-xl py-3 px-4 text-white focus:outline-none focus:border-primaryOrange text-sm w-full md:w-48"
                value={filters.sort}
                onChange={(e) => setFilters({...filters, sort: e.target.value})}
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
                      onClick={() => setFilters({...filters, level: lvl})}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                        filters.level === lvl 
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
                      onClick={() => setFilters({...filters, category: cat})}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                        filters.category === cat 
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
              <div key={course.id} className="theme-card rounded-3xl overflow-hidden flex flex-col group">
                <div className="aspect-video bg-cardBgActive relative overflow-hidden">
                   {/* Placeholder image or course thumbnail */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60" />
                   <div className="absolute top-4 left-4 px-3 py-1 rounded-lg glass-navbar text-[10px] font-bold text-primaryOrange uppercase tracking-wider">
                     {course.level}
                   </div>
                </div>
                <div className="p-6 flex-grow flex flex-col space-y-4">
                  <div className="flex items-center space-x-2 text-xs text-mediumGrayTitle">
                     <div className="w-6 h-6 rounded-full orange-gradient flex items-center justify-center text-[10px] text-white">✓</div>
                     <span>{course.trainer_name || 'Verified Trainer'}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-primaryOrange transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-lightBorder">
                     <div className="flex items-center space-x-1">
                        <span className="text-primaryOrange">⭐</span>
                        <span className="text-sm font-bold text-white">{course.rating || '4.8'}</span>
                        <span className="text-xs text-darkGrayNumber">({course.total_students || '1.2k'})</span>
                     </div>
                     <button className="text-sm font-bold text-primaryOrange hover:underline underline-offset-4">
                        Enroll Now →
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 space-y-4">
             <div className="text-6xl">🔍</div>
             <h3 className="text-2xl font-bold text-white">No courses found</h3>
             <p className="text-bodyGrayText">Try adjusting your filters or search terms.</p>
             <button 
              onClick={() => setFilters({level: 'All', category: 'All', sort: 'Most Popular', search: ''})}
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
  );
};

export default CoursesPage;
