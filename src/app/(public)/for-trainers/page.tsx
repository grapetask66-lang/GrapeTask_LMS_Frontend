import React from 'react';
import Link from 'next/link';

export default function ForTrainersPage() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Share Your Expertise. <br /> Earn While You Teach.</h1>
          <p className="text-xl text-bodyGrayText">Join GrapeTask LMS as a verified trainer and build a sustainable income by teaching practical, career-ready skills.</p>
        </div>

        {/* Who Can Become a Trainer */}
        <Section title="Who Can Become a Trainer?">
          <div className="theme-card p-12 rounded-[3rem] text-center max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-white leading-relaxed">
              GrapeTask LMS welcomes both individual professionals and training institutes.
            </p>
            <p className="text-bodyGrayText text-lg">
              If you have real-world expertise in a skill and the ability to teach it clearly — GrapeTask LMS wants you.
            </p>
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <div className="p-6 rounded-2xl bg-white/5 border border-lightBorder">
                  <h4 className="text-primaryOrange font-bold mb-2">Individual Professionals</h4>
                  <p className="text-sm text-bodyGrayText">Freelancers and industry experts with a proven track record.</p>
               </div>
               <div className="p-6 rounded-2xl bg-white/5 border border-lightBorder">
                  <h4 className="text-primaryOrange font-bold mb-2">Training Institutes</h4>
                  <p className="text-sm text-bodyGrayText">Established academies looking to expand their digital presence.</p>
               </div>
            </div>
          </div>
        </Section>

        {/* Registration Requirements */}
        <Section title="Trainer Registration Requirements" className="bg-[#010411]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <p className="text-bodyGrayText">To apply as a trainer, you must submit:</p>
               <ul className="space-y-4">
                 {['Full Name', 'Professional Portfolio', 'Teaching or Industry Experience', 'Reason for wanting to join GrapeTask'].map((item) => (
                   <li key={item} className="flex items-center space-x-3 text-white">
                      <div className="w-6 h-6 rounded-full bg-primaryOrange flex items-center justify-center text-[10px] font-bold">✓</div>
                      <span>{item}</span>
                   </li>
                 ))}
               </ul>
               <p className="text-sm text-darkGrayNumber italic pt-4">
                 After submission, the GrapeTask team will review your application and get back to you.
               </p>
            </div>
            <div className="theme-card p-10 rounded-[2.5rem] border-primaryOrange/20">
               <div className="text-4xl mb-6">📝</div>
               <h3 className="text-2xl font-bold text-white mb-4">Quality Standards</h3>
               <p className="text-bodyGrayText text-sm leading-relaxed">
                 GrapeTask maintains strict quality standards for all courses. We ensure that every piece of content adds real value to our learners.
               </p>
            </div>
          </div>
        </Section>

        {/* Course Standards */}
        <Section title="Course Creation Standards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'High-End Production',
                desc: 'Videos must be HD quality, recorded on professional equipment (DSLR or iPhone recommended). Clear audio is mandatory.',
                icon: '🎥',
              },
              {
                title: 'Professional Setting',
                desc: 'Recording environment must be clean, professional, and distraction-free to ensure focus.',
                icon: '🏢',
              },
              {
                title: 'Structured Testing',
                desc: 'Every video must include MCQs, a quiz, a written summary, and a practical assignment.',
                icon: '📝',
              },
            ].map((std) => (
              <div key={std.title} className="theme-card p-8 rounded-3xl space-y-4">
                 <div className="text-3xl">{std.icon}</div>
                 <h4 className="text-xl font-bold text-white">{std.title}</h4>
                 <p className="text-bodyGrayText text-sm leading-relaxed">{std.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Revenue Model */}
        <Section title="Revenue Model" className="bg-[#010411]">
          <div className="p-12 md:p-20 rounded-[3rem] bg-cardBg border border-orangeBorderActive/40 relative overflow-hidden text-center space-y-8">
            <div className="absolute -left-20 top-0 w-64 h-64 secondary-glow opacity-10" />
            <h2 className="text-5xl md:text-7xl font-bold text-white">70 / 30 <span className="text-primaryOrange">Split</span></h2>
            <div className="max-w-2xl mx-auto space-y-4">
               <p className="text-2xl text-white font-medium">70% of all course revenue goes directly to trainers.</p>
               <p className="text-bodyGrayText">GrapeTask retains 30% for platform operations, review, and management. Fair. Simple. Transparent.</p>
            </div>
            <div className="pt-8">
               <div className="inline-flex items-center space-x-6 px-8 py-4 rounded-2xl glass-navbar border border-lightBorder">
                  <div className="text-left">
                     <div className="text-xs text-darkGrayNumber uppercase font-bold">Trainer</div>
                     <div className="text-2xl font-bold text-primaryOrange">70%</div>
                  </div>
                  <div className="w-px h-10 bg-lightBorder" />
                  <div className="text-left">
                     <div className="text-xs text-darkGrayNumber uppercase font-bold">GrapeTask</div>
                     <div className="text-2xl font-bold text-white">30%</div>
                  </div>
               </div>
            </div>
          </div>
        </Section>

        {/* Trainer Tools */}
        <Section title="Trainer Tools">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Personal Dashboard', 'Student Notifications', 'Review Tools', 
              'One-on-one Chat', 'Weekly Q&A Hosting', 'Automated Reports', 
              'Community Access', 'Earnings Tracking'
            ].map((tool) => (
              <div key={tool} className="p-6 rounded-2xl bg-cardBg border border-lightBorder text-center hover:border-primaryOrange transition-all cursor-default">
                 <div className="text-sm font-semibold text-white">{tool}</div>
              </div>
            ))}
          </div>
        </Section>

        <div className="text-center mt-20">
          <Link
            href="/register?role=trainer"
            className="inline-block px-12 py-5 bg-primaryOrange hover:bg-opacity-90 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-primaryOrange/20 transition-all hover:scale-105 active:scale-95"
          >
            Apply as a Trainer Today →
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`py-20 md:py-32 -mx-6 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
}
