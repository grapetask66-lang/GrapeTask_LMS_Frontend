'use client';

import React from 'react';
import { useAuthStore } from '@/store/auth-store';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Users, 
  BookOpen, 
  DollarSign, 
  Activity,
  MoreHorizontal,
  Clock,
  CheckCircle2,
  Calendar
} from 'lucide-react';

export function TrainerDashboardOverview() {
  const { user } = useAuthStore();

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6 font-sans bg-[#080808] min-h-screen text-gray-200">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Welcome back, {user?.name || 'Trainer'}</h1>
          <p className="text-gray-500 text-sm">Here is your performance summary for this week.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-[#121212] border border-white/5 rounded-full text-sm text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>Last 7 Days</span>
          </div>
          <button className="px-5 py-2 bg-[#CCFF00] hover:bg-[#b3e600] text-black font-semibold rounded-full transition-colors text-sm">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Earnings" 
          value="$4,250.00" 
          trend="+12.5%" 
          isPositive={true} 
          icon={<DollarSign className="w-5 h-5 text-[#CCFF00]" />} 
        />
        <StatCard 
          title="Active Students" 
          value="1,248" 
          trend="+5.2%" 
          isPositive={true} 
          icon={<Users className="w-5 h-5 text-[#CCFF00]" />} 
        />
        <StatCard 
          title="Course Completion" 
          value="68%" 
          trend="-2.1%" 
          isPositive={false} 
          icon={<BookOpen className="w-5 h-5 text-[#CCFF00]" />} 
        />
        <StatCard 
          title="Engagement Rate" 
          value="84.2%" 
          trend="+8.4%" 
          isPositive={true} 
          icon={<Activity className="w-5 h-5 text-[#CCFF00]" />} 
        />
      </div>

      {/* Main Charts & Activity Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Large Chart Area (Earnings Overview) */}
        <div className="lg:col-span-2 bg-[#121212] border border-white/5 rounded-3xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex items-center justify-between mb-8 relative z-10">
            <h2 className="text-lg font-bold text-white">Earnings Overview</h2>
            <button className="p-2 hover:bg-white/5 rounded-full text-gray-500 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* Dummy Chart Area */}
          <div className="h-64 w-full relative flex items-end justify-between gap-2 z-10">
            {/* Y-axis Labels */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-600 pb-8">
              <span>$5k</span>
              <span>$4k</span>
              <span>$3k</span>
              <span>$2k</span>
              <span>$1k</span>
              <span>$0</span>
            </div>

            {/* Bars (Mock Data) */}
            <div className="flex-1 flex items-end justify-between h-full pl-8 pb-8 gap-2">
              {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
                <div key={i} className="w-full flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-full relative flex justify-center">
                    {/* Hover tooltip */}
                    <div className="absolute -top-10 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${(height * 50).toFixed(0)}
                    </div>
                    {/* Bar */}
                    <div 
                      className="w-full max-w-[40px] bg-gradient-to-t from-[#CCFF00]/10 to-[#CCFF00] rounded-t-lg opacity-80 group-hover:opacity-100 transition-all duration-300"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* X-axis Labels */}
            <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-600 px-4">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Right Column: Recent Activity & Tasks */}
        <div className="space-y-6">
          
          {/* Quick Actions / Status */}
          <div className="bg-[#CCFF00] rounded-3xl p-6 text-black relative overflow-hidden">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Live Session</h3>
              <p className="text-sm font-medium opacity-80 mb-6">You have a live Q&A session starting in 15 minutes.</p>
              <button className="w-full py-3 bg-black text-[#CCFF00] font-bold rounded-full hover:bg-gray-900 transition-colors shadow-lg">
                Join Session Now
              </button>
            </div>
          </div>

          {/* Recent Submissions */}
          <div className="bg-[#121212] border border-white/5 rounded-3xl p-6">
            <h2 className="text-lg font-bold text-white mb-6">Recent Submissions</h2>
            
            <div className="space-y-4">
              {[
                { name: 'Sarah J.', task: 'React Project', time: '2m ago', status: 'pending' },
                { name: 'Mike T.', task: 'Python Quiz', time: '1h ago', status: 'reviewed' },
                { name: 'Emma W.', task: 'UI Design Task', time: '3h ago', status: 'pending' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-sm text-white border border-white/10">
                    {item.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.task}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[10px] text-gray-600 flex items-center gap-1"><Clock className="w-3 h-3" /> {item.time}</span>
                    {item.status === 'pending' ? (
                      <span className="w-2 h-2 rounded-full bg-orange-500" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-2 text-sm font-medium text-gray-400 hover:text-[#CCFF00] transition-colors">
              View All Submissions
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

// Reusable Stat Card Component
function StatCard({ title, value, trend, isPositive, icon }: any) {
  return (
    <div className="bg-[#121212] border border-white/5 rounded-3xl p-6 hover:border-[#CCFF00]/30 transition-colors group">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-2xl bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00] group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-[#CCFF00]' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          {trend}
        </div>
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}
