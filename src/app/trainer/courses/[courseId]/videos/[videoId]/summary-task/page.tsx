import { TrainerLayout } from '@/features/trainer/TrainerLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { SummaryTaskScreen } from '@/features/trainer/TrainerModuleScreens';

interface SummaryTaskPageProps {
  params: Promise<{ courseId: string; videoId: string }>;
}

export default async function TrainerSummaryTaskPage({ params }: SummaryTaskPageProps) {
  const { courseId, videoId } = await params;

  return (
    <ProtectedRoute>
      <TrainerLayout>
        <SummaryTaskScreen courseId={courseId} videoId={videoId} />
      </TrainerLayout>
    </ProtectedRoute>
  );
}
