import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { TrainerDashboard } from '@/features/trainer/TrainerDashboard';
import { TrainerLayout } from '@/features/trainer/TrainerLayout';

export default function TrainerDashboardPage() {
  return (
    <ProtectedRoute>
      <TrainerLayout>
        <TrainerDashboard />
      </TrainerLayout>
    </ProtectedRoute>
  );
}
