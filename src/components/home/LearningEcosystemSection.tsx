import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Award, Globe } from 'lucide-react';

export default function LearningEcosystemSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 secondary-glow opacity-10 pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-72 h-72 bg-[#f0591f]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 reveal-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f0591f]/10 border border-[#f0591f]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f0591f] animate-pulse" />
              <span className="text-xs font-bold text-[#f0591f] uppercase tracking-widest">Zero Gap Education</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight text-3d">
              The Complete <br />
              <span className="text-[#f0591f] text-3d-orange">Learning Ecosystem</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl">
              <p>GrapeTask LMS is not just another online learning platform. It is a complete pipeline from learning to earning.</p>
              <p>Once you complete your course and pass your assessments, you receive a <span className="text-white font-bold">GrapeTask LMS Certified badge</span> and can immediately create your profile and start getting paid on the GrapeTask freelance marketplace.</p>
              <div className="pt-2 pb-4 pl-4 border-l-4 border-[#f0591f] bg-white/[0.02] rounded-r-lg">
                <p className="text-white font-bold text-lg sm:text-xl italic">"No wasted time. No gap between learning and earning."</p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {[
                'Structured assessment after every video',
                'Trainer-reviewed submissions — not auto-graded',
                'Certificate directly linked to your freelancer profile',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#f0591f]/30 transition-all duration-300 group/item cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-[#f0591f]/10 flex items-center justify-center shrink-0 border border-[#f0591f]/20 group-hover/item:bg-[#f0591f]/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#f0591f]" />
                  </div>
                  <span className="text-[#e4e4e7] font-semibold text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/how-it-works" className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#f0591f] hover:bg-[#d94f17] text-white font-bold text-base rounded-xl transition-all duration-300 group hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(240,89,31,0.5)]">
                <span>See how it works</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/courses" className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg">
                Browse Courses
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 reveal-right" style={{ transitionDelay: '150ms' }}>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group hover:border-[#f0591f]/20 transition-all duration-500 card-3d border border-white/[0.08]">
              <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80" alt="Learning Ecosystem" fill className="absolute inset-0 w-full h-full object-cover opacity-[0.15] group-hover:opacity-[0.25] group-hover:scale-105 transition-all duration-700" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 to-[#020617]/90 z-10 group-hover:from-[#020617]/90 group-hover:to-[#020617]/85 transition-all duration-500" />
              
              <div className="relative z-20 p-8 sm:p-10 space-y-6">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#f0591f] via-orange-400 to-[#f0591f]/50 z-30" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] text-[#a1a1aa] uppercase tracking-widest font-bold">GrapeTask LMS</span>
                </div>

                <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/5 text-center relative overflow-hidden backdrop-blur-md">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#f0591f]/10 blur-3xl rounded-full pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto bg-[#020617] rounded-full flex items-center justify-center mb-5 border-4 border-[#f0591f]/30 shadow-[0_0_30px_rgba(240,89,31,0.3)] animate-float-slow">
                      <Award className="w-10 h-10 text-[#f0591f]" />
                    </div>
                    <h4 className="text-white font-extrabold text-xl tracking-tight">Certificate of Completion</h4>
                    <p className="text-[#a1a1aa] text-sm mt-1 font-medium">Full Stack Development</p>
                    <div className="mt-5 inline-flex items-center gap-2 bg-[#f0591f]/10 text-[#f0591f] text-xs font-extrabold px-4 py-1.5 rounded-full border border-[#f0591f]/20 uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Credential
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/5 hover:border-blue-400/30 transition-colors cursor-default group/card">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                      <Globe className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-bold text-white">Freelancer Profile Sync</span>
                        <span className="text-[10px] text-[#f0591f] font-extrabold uppercase">Active</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-[#f0591f] to-orange-400 h-2 rounded-full w-full transition-all duration-1000" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.02] border border-dashed border-white/10">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-[#a1a1aa] font-medium">Ready to receive paid tasks</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
