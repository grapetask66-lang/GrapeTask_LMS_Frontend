import { TrainerLayout } from '@/features/trainer/TrainerLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { VideoUploadScreen } from '@/features/trainer/TrainerModuleScreens';

interface VideoUploadPageProps {
  params: Promise<{ courseId: string }>;
}

export default async function TrainerVideoUploadPage({ params }: VideoUploadPageProps) {
  const { courseId } = await params;

  return (
    <ProtectedRoute>
      <TrainerLayout>
        <VideoUploadScreen courseId={courseId} />
      </TrainerLayout>
    </ProtectedRoute>
  );
}
