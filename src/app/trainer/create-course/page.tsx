import { TrainerLayout } from '@/features/trainer/TrainerLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { CreateCourseScreen } from '@/features/trainer/TrainerModuleScreens';

export default function CreateTrainerCoursePage() {
  return (
    <ProtectedRoute>
      <TrainerLayout>
        <CreateCourseScreen />
      </TrainerLayout>
    </ProtectedRoute>
  );
}
