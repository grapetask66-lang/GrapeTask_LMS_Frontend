import React from 'react';
import { 
  User, 
  BookOpen, 
  FileEdit, 
  Users2, 
  Unlock, 
  Flag, 
  Award, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      title: 'Choose Your Level',
      desc: 'Sign up as a learner and select your category: School Student, College Student, University Student, or Individual Learner. Your dashboard will show courses and trainers relevant to your level.',
      icon: <User className="w-8 h-8" />,
    },
    {
      title: 'Enroll in a Course',
      desc: 'Browse verified courses from certified institutes. Every course is reviewed and approved by the GrapeTask team before it goes live.',
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: 'Learn with Structure',
      desc: 'Watch HD video lessons at your own pace. After every video, complete MCQs, a quiz, a written summary, and a practical assignment. Submit your work directly to your trainer through the platform.',
      icon: <FileEdit className="w-8 h-8" />,
    },
    {
      title: 'Get Reviewed by Your Trainer',
      desc: 'Your trainer reviews every submission and marks it as Pass, Fail, or Improve. If you need to retry, you will receive a completely different set of questions — not the same test twice.',
      icon: <Users2 className="w-8 h-8" />,
    },
    {
      title: 'Unlock the Next Video',
      desc: 'GrapeTask LMS uses a progressive unlocking system. You must pass the test for each video before the next one becomes available. Every new test includes questions from all previous videos — keeping your knowledge fresh and building continuously.',
      icon: <Unlock className="w-8 h-8" />,
    },
    {
      title: 'Final Comprehensive Test',
      desc: 'After completing all videos, you will take a final test covering the entire course. This is your last step before certification.',
      icon: <Flag className="w-8 h-8" />,
    },
    {
      title: 'Receive Your GrapeTask Certificate',
      desc: 'Students who pass the final test with strong trainer remarks receive an official GrapeTask LMS Certificate. Your profile on the marketplace will display the "GrapeTask LMS Certified" badge.',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Start Earning on GrapeTask',
      desc: 'Create your freelancer profile, set up your gigs, and start receiving work from clients on the GrapeTask freelance marketplace. Your earning journey begins.',
      icon: <DollarSign className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
            How it <span className="text-primaryOrange">Works</span>
          </h1>
          <p className="text-xl md:text-2xl text-bodyGrayText font-medium max-w-2xl mx-auto">A simple, structured path from learning to earning.</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-lightBorder -translate-x-1/2 z-0" />
          
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center relative z-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 p-4">
                   <div className="theme-card p-12 rounded-[3rem] space-y-6 hover:border-primaryOrange transition-all flex flex-col items-center md:items-start text-center md:text-left group">
                      <div className="p-4 rounded-2xl bg-primaryOrange/10 text-primaryOrange group-hover:bg-primaryOrange group-hover:text-white transition-all shadow-xl">
                        {step.icon}
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">Step {index + 1}: {step.title}</h3>
                        <p className="text-lg text-bodyGrayText leading-relaxed">{step.desc}</p>
                      </div>
                   </div>
                </div>
                
                {/* Connector Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full glass-navbar border-4 border-[#010411] flex items-center justify-center text-primaryOrange font-bold shadow-lg shadow-primaryOrange/20">
                   {index + 1}
                </div>
                
                <div className="w-full md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Testing System Section */}
        <div className="mt-40 max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-cardBg border border-orangeBorderActive/30 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 secondary-glow opacity-20" />
          <h2 className="text-3xl font-bold text-white mb-8">The Progressive Testing System</h2>
          <div className="space-y-6 text-lg text-bodyGrayText">
            <p>
              Unlike other platforms where you watch videos and receive a certificate without any real assessment, GrapeTask LMS tests your knowledge after every single video — and the tests get harder as you progress.
            </p>
            <ul className="space-y-6">
              {[
                { step: 'After Video 1', test: 'Test on Video 1 only' },
                { step: 'After Video 2', test: 'Combined test on Videos 1 and 2' },
                { step: 'After Video 3', test: 'Combined test on Videos 1, 2, and 3' },
                { step: 'Final Video', test: 'Comprehensive test on the entire course' }
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-primaryOrange/30 transition-all">
                  <div className="w-10 h-10 rounded-full bg-primaryOrange/10 flex items-center justify-center text-primaryOrange font-black">
                    {i + 1}
                  </div>
                  <div className="flex-grow flex items-center justify-between">
                    <span className="text-white font-bold">{item.step}</span>
                    <ArrowRight className="w-4 h-4 text-primaryOrange opacity-0 group-hover:opacity-100 transition-all" />
                    <span className="text-bodyGrayText font-medium">{item.test}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="pt-4 text-white font-medium italic">
              This ensures that every certified learner has genuinely mastered the skill.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
