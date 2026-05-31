import React from 'react';
import OnboardingFlow from '@/components/auth/OnboardingFlow';

export const metadata = {
  title: 'Onboarding | GrapeTask LMS',
  description: 'Complete your GrapeTask LMS profile setup',
};

export default function OnboardingPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      {/* Branding */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50">
        <div className="text-xl font-black text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f0591f] to-[#ff7a45] flex items-center justify-center shadow-lg">
            <span className="text-white text-lg leading-none tracking-tighter">G</span>
          </div>
          GrapeTask<span className="text-[#f0591f]">.</span>
        </div>
      </div>

      <OnboardingFlow />
    </div>
  );
}
