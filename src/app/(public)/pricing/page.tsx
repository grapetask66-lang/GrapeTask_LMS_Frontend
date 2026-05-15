import React from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const institutionalPlans = [
    { level: 'School Plan', price: '200', target: 'Schools (up to any size)' },
    { level: 'College Plan', price: '300', target: 'Colleges and intermediate institutes' },
    { level: 'University Plan', price: '500', target: 'Universities and degree programs' },
  ];

  const savings = [
    { duration: 'Monthly', price: 'PKR 200' },
    { duration: '6 Months', price: 'PKR 150', tag: 'Save 25%' },
    { duration: '1 Year', price: 'PKR 120', tag: 'Save 40%' },
  ];

  const inclusions = [
    'Dedicated institution portal', 'Unlimited course assignments', 
    'Login credential management', 'Weekly student progress reports', 
    'Trainer-to-admin communication room', 'Class and group management tools', 
    'Automated branded reports', 'GrapeTask LMS certified badges'
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Simple, Transparent Pricing</h1>
          <p className="text-xl text-bodyGrayText">Affordable plans for individual learners and institutions of all sizes.</p>
        </div>

        {/* Individual Learners */}
        <div className="mb-32">
           <div className="theme-card p-12 rounded-[3rem] border-primaryOrange/20 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 orange-gradient rounded-full blur-3xl opacity-10" />
              <div className="space-y-4 relative z-10">
                 <h2 className="text-3xl font-bold text-white">For Individual Learners</h2>
                 <p className="text-bodyGrayText max-w-md leading-relaxed">
                   Browse courses and enroll directly. Pricing varies by course. No subscription required for individual learners.
                 </p>
              </div>
              <Link
                href="/courses"
                className="w-full md:w-auto px-10 py-4 bg-primaryOrange hover:bg-opacity-90 text-white font-bold rounded-2xl shadow-xl shadow-primaryOrange/20 transition-all hover:scale-105 active:scale-95 text-center relative z-10"
              >
                Browse Courses →
              </Link>
           </div>
        </div>

        {/* Institutional Plans */}
        <div className="mb-32">
           <h2 className="text-3xl font-bold text-white mb-16 text-center">For Institutions</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {institutionalPlans.map((plan) => (
                <div key={plan.level} className="theme-card p-12 rounded-[2.5rem] border-primaryOrange/10 flex flex-col items-center text-center space-y-6 hover:scale-[1.02] transition-transform">
                   <h3 className="text-xl font-bold text-white uppercase tracking-widest">{plan.level}</h3>
                   <div className="flex flex-col">
                      <span className="text-5xl font-bold text-primaryOrange">PKR {plan.price}</span>
                      <span className="text-xs text-darkGrayNumber font-bold mt-2">PER STUDENT / MONTH</span>
                   </div>
                   <p className="text-sm text-bodyGrayText">{plan.target}</p>
                   <Link href="/contact" className="w-full py-3 bg-white/5 border border-lightBorder rounded-xl text-white font-bold hover:bg-white/10 transition-colors">
                      Get Started
                   </Link>
                </div>
              ))}
           </div>
        </div>

        {/* Long Term Savings */}
        <div className="mb-32 bg-[#010411] -mx-6 px-6 py-20 rounded-[4rem]">
           <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                 <h2 className="text-3xl font-bold text-white">Long-Term Packages</h2>
                 <p className="text-bodyGrayText">(Example for school-level pricing)</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {savings.map((tier) => (
                   <div key={tier.duration} className="p-8 rounded-3xl bg-cardBg border border-lightBorder flex flex-col items-center text-center space-y-4">
                      <div className="text-lg font-bold text-white">{tier.duration}</div>
                      <div className="text-3xl font-bold text-white">{tier.price}</div>
                      {tier.tag && (
                        <div className="px-3 py-1 rounded-full bg-primaryOrange/20 border border-orangeBorderActive text-xs font-bold text-primaryOrange uppercase tracking-widest">
                           {tier.tag}
                        </div>
                      )}
                   </div>
                 ))}
              </div>
              <p className="text-center text-darkGrayNumber mt-12 italic text-sm">
                Similar discount tiers apply for college and university plans. Contact us for a custom quote.
              </p>
           </div>
        </div>

        {/* What's Included */}
        <div className="mb-32 max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-cardBg border border-lightBorder relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 secondary-glow opacity-10" />
           <h2 className="text-3xl font-bold text-white mb-12">What's Included in Every Institutional Plan</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {inclusions.map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                   <div className="w-5 h-5 rounded-full bg-primaryOrange flex items-center justify-center text-[10px] text-white">✓</div>
                   <p className="text-bodyGrayText">{item}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Revenue Share */}
        <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-[2.5rem] bg-cardBg border border-orangeBorderActive/30">
           <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Revenue Share for Trainers</h2>
           <div className="flex items-center justify-center space-x-12">
              <div className="text-center">
                 <div className="text-5xl font-bold text-primaryOrange">70%</div>
                 <div className="text-xs text-darkGrayNumber mt-2 font-bold uppercase">To Trainer</div>
              </div>
              <div className="w-px h-16 bg-lightBorder" />
              <div className="text-center">
                 <div className="text-5xl font-bold text-white">30%</div>
                 <div className="text-xs text-darkGrayNumber mt-2 font-bold uppercase">To GrapeTask</div>
              </div>
           </div>
           <p className="text-bodyGrayText">Fair. Simple. Transparent.</p>
        </div>

        <div className="text-center mt-32">
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-primaryOrange hover:bg-opacity-90 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-primaryOrange/20 transition-all hover:scale-105 active:scale-95"
          >
            Contact Sales for Custom Plans →
          </Link>
        </div>
      </div>
    </div>
  );
}
