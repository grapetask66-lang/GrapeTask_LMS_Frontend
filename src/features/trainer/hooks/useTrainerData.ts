'use client';

import { useState, useEffect } from 'react';
import { getCourses as apiGetCourses } from '@/services/trainerApi';

export function useTrainerData() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    apiGetCourses()
      .then((res) => {
        if (!mounted) return;
        setCourses(res.data ?? res);
      })
      .catch((err) => {
        console.error('Failed to load trainer courses', err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);
  return { courses, setCourses, loading };
}
