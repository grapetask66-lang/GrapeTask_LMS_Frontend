import type { LearningLevel } from '@/types/domain';

export type TrainerCourseStatus = 'draft' | 'pending_review' | 'approved';

export interface TrainerCourseModule {
  id: string;
  title: string;
  description: string;
  category: string;
  level: LearningLevel;
  thumbnail: string;
  price: number;
  requirements: string[];
  outcomes: string[];
  status: TrainerCourseStatus;
  videos: TrainerVideoModule[];
}

export interface TrainerVideoModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoFile: string;
  thumbnail: string;
  order: number;
  mcqs: number;
  quizzes: number;
  summaryTask: string;
}

export const trainerLevels = [
  {
    value: 'school',
    label: 'School Level',
    detail: 'Beginner-friendly content with clear examples and guided practice.',
  },
  {
    value: 'college',
    label: 'College Level',
    detail: 'Intermediate practical content for skill-building projects.',
  },
  {
    value: 'university',
    label: 'University Level',
    detail: 'Advanced professional content for portfolio-ready outcomes.',
  },
] satisfies Array<{ value: LearningLevel; label: string; detail: string }>;

export const approvalStandards = [
  'HD video quality',
  'Clear audio',
  'Professional recording environment',
  'Organized course structure',
  'Strong assessment quality',
  'Clear educational value',
];

export const videoRequirements = [
  'HD quality upload',
  'Clear audio',
  'Professional environment',
  'DSLR or iPhone preferred',
];

export const trainerCourses: TrainerCourseModule[] = [
  {
    id: 'frontend-foundations',
    title: 'Frontend Foundations',
    description: 'Build responsive interfaces with HTML, CSS, TypeScript, and React basics.',
    category: 'Web Development',
    level: 'college',
    thumbnail: '/courses/frontend-foundations.jpg',
    price: 12000,
    requirements: ['Basic computer usage', 'Interest in web interfaces', 'Laptop with browser'],
    outcomes: ['Create responsive pages', 'Understand React components', 'Prepare a starter portfolio'],
    status: 'pending_review',
    videos: [
      {
        id: 'html-layouts',
        title: 'HTML Layouts and Semantics',
        description: 'Structure pages using accessible HTML sections and clean content hierarchy.',
        duration: '28 min',
        videoFile: 'html-layouts.mp4',
        thumbnail: 'html-layouts.jpg',
        order: 1,
        mcqs: 12,
        quizzes: 2,
        summaryTask: 'Write a short summary explaining semantic tags and page structure.',
      },
      {
        id: 'css-responsive',
        title: 'Responsive CSS Systems',
        description: 'Use flexible grids, spacing, and breakpoints for mobile and desktop layouts.',
        duration: '35 min',
        videoFile: 'responsive-css.mp4',
        thumbnail: 'responsive-css.jpg',
        order: 2,
        mcqs: 10,
        quizzes: 2,
        summaryTask: 'Summarize how responsive rules change layout across screen sizes.',
      },
    ],
  },
  {
    id: 'professional-react',
    title: 'Professional React Projects',
    description: 'Create production-style React screens with reusable components and state flows.',
    category: 'Software Engineering',
    level: 'university',
    thumbnail: '/courses/professional-react.jpg',
    price: 18000,
    requirements: ['JavaScript fundamentals', 'Basic React knowledge', 'Git basics'],
    outcomes: ['Design component systems', 'Manage form state', 'Ship polished project screens'],
    status: 'draft',
    videos: [
      {
        id: 'component-architecture',
        title: 'Component Architecture',
        description: 'Plan reusable components, page boundaries, and data ownership.',
        duration: '42 min',
        videoFile: 'component-architecture.mp4',
        thumbnail: 'component-architecture.jpg',
        order: 1,
        mcqs: 15,
        quizzes: 3,
        summaryTask: 'Explain the difference between page components and shared UI components.',
      },
    ],
  },
];

export function getTrainerCourse(courseId: string) {
  return trainerCourses.find((course) => course.id === courseId) ?? trainerCourses[0];
}

export function getTrainerVideo(courseId: string, videoId: string) {
  const course = getTrainerCourse(courseId);
  return course.videos.find((video) => video.id === videoId) ?? course.videos[0];
}
