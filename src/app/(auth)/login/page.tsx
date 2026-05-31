import React, { Suspense } from 'react';
import DoubleSliderAuth from '@/components/auth/DoubleSliderAuth';

export const metadata = {
  title: 'Sign In | GrapeTask LMS',
  description: 'Sign in to access your GrapeTask LMS dashboard',
};

export default function LoginPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-0 sm:p-4">
      {/* Branding */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50">
        <div className="text-xl font-black text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f0591f] to-[#ff7a45] flex items-center justify-center shadow-lg shadow-[#f0591f]/20">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          GrapeTask<span className="text-[#f0591f]">.</span>
        </div>
      </div>
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#f0591f] border-t-transparent rounded-full animate-spin"></div></div>}>
        <DoubleSliderAuth />
      </Suspense>
    </div>
  );
}
