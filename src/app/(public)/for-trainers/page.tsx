'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap, BookOpen, Award, Users, ShieldCheck, DollarSign,
  ArrowRight, CheckCircle2, ChevronRight, Video, Camera, Sparkles, HelpCircle, Rocket,
  Briefcase, MonitorPlay, Layers, ClipboardCheck, Mic, PenTool, MessageSquare, Radio, Play, Pause
} from 'lucide-react';

export default function ForTrainersPage() {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const togglePlayPause = () => {
    const newIsPlaying = !isPlaying;
    setIsPlaying(newIsPlaying);
    if (videoRef.current) {
      if (newIsPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  };

  const requirements = [
    { title: 'Portfolio Submission', desc: 'Provide links to your professional work, designs, or Github code repositories.', icon: Briefcase },
    { title: 'Video Quality', desc: 'Course videos must be HD 1080p recorded with clear audio and in a clean environment.', icon: MonitorPlay },
    { title: 'Structured Content', desc: 'Courses must follow a level-based curriculum (School, College, or University).', icon: Layers },
    { title: 'Assessments', desc: 'Include test questions (MCQs, practical assignments) after every course video lesson.', icon: ClipboardCheck },
  ];

  const standards = [
    { title: 'Professional Equipment', desc: 'Use DSLR or high-quality smartphones to record lectures. Audio must be crisp.', icon: Mic },
    { title: 'Manual Grading', desc: 'Be prepared to manually grade students\' practical code or design submissions.', icon: PenTool },
    { title: 'Interactive Chat', desc: 'Answer student questions inside your course\'s built-in chat window weekly.', icon: MessageSquare },
    { title: 'Live Q&As', desc: 'Host weekly live masterclasses or Q&A video sessions for your premium learners.', icon: Radio },
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
            videoRef.current = el;
            if (el) {
              el.muted = true;
              el.defaultMuted = true;
              if (isPlaying) {
                el.play().catch(() => { });
              } else {
                el.pause();
              }
            }
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-75 sm:opacity-85 z-10"
        >
          <source src="/videos/Teach on GrapeTask LMS.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/25 via-[#020617]/55 to-[#020617] z-20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/60 via-transparent to-[#f0591f]/15 mix-blend-screen opacity-60 z-20" />
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primaryOrange/10 blur-[100px] sm:blur-[150px] rounded-full z-20" />
      </div>

      {/* Play/Pause Button - Moves strictly UP */}
      <button
        onClick={togglePlayPause}
        className="absolute top-[400px] sm:top-[450px] right-8 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-125 hover:-translate-y-2 shadow-lg hover:shadow-[0_15px_30px_rgba(240,89,31,0.3)]"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
      </button>

      <div className="pt-28 sm:pt-40 pb-20 px-4 sm:px-6 relative z-30">
        <div className="container mx-auto max-w-6xl">

          {/* Header Info */}
          <div className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-bold uppercase tracking-widest shadow-sm hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
              <Sparkles className="w-3.5 h-3.5" /> Join Our Team
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight text-3d">
              Teach on <span className="text-primaryOrange text-3d-orange">GrapeTask LMS</span>
            </h1>
            <p className="text-base sm:text-lg text-[#a1a1aa] font-medium max-w-2xl mx-auto leading-relaxed">
              Share your expertise, train the next generation of digital professionals, and build a rewarding residual income stream.
            </p>
          </div>

          {/* Who can become a trainer - Added Image */}
          <div className="mb-24 p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.3)] transition-all duration-500">
            <div className="absolute top-0 right-0 w-80 h-80 secondary-glow opacity-10" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight text-3d">
                  Who Can Become a <span className="text-primaryOrange text-3d-orange">Trainer?</span>
                </h2>
                <p className="text-sm sm:text-base text-[#a1a1aa] font-medium leading-relaxed">
                  We look for passionate professionals with real industry experience. If you love code, design, content creation, or business, we invite you to apply.
                </p>
                <div className="space-y-4 pt-2">
                  {[
                    'Individual expert freelancers with verified portfolios',
                    'Established offline computer training institutes looking to go online',
                    'Software development houses offering practical internship tracks'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center space-x-4 group/list hover:-translate-y-1 transition-all duration-300">
                      <div className="w-8 h-8 rounded-xl bg-primaryOrange/10 flex items-center justify-center text-primaryOrange border border-primaryOrange/20 flex-shrink-0 group-hover/list:scale-110 group-hover/list:rotate-6 group-hover/list:-translate-y-1 transition-all duration-300">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <p className="text-sm sm:text-base text-[#e4e4e7] font-semibold">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="lg:col-span-5 flex flex-col space-y-6">
                <div className="relative rounded-[2rem] overflow-hidden border border-lightBorder group">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80" 
                    alt="Freelancer working from home" 
                    className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                  
                  {/* Floating Card over Image */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#020617]/80 backdrop-blur-md border border-white/10 flex items-center gap-4 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(240,89,31,0.3)] transition-all duration-300 group/card">
                    <div className="w-10 h-10 rounded-xl bg-primaryOrange/10 border border-primaryOrange/20 text-primaryOrange flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-300">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-white tracking-tight">Record from Home & Office</h3>
                      <p className="text-xs text-bodyGrayText font-medium leading-relaxed">Complete structural & recording support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Requirements */}
          <div className="mb-24 p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl">
            <div className="absolute bottom-0 left-0 w-80 h-80 secondary-glow opacity-10" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-12 sm:mb-16 text-center tracking-tight text-3d">
              Trainer Registration <span className="text-primaryOrange text-3d-orange">Requirements</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
              {requirements.map((req) => {
                const Icon = req.icon;
                return (
                  <div key={req.title} className="theme-card h-full p-6 sm:p-8 rounded-[2rem] flex flex-col items-start text-left relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:from-primaryOrange/[0.08] hover:to-transparent border border-white/10 hover:border-primaryOrange/40 transition-all duration-500 shadow-xl hover:-translate-y-6 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.4)] group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primaryOrange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] group-hover:bg-primaryOrange/10 text-white/80 group-hover:text-primaryOrange border border-white/10 group-hover:border-primaryOrange/30 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(240,89,31,0.2)] transition-all duration-500 mb-6 transform group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-1 flex-shrink-0 z-10">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-start z-10 w-full text-left">
                      <h3 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-primaryOrange transition-colors duration-300">{req.title}</h3>
                      <p className="text-sm text-bodyGrayText group-hover:text-[#d4d4d8] font-medium leading-relaxed transition-colors duration-300">{req.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Course Creation Standards */}
          <div className="mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-12 sm:mb-16 text-center tracking-tight text-3d">
              Course Creation <span className="text-primaryOrange text-3d-orange">Standards</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
              {standards.map((std) => {
                const Icon = std.icon;
                return (
                  <div key={std.title} className="theme-card h-full p-6 sm:p-8 rounded-[2rem] flex flex-col items-start text-left relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:from-primaryOrange/[0.08] hover:to-transparent border border-white/10 hover:border-primaryOrange/40 transition-all duration-500 shadow-xl hover:-translate-y-6 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.4)] group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primaryOrange/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] group-hover:bg-primaryOrange/10 text-white/80 group-hover:text-primaryOrange border border-white/10 group-hover:border-primaryOrange/30 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_rgba(240,89,31,0.2)] transition-all duration-500 mb-6 transform group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-1 flex-shrink-0 z-10">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-start z-10 w-full text-left">
                      <h3 className="text-lg font-bold text-white tracking-tight mb-3 group-hover:text-primaryOrange transition-colors duration-300">{std.title}</h3>
                      <p className="text-sm text-bodyGrayText group-hover:text-[#d4d4d8] font-medium leading-relaxed transition-colors duration-300">{std.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trainer Launch Roadmap */}
          <div className="mb-24 p-6 sm:p-12 md:p-16 rounded-[2.5rem] sm:rounded-[3rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 secondary-glow opacity-10 pointer-events-none" />
            <div className="text-center mb-12 space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-xs font-black uppercase tracking-widest hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                <Rocket className="w-3.5 h-3.5" /> Launch Roadmap
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight text-3d">
                From expert to <span className="text-primaryOrange text-3d-orange">published trainer</span>
              </h2>
              <p className="text-sm sm:text-base text-[#a1a1aa] font-medium max-w-2xl mx-auto leading-relaxed">
                A simple review process helps you package your knowledge into a polished course learners can trust.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative z-10">
              {[
                { step: '01', title: 'Apply & Verify', desc: 'Submit your profile, portfolio, and preferred teaching category for review.' },
                { step: '02', title: 'Plan the Curriculum', desc: 'Map lessons, assessments, and milestones with LMS-friendly structure.' },
                { step: '03', title: 'Publish & Support', desc: 'Go live, answer learner questions, and keep improving your course outcomes.' },
              ].map((item) => (
                <div key={item.step} className="theme-card p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primaryOrange/35 hover:bg-white/[0.055] transition-all duration-500 hover:-translate-y-6 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.4)] group">
                  <div className="text-5xl font-black text-primaryOrange/25 group-hover:text-primaryOrange/45 leading-none mb-5 transition-colors transform group-hover:scale-110 group-hover:-translate-y-2 duration-500">{item.step}</div>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm text-bodyGrayText group-hover:text-[#d4d4d8] font-medium leading-relaxed transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trainer Support Toolkit - Added Image */}
          <div className="mb-24 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-[2rem] bg-cardBg border border-lightBorder relative overflow-hidden shadow-xl hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.3)] transition-all duration-500 flex flex-col">
              <div className="absolute bottom-0 left-0 w-64 h-64 orange-gradient opacity-[0.04] blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primaryOrange/20 bg-primaryOrange/10 text-primaryOrange text-[10px] font-black uppercase tracking-widest hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <HelpCircle className="w-3.5 h-3.5" /> Support Toolkit
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight text-3d">
                  Tools that keep trainers <span className="text-primaryOrange text-3d-orange">consistent</span>
                </h2>
                <p className="text-sm text-[#a1a1aa] font-medium leading-relaxed">
                  Trainers get workflows for feedback, student questions, lesson updates, and performance tracking.
                </p>
              </div>
              
              {/* Image added below text */}
              <div className="relative mt-auto rounded-2xl overflow-hidden border border-white/5 group/img">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80" 
                  alt="Team collaborating on dashboard" 
                  className="w-full h-[200px] object-cover group-hover/img:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cardBg via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { title: 'Feedback Templates', desc: 'Reusable grading notes help students understand exactly what to improve.', icon: PenTool },
                { title: 'Live Session Planner', desc: 'Schedule Q&A themes, class demos, and weekly learner checkpoints.', icon: Radio },
                { title: 'Student Question Queue', desc: 'Keep course discussions organized so support feels fast and professional.', icon: MessageSquare },
                { title: 'Content Refresh Prompts', desc: 'Spot lessons that need updates as tools, software, and standards change.', icon: ClipboardCheck },
              ].map((tool) => {
                const Icon = tool.icon;
                return (
                  <div key={tool.title} className="theme-card p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primaryOrange/35 hover:bg-white/[0.055] transition-all duration-500 hover:-translate-y-6 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.4)] group">
                    <div className="w-11 h-11 rounded-xl bg-primaryOrange/10 border border-primaryOrange/25 text-primaryOrange flex items-center justify-center mb-4 group-hover:bg-primaryOrange group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-1 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white tracking-tight mb-2">{tool.title}</h3>
                    <p className="text-sm text-bodyGrayText font-medium leading-relaxed">{tool.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Revenue Model Section */}
          <div className="mb-24 p-6 sm:p-12 md:p-20 rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#020617] border border-lightBorder relative overflow-hidden shadow-2xl text-center">
            <div className="absolute top-0 right-0 w-80 h-80 secondary-glow opacity-10" />

            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight text-3d">
                  Revenue <span className="text-primaryOrange text-3d-orange">Model</span>
                </h2>
                <p className="text-sm sm:text-base text-[#a1a1aa] font-medium max-w-xl mx-auto leading-relaxed">
                  We believe in compensating trainers fairly for their work. Our residual split allows you to keep the vast majority of course license sales.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="theme-card p-8 sm:p-10 rounded-[2rem] border border-primaryOrange/20 bg-cardBg flex flex-col items-center text-center space-y-4 transition-all duration-500 hover:-translate-y-6 hover:scale-[1.03] hover:shadow-[0_30px_60px_-15px_rgba(240,89,31,0.5)] group">
                  <div className="text-5xl sm:text-6xl font-black text-primaryOrange tracking-tight leading-none text-3d-orange group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">70%</div>
                  <div className="text-sm text-white font-black uppercase tracking-widest">Trainer Split</div>
                  <p className="text-xs text-bodyGrayText font-medium leading-relaxed">
                    You receive 70% of all course revenues generated from your premium student licenses and courses.
                  </p>
                </div>

                <div className="theme-card p-8 sm:p-10 rounded-[2rem] border border-white/10 bg-cardBg flex flex-col items-center text-center space-y-4 transition-all duration-500 hover:-translate-y-6 hover:scale-[1.03] hover:shadow-[0_30px_60px_-15px_rgba(255,255,255,0.1)] group">
                  <div className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none text-3d group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500">30%</div>
                  <div className="text-sm text-[#a1a1aa] font-black uppercase tracking-widest">Platform Operations</div>
                  <p className="text-xs text-bodyGrayText font-medium leading-relaxed">
                    GrapeTask retains 30% to run marketing, secure payments, host content, and maintain platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white text-3d">
              Ready to Share Your <span className="text-primaryOrange text-3d-orange">Knowledge?</span>
            </h2>
            <div className="flex justify-center">
              <Link
                href="/contact?type=trainer"
                className="group inline-flex items-center space-x-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-primaryOrange hover:bg-opacity-95 text-white font-black text-sm sm:text-base rounded-xl shadow-lg shadow-primaryOrange/20 transition-all duration-300 hover:-translate-y-1 hover:scale-110 active:scale-95 active:translate-y-0 hover:shadow-[0_15px_30px_-8px_rgba(240,89,31,0.4)]"
              >
                <span>Apply as Trainer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}