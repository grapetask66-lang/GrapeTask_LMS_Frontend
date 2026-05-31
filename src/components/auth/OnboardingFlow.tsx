'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Camera, ChevronLeft, ChevronRight, CheckCircle2, User, BookOpen, GraduationCap, Building2, Briefcase } from 'lucide-react';

type Role = 'learner' | 'trainer' | null;
type LearnerLevel = 'school' | 'college' | 'university' | null;
type TrainerType = 'individual' | 'institute' | null;

export default function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<Role>(null);
  const [learnerLevel, setLearnerLevel] = useState<LearnerLevel>(null);
  const [trainerType, setTrainerType] = useState<TrainerType>(null);

  // Form states
  const [personalDetails, setPersonalDetails] = useState({
    firstName: '', lastName: '', phone: '', country: '', city: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const handleComplete = () => {
    // API call to save onboarding data
    router.push('/dashboard');
  };

  const renderStepIndicators = (totalSteps: number) => {
    return (
      <div className="flex items-center justify-center gap-2 mb-8">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i + 1 === step ? 'w-8 bg-[#f0591f]' : 
              i + 1 < step ? 'w-4 bg-white/40' : 'w-4 bg-white/10'
            }`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-2xl bg-[#020617] border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f0591f]/5 blur-[80px] rounded-full pointer-events-none" />
      
      {/* STEP 1: Choose Role */}
      {step === 1 && (
        <div className="animate-fade-in relative z-10 text-center">
          {renderStepIndicators(3)}
          <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Welcome to GrapeTask!</h2>
          <p className="text-[#a1a1aa] mb-10 text-sm">Let's set up your profile. How will you use GrapeTask?</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button 
              onClick={() => { setRole('learner'); nextStep(); }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#f0591f]/50 transition-all text-left overflow-hidden h-40 flex flex-col justify-end"
            >
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-[#f0591f]/10 text-[#f0591f] flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">I'm a Learner</h3>
              <p className="text-xs text-[#71717a] group-hover:text-[#a1a1aa] transition-colors">I want to learn skills and earn.</p>
            </button>

            <button 
              onClick={() => { setRole('trainer'); nextStep(); }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#f0591f]/50 transition-all text-left overflow-hidden h-40 flex flex-col justify-end"
            >
              <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-[#f0591f]/10 text-[#f0591f] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">I'm a Trainer</h3>
              <p className="text-xs text-[#71717a] group-hover:text-[#a1a1aa] transition-colors">I want to teach and mentor students.</p>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Sub-Role Selection */}
      {step === 2 && (
        <div className="animate-fade-in relative z-10 text-center">
          {renderStepIndicators(3)}
          
          <button onClick={prevStep} className="absolute left-0 top-0 p-2 text-[#a1a1aa] hover:text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Tell us more</h2>
          <p className="text-[#a1a1aa] mb-10 text-sm">
            {role === 'learner' ? 'What is your current education level?' : 'What type of trainer are you?'}
          </p>

          {role === 'learner' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'school', label: 'School Student', icon: <BookOpen className="w-5 h-5" /> },
                { id: 'college', label: 'College Student', icon: <GraduationCap className="w-5 h-5" /> },
                { id: 'university', label: 'University Student', icon: <Building2 className="w-5 h-5" /> }
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => { setLearnerLevel(lvl.id as LearnerLevel); nextStep(); }}
                  className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#f0591f]/40 flex flex-col items-center gap-3 transition-all"
                >
                  <div className="text-[#f0591f]">{lvl.icon}</div>
                  <span className="text-sm font-bold text-white">{lvl.label}</span>
                </button>
              ))}
            </div>
          )}

          {role === 'trainer' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                { id: 'individual', label: 'Individual Trainer', icon: <User className="w-6 h-6" />, desc: 'Freelance or independent mentor' },
                { id: 'institute', label: 'Institute Trainer', icon: <Building2 className="w-6 h-6" />, desc: 'Representing a school or center' }
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => { setTrainerType(type.id as TrainerType); nextStep(); }}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#f0591f]/40 flex flex-col items-center text-center gap-3 transition-all"
                >
                  <div className="text-[#f0591f]">{type.icon}</div>
                  <span className="text-lg font-bold text-white">{type.label}</span>
                  <span className="text-xs text-[#71717a]">{type.desc}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* STEP 3: Personal Details Form */}
      {step === 3 && (
        <div className="animate-fade-in relative z-10">
          {renderStepIndicators(3)}
          
          <button onClick={prevStep} className="absolute left-0 top-0 p-2 text-[#a1a1aa] hover:text-white transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Personal Details</h2>
            <p className="text-[#a1a1aa] text-sm">Complete your profile to continue.</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 border-dashed flex flex-col items-center justify-center text-[#71717a] group-hover:border-[#f0591f]/50 group-hover:text-[#f0591f] transition-all overflow-hidden">
                <Camera className="w-6 h-6 mb-1" />
                <span className="text-[10px] font-semibold">Upload</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-[#a1a1aa] mb-1.5 ml-1">First Name</label>
              <input type="text" className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-[#71717a] focus:border-[#f0591f] focus:outline-none transition-colors" placeholder="e.g. Ali" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#a1a1aa] mb-1.5 ml-1">Last Name</label>
              <input type="text" className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-[#71717a] focus:border-[#f0591f] focus:outline-none transition-colors" placeholder="e.g. Khan" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs font-bold text-[#a1a1aa] mb-1.5 ml-1">Phone Number</label>
            <div className="flex">
              <div className="px-4 py-3 bg-white/[0.05] border border-r-0 border-white/10 rounded-l-xl text-white flex items-center justify-center">
                <span className="text-sm">🇵🇰 +92</span>
              </div>
              <input type="tel" className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-r-xl text-white placeholder-[#71717a] focus:border-[#f0591f] focus:outline-none transition-colors" placeholder="300 1234567" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div>
              <label className="block text-xs font-bold text-[#a1a1aa] mb-1.5 ml-1">Country</label>
              <input type="text" defaultValue="Pakistan" className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl text-white focus:outline-none" readOnly />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#a1a1aa] mb-1.5 ml-1">City</label>
              <input type="text" className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-[#71717a] focus:border-[#f0591f] focus:outline-none transition-colors" placeholder="e.g. Karachi" />
            </div>
          </div>

          <button onClick={handleComplete} className="w-full py-4 bg-[#f0591f] hover:bg-[#d94f17] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(240,89,31,0.2)] hover:shadow-[0_0_30px_rgba(240,89,31,0.4)] active:scale-[0.98] flex items-center justify-center gap-2">
            Complete Setup <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
