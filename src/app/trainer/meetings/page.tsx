import { TrainerLayout } from '@/features/trainer/TrainerLayout';
import { ProtectedRoute } from '@/components/layout/ProtectedRoute';
import { MeetingsScreen } from '@/features/trainer/screens/MeetingsScreen';

export default function MeetingsPage() {
  return (
    <ProtectedRoute>
      <TrainerLayout>
        <div className="p-6 lg:p-8">
          <MeetingsScreen />
        </div>
      </TrainerLayout>
    </ProtectedRoute>
  );
}
