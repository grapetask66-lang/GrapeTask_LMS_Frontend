'use client';

import React from 'react';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, Star, Shield, HelpCircle,
  Clock, DollarSign, Building2, UserCheck, Play, Award
} from 'lucide-react';

const pricing = [
  { level: 'School Students', price: '200', desc: 'Beginner-friendly content' },
  { level: 'College Students', price: '300', desc: 'Intermediate practical content' },
  { level: 'University Students', price: '500', desc: 'Advanced professional content' },
];

export default function PricingPage() {
  const individualPlans = [
    {
      level: 'Starter Course',
      price: 'Pay per Course',
      desc: 'Access select courses at your own pace',
      features: [
        'Pay only for the courses you choose',
        'HD video lessons from verified expert trainers',
        'Structured assessments after every video',
        'Course completion certificate verified on profile',
        '24/7 student community group access'
      ],
      cta: 'Browse Courses',
      href: '/courses',
      badge: 'Flexible'
    },
    {
      level: 'Premium Path',
      price: 'Advanced Track',
      desc: 'Intensive practical training with direct trainer feedback',
      features: [
        'Priority enrollment in new courses',
        'Personal code review and grading from expert trainers',
        'Direct 1-on-1 chat support with course trainers',
        'Weekly live Q&A/masterclass group sessions',
        'Verified GrapeTask LMS Certificate badge',
        'Direct project pipeline on GrapeTask freelance marketplace'
      ],
      cta: 'Join Now',
      href: '/register',
      badge: 'Recommended',
      popular: true
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#020617] text-white">

      {/* ── HERO VIDEO BACKGROUND ── */}
      <div className="absolute top-0 inset-x-0 h-[500px] sm:h-[600px] pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          ref={el => {
            if (el) {
              el.muted = true;
              el.defaultMuted = true;
              el.play().catch(() => { });
            }
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-75 sm:opacity-85 z-10"
        >
          <source src="/videos/pricing-analytics.mp4" type="video/mp4" />
        </video>
        {/* Navy + Orange gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/25 via-[#020617]/55 to-[#020617] z-20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/60 via-transparent to-[#f0591f]/15 mix-blend-screen opacity-60 z-20" />
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primaryOrange/10 blur-[100px] sm:blur-[150px] rounded-full z-20" />
      </div>

      <div className="pt-28 sm:pt-40 pb-20 px-4 sm:px-6 relative z-30">
        <div className="container mx-auto max-w-6xl">

          {/* Header Info */}
          <div className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm">
              <Clock className="w-3.5 h-3.5" /> Affordable Excellence
            </div>
            {/* Heading slightly smaller & 3D text styled */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight text-3d">
              Flexible <span className="text-primaryOrange text-3d-orange">Pricing Plans</span>
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] font-medium max-w-xl mx-auto leading-relaxed">
              Find the perfect plan to master digital skills and connect directly to high-paying freelance contracts.
            </p>
          </div>

          {/* Individual Plans Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">
            {individualPlans.map((plan) => (
              <div
                key={plan.level}
                className={`theme-card card-3d p-6 sm:p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(240,89,31,0.1)] ${plan.popular ? 'border-[#f0591f]/40 bg-cardBgActive/20' : 'border-lightBorder'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-primaryOrange/20 border border-primaryOrange/30 text-primaryOrange text-[9px] font-black uppercase tracking-widest">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6 sm:space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white">{plan.level}</h3>
                    <p className="text-sm text-bodyGrayText font-medium">{plan.desc}</p>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-white">
                    {plan.price}
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/5">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3.5">
                        <div className="w-5 h-5 rounded-full bg-primaryOrange/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primaryOrange/20">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primaryOrange" />
                        </div>
                        <span className="text-sm text-bodyGrayText font-medium leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={plan.href}
                    className={`w-full py-4 rounded-2xl font-black text-sm text-center block transition-all hover:scale-105 active:scale-95 ${plan.popular
                        ? 'bg-primaryOrange text-white shadow-lg shadow-primaryOrange/20 hover:shadow-primaryOrange/30'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                      }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Subscription Section - Changed background back to Navy Blue #020617 */}
          <div className="mb-24 p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 secondary-glow opacity-10" />

            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm">
                <Building2 className="w-3.5 h-3.5" /> Institutional Access
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight text-3d">
                For Institutions <span className="text-primaryOrange text-3d-orange">Plans</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a1a1aa] font-medium max-w-xl mx-auto leading-relaxed">
                Connect your school, college, or university to GrapeTask LMS. Train all your students on professional freelance standards.
              </p>
            </div>

            {/* Redesigned 3 Unique Geometric/Leaf Cards with orange hover turning solid & simpler clean PKR font */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan) => (
                <div key={plan.level} className="relative group">
                  <div className="pricing-card p-8 sm:p-10 rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] border border-white/10 flex flex-col items-center text-center space-y-6 bg-cardBg hover:bg-primaryOrange hover:border-primaryOrange hover:text-white transition-all duration-500 hover:-translate-y-4 hover:scale-[1.03] shadow-2xl relative overflow-hidden h-full">
                    {/* Visual orange glow decoration inside card on hover */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/20 transition-all pointer-events-none" />

                    <h3 className="text-lg font-black text-white group-hover:text-white uppercase tracking-wider">{plan.level}</h3>

                    <div className="flex flex-col items-center">
                      <div className="flex items-baseline justify-center">
                        {/* Simpler clean font, reduced relative size */}
                        <span className="font-sans text-base font-semibold text-primaryOrange group-hover:text-white transition-colors mr-1">PKR</span>
                        <span className="text-4xl sm:text-5xl font-black text-white group-hover:text-white transition-colors">{plan.price}</span>
                      </div>
                      <span className="text-[9px] text-darkGrayNumber group-hover:text-white/60 transition-colors font-black uppercase tracking-[0.2em] mt-2">Per Student / Month</span>
                    </div>

                    <p className="text-sm text-bodyGrayText group-hover:text-white/80 transition-colors leading-relaxed font-semibold">{plan.desc}</p>

                    <Link
                      href="/contact?type=institution"
                      className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white hover:text-primaryOrange group-hover:bg-white group-hover:text-primaryOrange transition-all text-center text-xs sm:text-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Long Term Packages - Changed background back to Navy Blue #020617 */}
          <div className="p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl mb-24">
            <div className="absolute bottom-0 left-0 w-80 h-80 secondary-glow opacity-10" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm">
                  <Star className="w-3.5 h-3.5" /> Long Term Committment
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight text-3d">
                  Long-Term <span className="text-primaryOrange text-3d-orange">Discount Packages</span>
                </h2>
                <p className="text-sm sm:text-base text-[#a1a1aa] font-medium leading-relaxed">
                  We support educational institutions making a dedicated commitment to their students' tech skills. Get substantial savings with our multi-month packages.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-xl bg-primaryOrange/10 flex items-center justify-center text-primaryOrange border border-primaryOrange/20 flex-shrink-0">
                      <Award className="w-4.5 h-4.5" />
                    </div>
                    <p className="text-sm sm:text-base text-[#e4e4e7] font-semibold"><span className="text-primaryOrange font-black">6 Months Package:</span> 25% Off total cost</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-xl bg-primaryOrange/10 flex items-center justify-center text-primaryOrange border border-primaryOrange/20 flex-shrink-0">
                      <Award className="w-4.5 h-4.5" />
                    </div>
                    <p className="text-sm sm:text-base text-[#e4e4e7] font-semibold"><span className="text-primaryOrange font-black">1 Year Package:</span> 40% Off total cost (Most popular)</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col space-y-6">
                <div className="theme-card p-6 sm:p-10 rounded-[2rem] border border-lightBorder relative overflow-hidden backdrop-blur-xl bg-[rgba(255,255,255,0.03)] card-3d">
                  <div className="absolute inset-0 bg-gradient-to-br from-primaryOrange/5 to-transparent pointer-events-none" />

                  <div className="text-center space-y-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">Need a custom quote?</h3>
                    <p className="text-xs sm:text-sm text-bodyGrayText font-medium leading-relaxed">
                      Have a larger student body or require specialized curriculums? Let us build a tailored corporate plan for your campus.
                    </p>
                    <div className="pt-4">
                      <Link
                        href="/contact?type=custom"
                        className="w-full py-4 bg-primaryOrange text-white font-black rounded-2xl text-xs sm:text-sm hover:bg-opacity-95 transition-all text-center block shadow-lg shadow-primaryOrange/20"
                      >
                        Contact Corporate Sales
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 text-3d">
                Frequently Asked <span className="text-primaryOrange text-3d-orange">Questions</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a1a1aa] font-medium">Simple answers to common questions about GrapeTask subscriptions.</p>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {[
                { q: 'Is there a setup fee or hidden charges?', a: 'No setup fees whatsoever. You only pay the listed per-student price for the level of your institution, or the pay-per-course rate if you are an individual learner. No hidden platform maintenance costs.' },
                { q: 'Can individual students get institutional pricing?', a: 'No, institutional pricing is exclusively for partner academic schools, colleges, and universities subscribing their students as a bulk group. Individual students can pay per course or join the premium track.' },
                { q: 'How does the billing cycles work?', a: 'Institutional subscriptions are billed monthly in advance based on the active seat allocation. You can upgrade or add more student seats at any time during your billing period.' },
              ].map((faq, i) => (
                <div key={i} className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] glass-card border border-[rgba(255,255,255,0.06)] hover:border-[rgba(240,89,31,0.2)] transition-all group card-3d">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-start gap-3 flex-shrink-0">
                    <span className="w-6 h-6 rounded-lg bg-[rgba(240,89,31,0.1)] flex items-center justify-center text-primaryOrange text-xs font-black flex-shrink-0 group-hover:bg-[#f0591f] group-hover:text-white transition-all">?</span>
                    {faq.q}
                  </h3>
                  <p className="text-sm sm:text-base text-bodyGrayText leading-relaxed pl-9 font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
