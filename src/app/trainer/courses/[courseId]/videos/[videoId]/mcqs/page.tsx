import { TrainerLayout } from '@/features/trainer/TrainerLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { McqManagementScreen } from '@/features/trainer/TrainerModuleScreens';

interface McqPageProps {
  params: Promise<{ courseId: string; videoId: string }>;
}

export default async function TrainerMcqPage({ params }: McqPageProps) {
  const { courseId, videoId } = await params;

  return (
    <ProtectedRoute>
      <TrainerLayout>
        <McqManagementScreen courseId={courseId} videoId={videoId} />
      </TrainerLayout>
    </ProtectedRoute>
  );
}
