import React from 'react';
import Link from 'next/link';

export default function ForLearnersPage() {
  const learnerTypes = [
    {
      title: 'School Students',
      desc: 'Courses are designed with beginner-friendly explanations, simple examples, and step-by-step guidance. Perfect for students who are just starting to explore digital skills.',
      icon: '📚',
    },
    {
      title: 'College Students',
      desc: 'Intermediate-level courses that go beyond basics. Learn how to apply skills practically, build real projects, and develop professional habits early.',
      icon: '🎓',
    },
    {
      title: 'University Students',
      desc: 'Advanced professional courses designed to match industry standards. Ideal for students preparing to enter the job market or launch a freelance career.',
      icon: '🏛️',
    },
    {
      title: 'Individual Learners',
      desc: 'Not enrolled in a school or university? No problem. GrapeTask LMS is open to anyone who wants to learn. Browse all available courses, enroll at your own pace, and earn your certificate.',
      icon: '👤',
    },
  ];

  const benefits = [
    'Level-appropriate courses designed specifically for your educational background',
    'HD video lessons from verified expert trainers',
    'Structured assessments after every video — MCQs, quizzes, summaries, and practicals',
    'Direct communication with your trainer through built-in chat',
    'Weekly live Q&A sessions hosted by trainers',
    'Access to the global GrapeTask LMS community group',
    'An official GrapeTask LMS Certified badge upon completion',
    'Immediate access to the GrapeTask freelance marketplace after certification',
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Start Your Learning Journey Today</h1>
          <p className="text-xl text-bodyGrayText">Whether you are a school student, university graduate, or self-motivated individual — GrapeTask LMS has a learning path built for you.</p>
        </div>

        {/* Learner Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {learnerTypes.map((type) => (
            <div key={type.title} className="theme-card p-10 rounded-[2.5rem] space-y-6">
              <div className="text-4xl">{type.icon}</div>
              <h3 className="text-2xl font-bold text-white">{type.title}</h3>
              <p className="text-bodyGrayText leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* What You Get */}
        <div className="p-12 md:p-20 rounded-[3rem] bg-cardBg border border-lightBorder relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-64 h-64 secondary-glow opacity-10" />
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What You Get as a Learner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-primaryOrange font-bold flex-shrink-0">✅</div>
                <p className="text-bodyGrayText">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Badge Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
           <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white leading-tight">Your Certification Badge</h2>
              <p className="text-lg text-bodyGrayText leading-relaxed">
                Once you complete your course and pass all assessments, your GrapeTask profile will display a verified badge that tells every client you have been trained, tested, and certified.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-white font-semibold">
                   <span className="text-2xl">🏅</span>
                   <span>GrapeTask LMS Certified</span>
                </div>
                <div className="flex items-center space-x-4 text-mediumGrayTitle">
                   <span className="text-2xl">📅</span>
                   <span>Certification Date Displayed</span>
                </div>
                <div className="flex items-center space-x-4 text-mediumGrayTitle">
                   <span className="text-2xl">⭐</span>
                   <span>Skill Verified by Trainer</span>
                </div>
              </div>
           </div>
           <div className="relative">
              <div className="aspect-square rounded-[3rem] bg-cardBg border border-orangeBorderActive/20 flex items-center justify-center">
                 <div className="text-center space-y-4 animate-pulse">
                    <div className="w-40 h-40 orange-gradient rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-primaryOrange/40">
                       <span className="text-6xl">🏅</span>
                    </div>
                    <div className="text-2xl font-bold text-white">VERIFIED</div>
                 </div>
              </div>
           </div>
        </div>

        <div className="text-center">
          <Link
            href="/courses"
            className="inline-block px-12 py-5 bg-primaryOrange hover:bg-opacity-90 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-primaryOrange/20 transition-all hover:scale-105 active:scale-95"
          >
            Ready to start? Browse Courses →
          </Link>
        </div>
      </div>
    </div>
  );
}
