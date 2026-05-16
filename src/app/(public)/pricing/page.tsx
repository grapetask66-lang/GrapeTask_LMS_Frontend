import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Sparkles, Building2, User } from 'lucide-react';

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
    <div className="relative min-h-screen">
      {/* Full-width Hero Background */}
      <div className="absolute top-0 inset-x-0 h-[600px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010411]/40 via-[#010411]/80 to-[#010411]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primaryOrange/30 blur-[150px] rounded-full" />
      </div>

      <div className="pt-40 pb-20 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="text-center mb-32 space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
              Simple, Transparent <br className="hidden md:block" /> <span className="text-primaryOrange">Pricing</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#a1a1aa] font-medium leading-relaxed">
              Affordable plans built to scale with individual learners and institutions of all sizes. No hidden fees.
            </p>
          </div>

        {/* Individual Learners */}
        <div className="mb-32">
          <div className="theme-card card-3d p-12 md:p-20 rounded-[4rem] border-primaryOrange/20 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 orange-gradient rounded-full blur-[100px] opacity-10" />
            <div className="space-y-6 relative z-10 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primaryOrange/10 border border-primaryOrange/20 text-xs font-black text-primaryOrange uppercase tracking-widest">
                <User className="w-3 h-3" />
                <span>Personal Learning</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">For Individual Learners</h2>
              <p className="text-lg text-bodyGrayText max-w-md leading-relaxed mx-auto md:mx-0">
                Browse courses and enroll directly. Pricing varies by course. No subscription required for individual learners.
              </p>
            </div>
            <Link
              href="/courses"
              className="group w-full md:w-auto px-16 py-6 bg-primaryOrange hover:bg-opacity-90 text-white font-black text-xl rounded-[2rem] shadow-2xl shadow-primaryOrange/30 transition-all hover:scale-105 active:scale-95 text-center relative z-10 flex items-center justify-center space-x-3"
            >
              <span>Browse Courses</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Institutional Plans */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">For Institutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {institutionalPlans.map((plan) => (
              <div key={plan.level} className="pricing-card p-12 rounded-[2.5rem] border-primaryOrange/10 flex flex-col items-center text-center space-y-6">
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
            className="group inline-flex items-center space-x-3 px-16 py-6 bg-primaryOrange hover:bg-opacity-90 text-white font-black text-xl rounded-[2rem] shadow-2xl shadow-primaryOrange/30 transition-all hover:scale-105 active:scale-95"
          >
            <span>Contact Sales</span>
            <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
