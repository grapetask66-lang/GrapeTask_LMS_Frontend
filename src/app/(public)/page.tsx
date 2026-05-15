import React from 'react';
import Link from 'next/link';
import { coursesApi } from '@/services/api';

// Reusable Section Component
const Section = ({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-20 md:py-32 px-6 ${className}`}>
    <div className="container mx-auto">
      {children}
    </div>
  </section>
);

export default async function HomePage() {
  const trendingCourses = await coursesApi.getTrending();
  
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Section className="relative pt-40 md:pt-56 pb-20 md:pb-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 secondary-glow opacity-30 animate-pulse" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 secondary-glow opacity-20 animate-pulse delay-700" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cardBg border border-lightBorder text-sm font-medium text-primaryOrange mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primaryOrange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primaryOrange"></span>
            </span>
            <span>Pakistan's #1 Skill-to-Earn Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
            Learn Skills. <span className="text-primaryOrange">Get Certified.</span> <br /> 
            <span className="text-gradient">Start Earning.</span>
          </h1>
          
          <p className="text-xl text-bodyGrayText max-w-2xl mx-auto leading-relaxed">
            GrapeTask LMS is Pakistan's first skill-based learning platform directly connected to a live freelance marketplace. Learn from experts, earn a verified certificate, and start working immediately.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <Link
              href="/courses"
              className="w-full sm:w-auto px-10 py-4 bg-primaryOrange hover:bg-opacity-90 text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primaryOrange/20"
            >
              Explore Courses →
            </Link>
            <Link
              href="/for-institutions"
              className="w-full sm:w-auto px-10 py-4 bg-cardBg hover:bg-cardBgActive border border-lightBorder text-white font-bold rounded-2xl transition-all hover:scale-105 active:scale-95"
            >
              For Institutions
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-24 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-3xl bg-cardBg border border-lightBorder backdrop-blur-md">
          {[
            { label: 'Learners', value: '50K+' },
            { label: 'Courses', value: '1.2K+' },
            { label: 'Satisfaction', value: '98%' },
            { label: 'Active Users', value: '4K+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-bodyGrayText uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Feature Highlights */}
      <Section className="bg-[#010411]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Expert Trainers',
              desc: 'Learn from verified professionals and certified institutes who are handpicked by the GrapeTask team.',
              icon: '🎓',
            },
            {
              title: 'Flexible Learning',
              desc: 'Study anytime, anywhere, at your own pace — with HD video courses designed for your level.',
              icon: '📱',
            },
            {
              title: 'Launch Your Career',
              desc: 'Complete your course, earn your certificate, and start freelancing on GrapeTask immediately.',
              icon: '🚀',
            },
          ].map((feature) => (
            <div key={feature.title} className="theme-card p-10 rounded-[2.5rem] space-y-6">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              <p className="text-bodyGrayText leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why GrapeTask Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 secondary-glow opacity-20" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Why <span className="text-primaryOrange">GrapeTask LMS?</span> <br />
              <span className="text-gradient italic">Skills That Pay — Literally.</span>
            </h2>
            <div className="space-y-6 text-lg text-bodyGrayText leading-relaxed">
              <p>
                GrapeTask LMS is not just another online learning platform. It is a complete pipeline from learning to earning.
              </p>
              <p>
                Once you complete your course and pass your assessments, you receive a <span className="text-white font-semibold underline decoration-primaryOrange underline-offset-4">GrapeTask LMS Certified badge</span> — and you can immediately create your profile and start getting paid on the GrapeTask freelance marketplace.
              </p>
              <p className="text-white font-medium">
                No wasted time. No gap between learning and earning.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/how-it-works" className="text-primaryOrange font-bold flex items-center space-x-2 group">
                <span>See how it works</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-[3rem] bg-cardBg border border-lightBorder relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primaryOrange/10 to-transparent opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 orange-gradient rounded-full flex items-center justify-center animate-pulse shadow-2xl shadow-primaryOrange/40">
                     <span className="text-4xl">🏅</span>
                  </div>
                </div>
                {/* Badge Details Mockup */}
                <div className="absolute bottom-10 left-10 right-10 p-6 rounded-2xl glass-navbar border border-orangeBorderActive animate-fade-in">
                   <div className="text-sm font-bold text-primaryOrange mb-1 uppercase tracking-widest">Verified Credential</div>
                   <div className="text-xl font-bold text-white">GrapeTask LMS Certified</div>
                   <div className="text-xs text-bodyGrayText mt-2 italic">Directly linked to your freelancer profile</div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Trending Courses Section */}
      <Section className="bg-[#010411]">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">Trending Courses</h2>
          <p className="text-bodyGrayText">Handpicked by our experts — the courses everyone is enrolling in right now.</p>
          <div className="flex justify-center space-x-6 pt-4">
             {['Most Popular', 'Weekly Spotlight', 'In-Demand AI Skills'].map(cat => (
               <span key={cat} className="text-xs font-bold text-darkGrayNumber uppercase tracking-widest">{cat}</span>
             ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {(trendingCourses && trendingCourses.length > 0 ? trendingCourses : [
            { id: 1, title: 'Advanced Web Development', level: 'University', trainer: 'Ikram Tech', students: '2.4k' },
            { id: 2, title: 'Graphic Design Mastery', level: 'College', trainer: 'Qavi Arts', students: '1.8k' },
            { id: 3, title: 'Digital Marketing Pro', level: 'Individual', trainer: 'Market Experts', students: '3.1k' },
            { id: 4, title: 'AI for Beginners', level: 'School', trainer: 'Future Academy', students: '900' },
          ]).map((course: any) => (
            <div key={course.id} className="theme-card p-6 rounded-3xl space-y-4 group">
               <div className="aspect-video bg-white/5 rounded-2xl mb-4 relative overflow-hidden">
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-md glass-navbar text-[8px] font-bold text-primaryOrange uppercase">{course.level}</div>
               </div>
               <h4 className="text-white font-bold group-hover:text-primaryOrange transition-colors">{course.title}</h4>
               <div className="flex justify-between items-center text-[10px] text-bodyGrayText">
                  <span>{course.trainer}</span>
                  <span>{course.students} Learners</span>
               </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
           <Link href="/courses" className="text-sm font-bold text-primaryOrange hover:underline underline-offset-4">Explore all courses →</Link>
        </div>
      </Section>
      <Section className="bg-[#010411]">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">Explore Careers</h2>
          <p className="text-bodyGrayText max-w-2xl mx-auto">
            Discover the skills and technologies behind in-demand professional roles.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            'Web Developer', 'Graphic Designer', 'Data Analyst', 
            'Video Editor', 'Digital Marketer', 'Content Creator'
          ].map((career) => (
            <Link key={career} href="/courses" className="theme-card p-6 rounded-2xl text-center group">
               <div className="text-sm font-semibold text-white mb-4 group-hover:text-primaryOrange transition-colors">{career}</div>
               <div className="text-[10px] text-bodyGrayText uppercase tracking-widest group-hover:text-white transition-colors">Learn Skills →</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Freelancing Stats Section */}
      <Section>
        <div className="p-12 md:p-20 rounded-[3rem] bg-cardBg border border-lightBorder relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 secondary-glow opacity-10" />
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-white mb-4">Freelancing By The Numbers</h2>
             <p className="text-bodyGrayText">The global shift towards independent work is here.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
             <div className="space-y-2">
                <div className="text-5xl font-bold text-white">1.57B</div>
                <div className="text-bodyGrayText">Freelancers Worldwide</div>
             </div>
             <div className="space-y-2">
                <div className="text-5xl font-bold text-white">46.7%</div>
                <div className="text-bodyGrayText">Global Workforce is Freelancing</div>
             </div>
             <div className="space-y-2">
                <div className="text-5xl font-bold text-white">$16.5B</div>
                <div className="text-bodyGrayText">Market Size by 2030</div>
             </div>
          </div>
          <div className="mt-16 pt-12 border-t border-lightBorder grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
             <div className="flex flex-col items-center md:items-start space-y-4">
                <div className="text-3xl font-bold text-white">4K+ GrapeTask Users</div>
                <p className="text-bodyGrayText">Join the fastest growing freelance community in Pakistan.</p>
             </div>
             <div className="flex justify-center md:justify-end">
                <div className="px-8 py-4 bg-primaryOrange/10 border border-orangeBorderActive rounded-2xl text-primaryOrange font-bold animate-pulse">
                   87% Growth Rate
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* FAQ Preview Section */}
      <Section className="bg-[#010411]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-bodyGrayText">Got questions? We've got answers.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Is GrapeTask LMS accredited and are certificates recognized?',
                a: 'GrapeTask LMS certificates are issued after structured assessments reviewed by verified trainers. Every certified learner receives a badge displayed on their GrapeTask marketplace profile, which clients can see when hiring.'
              },
              {
                q: 'Is a GrapeTask certificate worth it?',
                a: 'Absolutely. Unlike most platforms, your GrapeTask certificate is directly linked to your freelance profile. Clients can see your certification date and skills, which significantly increases your chances of getting hired.'
              },
              {
                q: 'Does GrapeTask offer free courses?',
                a: 'GrapeTask LMS offers a variety of courses across multiple price ranges. Individual learners can browse available courses and enroll based on their budget and goals.'
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-2xl bg-cardBg border border-lightBorder">
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-bodyGrayText leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center pt-8">
            <Link href="/faq" className="px-8 py-3 bg-cardBg hover:bg-cardBgActive border border-lightBorder rounded-xl text-white font-semibold transition-all">
              View All FAQs
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="relative pt-0">
        <div className="p-12 md:p-24 rounded-[4rem] orange-gradient relative overflow-hidden shadow-2xl shadow-primaryOrange/20">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl" />
          <div className="relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to Start Your <br /> Earning Journey?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of learners who are already building their careers on Pakistan's first skill-to-earn platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/register" className="w-full sm:w-auto px-12 py-5 bg-white text-primaryOrange font-bold text-lg rounded-2xl shadow-xl hover:scale-105 transition-all">
                Join Now for Free
              </Link>
              <Link href="/courses" className="w-full sm:w-auto px-12 py-5 bg-black/20 text-white font-bold text-lg rounded-2xl border border-white/20 hover:bg-black/30 transition-all">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
