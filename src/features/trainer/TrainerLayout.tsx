'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  BookOpen, Plus, FileText, Calendar, LayoutDashboard,
  User, LogOut, Bell, Clock, Menu, Search, GraduationCap, ChevronRight
} from 'lucide-react';
import { useAuthStore } from '@/store/auth-store';
import { submissionsApi } from '@/lib/api';

// Type definition for trainer submissions
interface TrainerSubmission {
  reviewed: boolean;
  // Extend with other fields if needed
}

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', route: '/trainer/dashboard' },
  { icon: User, label: 'Profile', route: '/trainer/profile' },
  { icon: BookOpen, label: 'My Courses', route: '/trainer/courses' },
  { icon: Plus, label: 'Create Course', route: '/trainer/create-course' },
  { icon: FileText, label: 'Submissions', route: '/trainer/submissions' },
  { icon: Calendar, label: 'Meetings', route: '/trainer/meetings' },
];

export function TrainerLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    submissionsApi.trainerList()
      .then((subs: TrainerSubmission[]) => {
        setPendingCount(subs.filter((s) => !s.reviewed).length);
      })
      .catch(() => {});
  }, []);

  const handleNavigation = (route: string) => {
    setSidebarOpen(false);
    router.push(route);
  };

  // Determine active route
  const getActiveRoute = () => {
    if (pathname.includes('/trainer/profile')) return 'Profile';
    if (pathname.includes('/trainer/courses')) return 'My Courses';
    if (pathname.includes('/trainer/create-course')) return 'Create Course';
    if (pathname.includes('/trainer/submissions')) return 'Submissions';
    if (pathname.includes('/trainer/meetings')) return 'Meetings';
    return 'Dashboard';
  };

  const activeRoute = getActiveRoute();

  return (
    <div className="flex min-h-screen bg-[#060708]">
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.98); } to { opacity: 1; transform: scale(1); } }
        @keyframes staggeredFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes pulse-subtle { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        @keyframes ping-slow { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes shimmer { from { transform: translateX(-100%); } to { transform: translateX(200%); } }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
      `}</style>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* FIXED SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 h-full w-[272px] z-50 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-[#0a0b0e] border-r border-gray-800/60 shadow-[4px_0_24px_rgba(0,0,0,0.4)]`}
      >
        <div className="h-16 flex items-center px-5 border-b border-gray-800/60 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center mr-3 shadow-[0_4px_12px_-2px_rgba(249,115,22,0.2)] transition-all duration-300 hover:shadow-[0_6px_16px_-2px_rgba(249,115,22,0.3)]">
            <GraduationCap className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <span className="text-white text-lg font-bold tracking-tight">Trainer Portal</span>
            <span className="block text-[10px] text-gray-600 font-medium tracking-wider uppercase">Dashboard</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
          <p className="px-4 text-[10px] font-semibold text-gray-600 uppercase tracking-widest mb-3">Main Menu</p>
          {sidebarItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavigation(item.route)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group relative ${
                item.label === activeRoute
                  ? 'bg-gradient-to-r from-orange-500/10 to-orange-500/5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] border border-orange-500/20'
                  : 'text-gray-500 hover:text-gray-200 hover:bg-white/[0.03] border border-transparent hover:border-gray-700/50'
              }`}
            >
              <div className={`relative ${item.label === activeRoute ? 'animate-[pulse-subtle_2s_ease-in-out_infinite]' : ''}`}>
                <item.icon
                  className={`w-5 h-5 transition-all duration-200 ${
                    item.label === activeRoute ? 'text-orange-500' : 'text-gray-600 group-hover:text-gray-400'
                  }`}
                />
                {item.label === activeRoute && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)] animate-[ping-slow_2s_ease-in-out_infinite]" />
                )}
              </div>
              <span className={`text-[14px] font-medium ${item.label === activeRoute ? 'text-white' : ''}`}>{item.label}</span>
              {item.label === activeRoute && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
              )}
              {item.label !== activeRoute && (
                <ChevronRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-50 transition-all duration-200 -translate-x-2 group-hover:translate-x-0" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-800/60 flex-shrink-0 space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500/5 to-transparent border border-orange-500/10">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center text-sm font-semibold text-orange-300 shadow-[0_4px_12px_-2px_rgba(249,115,22,0.2)]">
              {user?.name?.[0]?.toUpperCase() || 'T'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-white truncate">{user?.name || 'Trainer'}</p>
              <p className="text-[11px] text-gray-500 truncate">{user?.email || 'trainer@example.com'}</p>
            </div>
          </div>
          <button
            onClick={() => {
              logout();
              router.replace('/login');
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-red-400 hover:bg-red-500/5 border border-transparent hover:border-red-500/20 transition-all duration-200 group"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-[14px] font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 lg:ml-[272px] min-w-0 transition-all duration-300">
        <header className="sticky top-0 z-30 h-16 bg-[#0a0b0e]/80 backdrop-blur-xl border-b border-gray-800/60 flex items-center justify-between px-4 sm:px-6 lg:px-6 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 rounded-xl hover:bg-white/5 transition-all duration-200 active:scale-95"
            >
              <Menu className="w-5 h-5 text-gray-400" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-gray-600 uppercase tracking-[0.12em]">Dashboard</span>
              <ChevronRight className="w-3 h-3 text-gray-700" />
              <span className="text-[11px] text-gray-500 uppercase tracking-[0.12em]">Trainer</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-800/40 border border-gray-800/60">
              <Search className="w-4 h-4 text-gray-600" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm text-gray-400 placeholder-gray-600 outline-none w-32 focus:w-48 transition-all duration-300"
              />
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 px-3 py-2 rounded-xl bg-gray-800/40 border border-gray-800/60">
              <Clock className="w-3.5 h-3.5" />
              <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <button className="relative p-2 rounded-xl hover:bg-white/5 transition-all duration-200 active:scale-95">
              <Bell className="w-5 h-5 text-gray-400" />
              {pendingCount > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-orange-500 border-2 border-[#0a0b0e] shadow-[0_0_6px_rgba(249,115,22,0.5)] animate-[pulse-subtle_2s_ease-in-out_infinite]" />
              )}
            </button>
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_-2px_rgba(249,115,22,0.2)] transition-all duration-300 hover:shadow-[0_6px_16px_-2px_rgba(249,115,22,0.3)]">
              <GraduationCap className="w-[18px] h-[18px] text-orange-400" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0a0b0e] shadow-[0_0_6px_rgba(59,130,246,0.4)]" />
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-6 space-y-6 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
