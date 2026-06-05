import { TrainerLayout } from '@/features/trainer/TrainerLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { QuizManagementScreen } from '@/features/trainer/TrainerModuleScreens';

interface QuizPageProps {
  params: Promise<{ courseId: string; videoId: string }>;
}

export default async function TrainerQuizPage({ params }: QuizPageProps) {
  const { courseId, videoId } = await params;

  return (
    <ProtectedRoute>
      <TrainerLayout>
        <QuizManagementScreen courseId={courseId} videoId={videoId} />
      </TrainerLayout>
    </ProtectedRoute>
  );
}
