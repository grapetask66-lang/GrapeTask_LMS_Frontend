import { TrainerLayout } from '@/features/trainer/TrainerLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { CourseDetailsScreen } from '@/features/trainer/TrainerModuleScreens';

interface CourseDetailsPageProps {
  params: Promise<{ courseId: string }>;
}

export default async function TrainerCourseDetailsPage({ params }: CourseDetailsPageProps) {
  const { courseId } = await params;

  return (
    <ProtectedRoute>
      <TrainerLayout>
        <CourseDetailsScreen courseId={courseId} />
      </TrainerLayout>
    </ProtectedRoute>
  );
}
