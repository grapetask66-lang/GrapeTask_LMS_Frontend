import { TrainerLayout } from '@/features/trainer/TrainerLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { SubmissionsScreen } from '@/features/trainer/screens/SubmissionsScreen';

export default function SubmissionsPage() {
  return (
    <ProtectedRoute>
      <TrainerLayout>
        <div className="p-6 lg:p-8">
          <SubmissionsScreen />
        </div>
      </TrainerLayout>
    </ProtectedRoute>
  );
}
