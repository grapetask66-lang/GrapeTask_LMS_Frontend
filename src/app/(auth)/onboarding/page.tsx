import React from 'react';
import OnboardingFlow from '@/components/auth/OnboardingFlow';

export const metadata = {
  title: 'Setup Profile | GrapeTask LMS',
  description: 'Set up your GrapeTask profile to get started',
};

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-[#020617] overflow-hidden">
      <OnboardingFlow />
    </div>
  );
}
