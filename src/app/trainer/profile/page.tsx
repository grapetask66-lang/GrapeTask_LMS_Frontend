import { TrainerLayout } from '@/features/trainer/TrainerLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { TrainerProfileScreen } from '@/features/trainer/TrainerModuleScreens';

export default function TrainerProfilePage() {
  return (
    <ProtectedRoute>
      <TrainerLayout>
        <TrainerProfileScreen />
      </TrainerLayout>
    </ProtectedRoute>
  );
}
