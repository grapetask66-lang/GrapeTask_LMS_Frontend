import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { TrainerDashboard } from '@/features/trainer/TrainerDashboard';

export default function TrainerDashboardPage() {
  return (
    <ProtectedRoute>
      <div className="p-4 sm:p-8">
        <TrainerDashboard />
      </div>
    </ProtectedRoute>
  );
}
