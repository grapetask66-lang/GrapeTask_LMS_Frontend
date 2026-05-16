import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Building2 } from 'lucide-react';

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
    <div className="relative min-h-screen">
      {/* Full-width Hero Background */}
      <div className="absolute top-0 inset-x-0 h-[600px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010411]/40 via-[#010411]/80 to-[#010411]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primaryOrange/30 blur-[150px] rounded-full" />
      </div>

      <div className="pt-40 pb-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-32 space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm">
              <Building2 className="w-3.5 h-3.5" /> B2B Partnerships
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
              Bring World-Class Skill Training to Your <span className="text-primaryOrange">Institution</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#a1a1aa] font-medium leading-relaxed">
              Schools, colleges, and universities can now empower their students with a direct pipeline from classroom learning to real-world earnings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                href="/contact?type=institution"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-10 py-5 bg-gradient-to-r from-primaryOrange to-[#ff7a45] hover:shadow-[0_0_30px_rgba(240,89,31,0.5)] text-white font-black text-lg rounded-2xl shadow-xl shadow-primaryOrange/20 transition-all duration-200 hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                <span>Partner with Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

            </div>
          </div>

        {/* How it works */}
        <div className="mb-32">
           <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center tracking-tight">How the Partnership Works</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {steps.map((step, i) => (
                <div key={i} className="theme-card p-10 rounded-[2.5rem] space-y-6 group hover:border-primaryOrange/40 transition-colors">
                   <div className="w-14 h-14 orange-gradient rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-xl shadow-primaryOrange/20 group-hover:scale-110 transition-transform">
                      {i + 1}
                   </div>
                   <p className="text-lg text-bodyGrayText leading-relaxed font-medium">{step}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Institutional Pricing */}
        <div className="mb-32 bg-[#010411] -mx-6 px-6 py-20">
           <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center tracking-tight">Institutional Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 {pricing.map((plan) => (
                   <div key={plan.level} className="theme-card p-12 rounded-[3rem] border-primaryOrange/10 flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform">
                      <h3 className="text-2xl font-black text-white tracking-tight">{plan.level}</h3>
                      <div className="text-5xl font-black text-primaryOrange tracking-tighter">{plan.price}</div>
                      <div className="text-xs text-darkGrayNumber uppercase tracking-[0.2em] font-black">Per Student / Month</div>
                      <p className="text-base text-bodyGrayText font-medium">{plan.desc}</p>
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
           <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center tracking-tight">Your Institution Portal</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {portalFeatures.map((feature) => (
                <div key={feature.title} className="p-10 rounded-[2.5rem] bg-cardBg border border-lightBorder hover:border-primaryOrange transition-all group hover:-translate-y-1">
                   <h4 className="text-2xl font-black text-white mb-4 group-hover:text-primaryOrange transition-colors tracking-tight">{feature.title}</h4>
                   <p className="text-base text-bodyGrayText leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Why Partner */}
        <div className="p-12 md:p-24 rounded-[4rem] bg-cardBg border border-lightBorder relative overflow-hidden mb-32 shadow-2xl">
           <div className="absolute top-0 right-0 w-96 h-96 secondary-glow opacity-10" />
           <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tight text-center md:text-left">Why Partner with GrapeTask LMS?</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                'Give your students career-ready digital skills',
                'Students graduate with verified certifications from a live marketplace',
                'Full visibility into every student\'s learning progress',
                'Affordable per-student pricing with institutional discounts',
                'Zero technical setup required — GrapeTask handles everything',
                'Trainers are vetted professionals and institutes'
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-5">
                   <div className="w-8 h-8 rounded-full bg-primaryOrange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-primaryOrange" />
                   </div>
                   <p className="text-lg text-bodyGrayText font-medium">{item}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact?type=institution"
            className="group w-full sm:w-auto px-16 py-6 bg-primaryOrange hover:bg-opacity-90 text-white font-black text-xl rounded-[2rem] shadow-2xl shadow-primaryOrange/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-3"
          >
            <span>Partner with Us</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>
      </div>
    </div>
    </div>
  );
}
