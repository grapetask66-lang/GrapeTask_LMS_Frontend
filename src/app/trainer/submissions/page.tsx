import React from 'react';
import Link from 'next/link';
import { CheckSquare, Search, Filter, Eye } from 'lucide-react';

export default function StudentSubmissionsPage() {
  const submissions = [
    { id: '101', student: 'Sarah Khan', task: 'React Portfolio', module: 'Video 5', status: 'Pending', date: '2 hours ago', avatar: 'SK' },
    { id: '102', student: 'Ali Raza', task: 'UI Wireframes', module: 'Video 2', status: 'Reviewed', date: '1 day ago', avatar: 'AR' },
    { id: '103', student: 'Zainab B.', task: 'Python Script', module: 'Video 1', status: 'Pending', date: '3 days ago', avatar: 'ZB' },
  ];

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6 sm:mb-10">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">Student Submissions</h1>
          <p className="text-sm sm:text-base text-[#94a3b8]">Review and grade assignments and summaries.</p>
        </div>
        
        <div className="flex w-full sm:w-auto gap-2 sm:gap-3">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full sm:w-auto bg-[#0f172a] border border-[#1e293b] rounded-xl pl-9 sm:pl-10 pr-4 py-2.5 text-sm sm:text-base text-white focus:border-[#f0591f] focus:outline-none transition-colors"
            />
          </div>
          <button className="flex items-center gap-1.5 sm:gap-2 bg-[#0f172a] border border-[#1e293b] text-white px-3 sm:px-4 py-2.5 rounded-xl hover:bg-[#1e293b] transition-colors whitespace-nowrap text-sm sm:text-base">
            <Filter className="w-4 h-4" /> <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>

      <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-2xl sm:rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] transition-all duration-700 transform-style-3d hover:-translate-y-2 hover:scale-[1.01] hover:border-orange-500/30 hover:shadow-[0_20px_60px_rgba(240,89,31,0.2)] overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-[#1e293b] bg-[#020617]/50">
              <th className="p-5 text-xs font-bold text-[#64748b] uppercase tracking-wider">Student</th>
              <th className="p-5 text-xs font-bold text-[#64748b] uppercase tracking-wider">Task</th>
              <th className="p-5 text-xs font-bold text-[#64748b] uppercase tracking-wider">Submitted</th>
              <th className="p-5 text-xs font-bold text-[#64748b] uppercase tracking-wider">Status</th>
              <th className="p-5 text-xs font-bold text-[#64748b] uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((sub) => (
              <tr key={sub.id} className="border-b border-[#1e293b] hover:bg-white/[0.02] transition-colors group">
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {sub.avatar}
                    </div>
                    <span className="font-bold text-white group-hover:text-[#f0591f] transition-colors">{sub.student}</span>
                  </div>
                </td>
                <td className="p-5">
                  <p className="font-medium text-white">{sub.task}</p>
                  <p className="text-xs text-[#64748b]">{sub.module}</p>
                </td>
                <td className="p-5 text-sm text-[#94a3b8]">{sub.date}</td>
                <td className="p-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    sub.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'
                  }`}>
                    {sub.status}
                  </span>
                </td>
                <td className="p-5 text-right">
                  <Link href={`/trainer/submissions/${sub.id}`}>
                    <button className="p-2 rounded-lg bg-[#1e293b] text-white hover:bg-[#f0591f] transition-colors shadow-md">
                      <Eye className="w-5 h-5" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
