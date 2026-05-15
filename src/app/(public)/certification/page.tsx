import React from 'react';
import Link from 'next/link';

export default function CertificationPage() {
  const details = [
    { title: 'Official Badge', desc: 'A verified GrapeTask LMS Certified Badge on your profile.', icon: '🏅' },
    { title: 'Your Full Name', desc: 'Displaying your professional name as registered.', icon: '📛' },
    { title: 'Skill Category', desc: 'The specific course name and skill category you mastered.', icon: '📚' },
    { title: 'Certification Date', desc: 'The exact date you completed all assessments.', icon: '📅' },
    { title: 'Trainer Verified', desc: 'Status showing you were reviewed by a real professional.', icon: '✅' },
  ];

  const steps = [
    'Complete all course videos in order',
    'Pass every post-video assessment (MCQs, quiz, summary, practical)',
    'Pass the final comprehensive exam',
    'Receive a passing recommendation from your trainer',
    'Your certificate and badge are automatically added to your profile'
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">The GrapeTask LMS Certificate</h1>
          <p className="text-xl text-bodyGrayText">Proof That You're Ready to Earn. Not just a PDF, but a marketplace-connected credential.</p>
        </div>

        {/* What is it? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
           <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">What Is the GrapeTask LMS Certificate?</h2>
              <div className="space-y-6 text-lg text-bodyGrayText leading-relaxed">
                 <p>
                   The GrapeTask LMS Certificate is awarded to learners who successfully complete all course videos, pass every progressive assessment, and receive a passing recommendation from their trainer.
                 </p>
                 <p className="p-6 rounded-2xl glass-navbar border border-orangeBorderActive/20 text-white font-medium italic">
                   "This is not an automated certificate. It is earned through structured testing, trainer review, and demonstrated practical skill."
                 </p>
              </div>
           </div>
           <div className="theme-card p-12 rounded-[3rem] border-primaryOrange/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 orange-gradient rounded-full blur-3xl opacity-20" />
              <div className="space-y-8 relative z-10">
                 <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 orange-gradient rounded-2xl flex items-center justify-center text-3xl">🏅</div>
                    <div>
                       <div className="text-sm font-bold text-primaryOrange uppercase tracking-widest">GrapeTask Certified</div>
                       <div className="text-xl font-bold text-white">Skill Verification</div>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="h-2 w-full bg-lightBorder rounded-full overflow-hidden">
                       <div className="h-full w-[85%] orange-gradient" />
                    </div>
                    <div className="flex justify-between text-xs font-bold text-darkGrayNumber uppercase">
                       <span>Training Progress</span>
                       <span>85% Verified</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* What it includes */}
        <div className="mb-32">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">What the Certificate Includes</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {details.map((item) => (
                <div key={item.title} className="theme-card p-8 rounded-3xl text-center space-y-4 hover:border-primaryOrange transition-colors">
                   <div className="text-3xl">{item.icon}</div>
                   <h4 className="text-sm font-bold text-white uppercase tracking-wider">{item.title}</h4>
                   <p className="text-xs text-bodyGrayText leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Marketplace Section */}
        <div className="p-12 md:p-20 rounded-[3rem] bg-cardBg border border-lightBorder relative overflow-hidden mb-32">
           <div className="absolute bottom-0 left-0 w-64 h-64 secondary-glow opacity-10" />
           <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <h2 className="text-3xl font-bold text-white">Certificate on Your Marketplace Profile</h2>
                 <p className="text-bodyGrayText leading-relaxed">
                   Once certified, your GrapeTask freelance profile will display the "GrapeTask LMS Certified" badge. Clients browsing the marketplace can see this badge — and studies consistently show that verified credentials significantly increase hiring rates.
                 </p>
              </div>
              <div className="space-y-4">
                 {['Badge Displayed', 'Certification Date', 'Verified Skills'].map((check) => (
                   <div key={check} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-lightBorder">
                      <div className="text-primaryOrange font-bold">✓</div>
                      <span className="text-white font-medium">{check}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* How to Earn */}
        <div className="max-w-3xl mx-auto space-y-12 mb-32">
           <h2 className="text-3xl font-bold text-white text-center">How to Earn Your Certificate</h2>
           <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center space-x-6 p-6 rounded-2xl bg-cardBg border border-lightBorder group hover:border-primaryOrange transition-all">
                   <div className="w-8 h-8 rounded-full bg-lightBorder group-hover:bg-primaryOrange flex items-center justify-center text-xs font-bold text-white transition-colors">
                      {i + 1}
                   </div>
                   <p className="text-white font-medium">{step}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="text-center">
          <Link
            href="/courses"
            className="inline-block px-12 py-5 bg-primaryOrange hover:bg-opacity-90 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-primaryOrange/20 transition-all hover:scale-105 active:scale-95"
          >
            Start a Course Today →
          </Link>
        </div>
      </div>
    </div>
  );
}
