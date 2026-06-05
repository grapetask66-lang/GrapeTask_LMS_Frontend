'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Field, TextArea, TextInput } from '@/components/ui/Field';
import { PageHeader } from '../components/TrainerShared';
import { getVideos as apiGetVideos, addSummaryTask as apiAddSummaryTask } from '@/services/trainerApi';
import { useToastStore } from '@/store/toast-store';
import { getErrorMessage } from '@/utils/errorParser';

type Video = any;

export function SummaryTaskScreen({ courseId, videoId }: { courseId: string; videoId: string }) {
  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToastStore();

  useEffect(() => {
    apiGetVideos(courseId).then((res) => {
      setVideo((res.data || res || []).find((x: any) => String(x.id) === String(videoId)) || null);
    }).catch(console.error);
  }, [courseId, videoId]);

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    try {
      setLoading(true);
      await apiAddSummaryTask(videoId, {
        prompt: fd.get('prompt'),
        minimumWords: Number(fd.get('minimumWords')) || 150,
        passingCriteria: fd.get('passingCriteria'),
        points: 10
      });
      showToast('Summary task configured successfully.', 'success');
    } catch (err) {
      console.error(err);
      showToast(getErrorMessage(err, 'Save summary failed.'), 'error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8 pb-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <Link href={`/trainer/courses/${courseId}/videos`} className="hover:text-white transition-colors">Curriculum</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-300">Summary Task</span>
      </div>

      <PageHeader title="Written Summary Task" caption={`Configure essay/summary requirements for: ${video?.title ?? 'Lesson'}`} />

      <Card className="border-gray-700/50 bg-gray-900/60 shadow-xl p-8">
        <form className="space-y-6" onSubmit={handleSave}>
          <Field label="Task Instructions & Prompt"><TextArea name="prompt" className="min-h-[120px]" placeholder="Summarize the key architectural decisions discussed in this lesson..." required /></Field>

          <div className="grid gap-6 sm:grid-cols-[200px_1fr]">
            <Field label="Minimum Words"><TextInput name="minimumWords" type="number" min={50} defaultValue={150} required /></Field>
            <Field label="Passing Criteria / Rubric"><TextInput name="passingCriteria" placeholder="Must include mentions of React, state, and props..." required /></Field>
          </div>

          <div className="pt-4 border-t border-gray-800">
            <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto shadow-lg shadow-orange-500/20">
              <FileText className="mr-2 h-4 w-4" />{loading ? 'Saving Task...' : 'Configure Summary Task'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
