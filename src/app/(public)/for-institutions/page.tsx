import React from 'react';
import Link from 'next/link';

export default function ForInstitutionsPage() {
  const steps = [
    'Institution signs a partnership agreement with GrapeTask LMS.',
    'Institution pays a per-student monthly fee based on their student level.',
    'GrapeTask provides the institution with a dedicated management portal.',
    'The institution head assigns courses and distributes login credentials.',
    'Trainers submit weekly or bi-weekly progress reports for every student.',
    'The institution head can forward reports to parents.'
  ];

  const pricing = [
    { level: 'School Students', price: 'PKR 200', desc: 'Beginner-friendly content' },
    { level: 'College Students', price: 'PKR 300', desc: 'Intermediate practical content' },
    { level: 'University Students', price: 'PKR 500', desc: 'Advanced professional content' },
  ];

  const portalFeatures = [
    { title: 'Institute Group', desc: 'All students and trainers in one collaborative group' },
    { title: 'Class-Based Groups', desc: 'Separate groups for each class with specific trainers' },
    { title: 'Progress Reports', desc: 'Weekly reports per student submitted by trainers' },
    { title: 'Automated System', desc: 'GrapeTask-branded reports generated with one click' },
    { title: 'Communication Room', desc: 'Direct channel between institution head and trainers' },
    { title: 'Course Management', desc: 'Assign specific courses to specific student groups' },
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Bring World-Class Skill Training to Your Institution</h1>
          <p className="text-xl text-bodyGrayText">Schools, colleges, and universities across Pakistan can now give their students a direct path from classroom learning to real earnings.</p>
        </div>

        {/* How it works */}
        <div className="mb-32">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">How the Partnership Works</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="theme-card p-8 rounded-3xl space-y-4">
                   <div className="w-10 h-10 orange-gradient rounded-xl flex items-center justify-center font-bold text-white">
                      {i + 1}
                   </div>
                   <p className="text-bodyGrayText leading-relaxed">{step}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Institutional Pricing */}
        <div className="mb-32 bg-[#010411] -mx-6 px-6 py-20">
           <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Institutional Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {pricing.map((plan) => (
                   <div key={plan.level} className="theme-card p-10 rounded-[2.5rem] border-primaryOrange/10 flex flex-col items-center text-center space-y-6">
                      <h3 className="text-xl font-bold text-white">{plan.level}</h3>
                      <div className="text-4xl font-bold text-primaryOrange">{plan.price}</div>
                      <div className="text-xs text-darkGrayNumber uppercase tracking-widest font-bold">Per Student / Month</div>
                      <p className="text-sm text-bodyGrayText">{plan.desc}</p>
                   </div>
                 ))}
              </div>
              
              <div className="mt-16 p-8 rounded-3xl glass-navbar border border-orangeBorderActive/20 text-center">
                 <h4 className="text-white font-bold mb-4">Save more with long-term packages</h4>
                 <div className="flex flex-wrap justify-center gap-8">
                    <div className="text-sm">Monthly: <span className="text-white font-bold">Full Price</span></div>
                    <div className="text-sm">6-Month Package: <span className="text-primaryOrange font-bold">25% OFF</span></div>
                    <div className="text-sm">1-Year Package: <span className="text-primaryOrange font-bold">40% OFF</span></div>
                 </div>
              </div>
           </div>
        </div>

        {/* Portal Features */}
        <div className="mb-32">
           <h2 className="text-3xl font-bold text-white mb-12 text-center">Your Institution Portal</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portalFeatures.map((feature) => (
                <div key={feature.title} className="p-8 rounded-3xl bg-cardBg border border-lightBorder hover:border-primaryOrange transition-all group">
                   <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primaryOrange transition-colors">{feature.title}</h4>
                   <p className="text-sm text-bodyGrayText leading-relaxed">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Why Partner */}
        <div className="p-12 md:p-20 rounded-[3rem] bg-cardBg border border-lightBorder relative overflow-hidden mb-32">
           <div className="absolute top-0 right-0 w-64 h-64 secondary-glow opacity-10" />
           <h2 className="text-3xl font-bold text-white mb-12">Why Partner with GrapeTask LMS?</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                'Give your students career-ready digital skills',
                'Students graduate with verified certifications from a live marketplace',
                'Full visibility into every student\'s learning progress',
                'Affordable per-student pricing with institutional discounts',
                'Zero technical setup required — GrapeTask handles everything',
                'Trainers are vetted professionals and institutes'
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                   <div className="text-primaryOrange font-bold">✅</div>
                   <p className="text-bodyGrayText">{item}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/contact?type=institution"
            className="w-full sm:w-auto px-12 py-5 bg-primaryOrange hover:bg-opacity-90 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-primaryOrange/20 transition-all hover:scale-105 active:scale-95"
          >
            Partner with Us →
          </Link>
          <Link
            href="/demo"
            className="w-full sm:w-auto px-12 py-5 bg-cardBg hover:bg-cardBgActive border border-lightBorder text-white font-bold text-lg rounded-2xl transition-all"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
