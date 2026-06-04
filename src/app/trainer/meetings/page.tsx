import React from 'react';
import { Video, Calendar, Clock, Link as LinkIcon, Plus, Users } from 'lucide-react';

export default function MeetingsPage() {
  const meetings = [
    { id: 1, title: 'Weekly Live Q&A - Web Dev', date: 'Tomorrow', time: '10:00 PM', duration: '60 min', students: 45, status: 'Upcoming' },
    { id: 2, title: 'React Project Review', date: 'Fri, Oct 12', time: '8:00 PM', duration: '90 min', students: 20, status: 'Scheduled' },
  ];

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-10">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">Live Q&A Sessions</h1>
          <p className="text-sm sm:text-base text-[#94a3b8]">Schedule and manage your weekly live meetings.</p>
        </div>
        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#f0591f] to-orange-500 hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(240,89,31,0.3)] transition-all active:scale-95">
          <Plus className="w-5 h-5" /> Schedule Meeting
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 transition-all duration-700 transform-style-3d hover:-translate-y-2 hover:scale-[1.02] hover:border-orange-500/50 hover:shadow-[0_20px_60px_rgba(240,89,31,0.2)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full pointer-events-none group-hover:bg-purple-500/10 transition-colors" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400 border border-purple-500/20">
                <Video className="w-8 h-8" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1e293b] text-[#94a3b8] mb-2 inline-block">
                  {meeting.status}
                </span>
                <h3 className="text-xl font-bold text-white">{meeting.title}</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-[#cbd5e1]">
                <Calendar className="w-4 h-4 text-[#64748b]" /> {meeting.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-[#cbd5e1]">
                <Clock className="w-4 h-4 text-[#64748b]" /> {meeting.time} ({meeting.duration})
              </div>
              <div className="flex items-center gap-2 text-sm text-[#cbd5e1] col-span-2">
                <Users className="w-4 h-4 text-[#64748b]" /> {meeting.students} Students Enrolled
              </div>
            </div>
            
            <div className="flex items-center gap-3 pt-4 border-t border-[#1e293b]">
              <button className="flex-1 bg-[#1e293b] hover:bg-white hover:text-black text-white py-3 rounded-xl font-bold transition-all border border-[#334155]">
                Start Meeting
              </button>
              <button className="p-3 bg-[#1e293b] hover:bg-[#334155] rounded-xl text-[#94a3b8] transition-colors border border-[#334155]">
                <LinkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
