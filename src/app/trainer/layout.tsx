'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  RotateCcw, 
  CheckSquare, 
  MessageSquare, 
  Video, 
  FileBarChart, 
  Building2, 
  DollarSign, 
  History, 
  Bell, 
  ShieldCheck, 
  Layers,
  LayoutDashboard,
  Menu,
  X
} from 'lucide-react';

export default function TrainerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: 'Dashboard', href: '/trainer/dashboard', icon: LayoutDashboard },
    { name: 'Assignments', href: '/trainer/assignments', icon: BookOpen },
    { name: 'Retry Qs', href: '/trainer/assessments/retry', icon: RotateCcw },
    { name: 'Submissions', href: '/trainer/submissions', icon: CheckSquare },
    { name: 'Chat', href: '/trainer/chat', icon: MessageSquare },
    { name: 'Live Q&A', href: '/trainer/meetings', icon: Video },
    { name: 'Student Reports', href: '/trainer/reports/students', icon: FileBarChart },
    { name: 'Institution', href: '/trainer/reports/institution', icon: Building2 },
    { name: 'Earnings', href: '/trainer/earnings', icon: DollarSign },
    { name: 'Revenue', href: '/trainer/earnings/history', icon: History },
    { name: 'Notifications', href: '/trainer/notifications', icon: Bell },
    { name: 'Trainer Approvals', href: '/trainer/admin/trainers', icon: ShieldCheck },
    { name: 'Course Approvals', href: '/trainer/admin/courses', icon: Layers },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#020617] text-white overflow-hidden font-sans p-4 gap-6">
      
      {/* CSS for complex blob animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob1 {
          0% { transform: translate(0px, 0px) scale(1) translateZ(0); }
          33% { transform: translate(30px, -50px) scale(1.1) translateZ(0); }
          66% { transform: translate(-20px, 20px) scale(0.9) translateZ(0); }
          100% { transform: translate(0px, 0px) scale(1) translateZ(0); }
        }
        @keyframes blob2 {
          0% { transform: translate(0px, 0px) scale(1) translateZ(0); }
          33% { transform: translate(-30px, 50px) scale(1.1) translateZ(0); }
          66% { transform: translate(20px, -20px) scale(0.9) translateZ(0); }
          100% { transform: translate(0px, 0px) scale(1) translateZ(0); }
        }
        .animate-blob1 { animation: blob1 10s infinite alternate ease-in-out; will-change: transform; }
        .animate-blob2 { animation: blob2 12s infinite alternate ease-in-out; will-change: transform; }
      `}} />

      {/* Glow Effects (Animation Vibe: pin.it/10obDGXOZ) - Optimized for Performance */}
      <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#f0591f] opacity-[0.25] rounded-full blur-[120px] pointer-events-none animate-blob1" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600 opacity-[0.25] rounded-full blur-[120px] pointer-events-none animate-blob2" />
      <div className="fixed top-[40%] left-[30%] w-[40%] h-[40%] bg-blue-600 opacity-[0.15] rounded-full blur-[100px] pointer-events-none animate-blob1" style={{ animationDelay: '2s' }} />

      {/* Mobile Hamburger Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(true)}
        className="md:hidden fixed top-6 left-6 z-40 p-3 rounded-2xl bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 transition-colors shadow-xl"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Floating Detached Sidebar (Pinterest Style: pin.it/5HKP49RwL) */}
      <aside className={`w-72 bg-[#0f172a]/80 backdrop-blur-3xl border border-white/10 rounded-[32px] flex flex-col relative z-50 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'fixed inset-y-4 left-4 right-auto translate-x-0' : 'hidden md:flex translate-x-0'}`}>
        
        {/* Mobile Close Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors z-50"
        >
          <X className="w-5 h-5" />
        </button>
        
        {/* Animated Top Glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f0591f] to-transparent opacity-50" />
        
        <div className="p-8 pb-4">
          <h2 className="text-3xl font-black bg-gradient-to-r from-[#f0591f] to-orange-400 bg-clip-text text-transparent drop-shadow-lg">GrapeTask</h2>
          <p className="text-[10px] text-[#94a3b8] mt-2 tracking-[0.2em] uppercase font-bold">Trainer Module</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-2 px-4 space-y-1.5 hide-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            // Since we're using a single layout, we can simulate an active state based on current path, but for now we'll just style the hover states gorgeously.
            return (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3.5 rounded-2xl text-[#94a3b8] hover:bg-gradient-to-r hover:from-[#f0591f]/10 hover:to-transparent hover:text-white hover:border-l-2 hover:border-[#f0591f] border-l-2 border-transparent transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon className="w-5 h-5 group-hover:text-[#f0591f] transition-colors relative z-10" />
                <span className="font-bold text-sm tracking-wide relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-6 border-t border-white/5 bg-[#020617]/30 mt-2">
          <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-[2px] shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <div className="w-full h-full bg-[#020617] rounded-full flex items-center justify-center">
                  <span className="font-black text-sm text-white">TR</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0f172a]" />
            </div>
            <div>
              <p className="text-sm font-black text-white">Sarah Khan</p>
              <p className="text-[10px] text-[#f0591f] font-bold uppercase tracking-wider mt-0.5">Verified Trainer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area (Detached) */}
      <main className="flex-1 relative overflow-y-auto rounded-[32px] bg-[#020617] border border-white/5 shadow-2xl z-10 mt-16 md:mt-0 pt-6 md:pt-0">
        <div className="min-h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
