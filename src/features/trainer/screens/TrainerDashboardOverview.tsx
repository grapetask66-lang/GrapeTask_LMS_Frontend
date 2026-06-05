'use client';

import { BadgeCheck, BookOpen, ClipboardCheck, GraduationCap, Save } from 'lucide-react';
import { Card, CardTitle } from '@/components/ui/Card';
import { PageHeader } from '../components/TrainerShared';
import { CoursesTable } from '../components/CoursesTable';
import { trainerLevels } from '../trainerModuleData';
import { useTrainerData } from '../hooks/useTrainerData';

export function TrainerDashboardOverview() {
  const { courses, loading } = useTrainerData();
  const stats = [
    { label: 'Total Courses', value: courses.length, icon: BookOpen, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { label: 'Active Courses', value: courses.filter((c: any) => c.status === 'approved').length, icon: BadgeCheck, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { label: 'Drafts', value: courses.filter((c: any) => c.status === 'draft').length, icon: Save, color: 'text-gray-400', bg: 'bg-gray-400/10' },
    { label: 'Pending Approval', value: courses.filter((c: any) => c.status === 'pending_review').length, icon: ClipboardCheck, color: 'text-amber-400', bg: 'bg-amber-400/10' },
  ];

  if (loading) return <div className="flex h-64 items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" /></div>;

  return (
    <div className="space-y-8 pb-8">
      <PageHeader title="Trainer Dashboard" caption="Welcome back! Here is an overview of your course creation progress and approval statuses." />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="group relative overflow-hidden border-gray-700/50 bg-gray-800/40 p-6 transition-all hover:border-gray-600 hover:bg-gray-800/60 hover:shadow-lg">
              <div className="absolute -right-4 -top-4 rounded-full bg-gradient-to-br from-white/5 to-transparent p-8 blur-2xl group-hover:bg-white/10" />
              <div className="relative flex flex-col gap-4">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-3xl font-bold tracking-tight text-white">{stat.value}</p>
                  <p className="mt-1 text-sm font-medium text-gray-400">{stat.label}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <CoursesTable compact courses={courses} />

        <Card className="border-gray-700/50 bg-gray-800/30">
          <CardTitle title="Teaching Levels" caption="Your approved instructional tiers." />
          <div className="grid gap-3">
            {trainerLevels.map((level) => (
              <div key={level.value} className="group flex items-start gap-4 rounded-xl border border-gray-700/40 bg-gray-800/60 p-4 transition-colors hover:border-orange-500/30">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                  <GraduationCap className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">{level.label}</h3>
                  <p className="mt-1 text-xs text-gray-500 line-clamp-2">{level.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
