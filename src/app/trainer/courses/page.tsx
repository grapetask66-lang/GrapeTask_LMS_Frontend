import { TrainerLayout } from '@/features/trainer/TrainerLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { MyCoursesScreen } from '@/features/trainer/TrainerModuleScreens';

export default function TrainerCoursesPage() {
  return (
    <ProtectedRoute>
      <TrainerLayout>
        <MyCoursesScreen />
      </TrainerLayout>
    </ProtectedRoute>
  );
}
