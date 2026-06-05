'use client';

import { PageHeader } from '../components/TrainerShared';
import { CoursesTable } from '../components/CoursesTable';
import { useTrainerData } from '../hooks/useTrainerData';

export function MyCoursesScreen() {
  const { courses, loading } = useTrainerData();

  if (loading) return <div className="flex h-64 items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" /></div>;

  return (
    <div className="space-y-8 pb-8">
      <PageHeader title="My Courses" caption="Comprehensive management for drafts, approval submissions, and live course monitoring." />
      <CoursesTable courses={courses} />
    </div>
  );
}
