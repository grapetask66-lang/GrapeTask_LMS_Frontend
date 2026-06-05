import { TrainerLayout } from '@/features/trainer/TrainerLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { VideoListScreen } from '@/features/trainer/TrainerModuleScreens';

interface VideoListPageProps {
  params: Promise<{ courseId: string }>;
}

export default async function TrainerVideoListPage({ params }: VideoListPageProps) {
  const { courseId } = await params;

  return (
    <ProtectedRoute>
      <TrainerLayout>
        <VideoListScreen courseId={courseId} />
      </TrainerLayout>
    </ProtectedRoute>
  );
}
