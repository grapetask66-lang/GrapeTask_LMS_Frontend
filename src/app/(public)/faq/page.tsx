import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Send, ArrowRight, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const categories = [
    {
      name: 'FOR LEARNERS',
      questions: [
        { q: 'Who can join GrapeTask LMS?', a: 'Anyone can join — school students, college students, university students, and individual learners who are not enrolled in any institution. GrapeTask LMS is open to all.' },
        { q: 'Do I need to pay to enroll in a course?', a: 'Individual learners pay per course. Institutional students (school, college, university) are enrolled by their institution under a subscription plan and do not need to pay individually.' },
        { q: 'What happens if I fail a test?', a: 'If you fail, you must re-watch the video before attempting the test again. Your next attempt will feature a completely different set of questions — not the same test repeated.' },
        { q: 'Can I skip a video and go to the next one?', a: 'No. GrapeTask LMS uses a progressive unlocking system. You must pass the assessment for each video before the next one becomes available.' },
        { q: 'What do I get after completing a course?', a: 'You receive an official GrapeTask LMS Certificate and a verified badge on your marketplace profile. You can then immediately start freelancing on GrapeTask.' },
      ]
    },
    {
      name: 'FOR TRAINERS',
      questions: [
        { q: 'Who can become a trainer?', a: 'Both individual professionals and training institutes can apply. You must submit your portfolio, experience, and reason for joining. The GrapeTask team will review your application.' },
        { q: 'What video quality is required for my course?', a: 'All course videos must be HD quality, recorded using professional equipment (DSLR or iPhone), in a clean professional environment, with clear audio.' },
        { q: 'How do I get paid?', a: 'Trainers receive 70% of all revenue generated from their courses. GrapeTask retains 30% for platform operations.' },
        { q: 'Can I teach at more than one level?', a: 'Yes. If you are qualified to teach at multiple levels (school, college, university), you can create courses for each level.' },
      ]
    },
    {
      name: 'FOR INSTITUTIONS',
      questions: [
        { q: 'How does the institutional subscription work?', a: 'Your institution pays a monthly per-student fee based on your student level. GrapeTask provides a dedicated portal where you assign courses, manage students, and receive progress reports.' },
        { q: 'Can I get a discount for a longer commitment?', a: 'Yes. GrapeTask offers significant discounts for 6-month and 1-year packages. These packages are available directly from your institutional dashboard.' },
        { q: 'How are progress reports delivered?', a: 'Trainers generate reports directly in the system with one click. Reports are automatically branded with the GrapeTask logo and your institution\'s logo, then delivered to your portal inbox and email.' },
        { q: 'Can parents see their child\'s progress?', a: 'Yes. The institution head can forward reports to parents after reviewing them.' },
      ]
    }
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
            Got <span className="text-primaryOrange">Questions?</span>
          </h1>
          <p className="text-xl md:text-2xl text-bodyGrayText font-medium max-w-2xl mx-auto">Everything you need to know about GrapeTask LMS.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-24">
          {categories.map((category) => (
            <div key={category.name} className="space-y-12">
               <h2 className="text-2xl font-bold text-primaryOrange uppercase tracking-[0.3em] border-l-4 border-primaryOrange pl-6">
                 {category.name}
               </h2>
               <div className="grid grid-cols-1 gap-6">
                  {category.questions.map((item, i) => (
                    <div key={i} className="theme-card p-10 rounded-[2.5rem] space-y-4 hover:border-orangeBorderActive/40 transition-colors group">
                       <h3 className="text-xl font-bold text-white group-hover:text-primaryOrange transition-colors">
                          {item.q}
                       </h3>
                       <p className="text-bodyGrayText leading-relaxed">
                          {item.a}
                       </p>
                    </div>
                  ))}
               </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-40 p-12 md:p-24 rounded-[4rem] bg-cardBg border border-lightBorder text-center space-y-12 relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 secondary-glow opacity-20" />
           </div>
           <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Still have questions?</h2>
              <p className="text-bodyGrayText">We're here to help you get started on your journey.</p>
           </div>
           <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              <div className="flex items-center space-x-6">
                 <div className="w-16 h-16 rounded-[1.5rem] bg-primaryOrange/10 border border-primaryOrange/20 flex items-center justify-center text-primaryOrange">
                   <Mail className="w-8 h-8" />
                 </div>
                 <div className="text-left">
                    <div className="text-xs text-darkGrayNumber font-black uppercase tracking-widest mb-1">Email Us</div>
                    <div className="text-xl font-black text-white">info@grapetask.co</div>
                 </div>
              </div>
              <div className="flex items-center space-x-6">
                 <div className="w-16 h-16 rounded-[1.5rem] bg-primaryOrange/10 border border-primaryOrange/20 flex items-center justify-center text-primaryOrange">
                   <Phone className="w-8 h-8" />
                 </div>
                 <div className="text-left">
                    <div className="text-xs text-darkGrayNumber font-black uppercase tracking-widest mb-1">Call Us</div>
                    <div className="text-xl font-black text-white">+92 341 1228760</div>
                 </div>
              </div>
           </div>
           <div className="pt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-3 px-16 py-6 bg-primaryOrange hover:bg-opacity-90 text-white font-black text-xl rounded-[2rem] shadow-2xl shadow-primaryOrange/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>Send a Message</span>
                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
