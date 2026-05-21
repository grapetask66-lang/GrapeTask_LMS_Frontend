'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FormEvent,
  ReactNode,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import { Button } from '@/components/ui/Button';
import { Field, SelectInput, TextArea, TextInput } from '@/components/ui/Field';
import { useAuthStore } from '@/store/auth-store';
import type { LearnerCategory, LearningLevel, Role } from '@/types/domain';
import type { StaticImageData } from 'next/image';
import {
  LogIn,
  UserPlus,
  ShieldCheck,
  ArrowRight,
  GraduationCap,
  Users,
  Eye,
  EyeOff,
} from 'lucide-react';

import login1 from './login-1.png';
import login2 from './login-2.png';
import login3 from './login-3.png';

import register1 from './login-1.png';
import register2 from './login-2.png';
import register3 from './login-3.png';

/* ────────────────────────────────────────────
   Separate image sets for Login & Register
   ──────────────────────────────────────────── */

const loginImages = [
  {
    src: login1,
    title: 'Secure Access',
    subtitle: 'Your credentials unlock a personalized learning workspace.',
    icon: ShieldCheck,
  },
  {
    src: login2,
    title: 'Welcome Back',
    subtitle: 'Pick up right where you left off with smart dashboards.',
    icon: LogIn,
  },
  {
    src: login3,
    title: 'Protected Login',
    subtitle: 'Enterprise-grade security for every session.',
    icon: ShieldCheck,
  },
];

const registerImages = [
  {
    src: register1,
    title: 'Join the Community',
    subtitle: 'Step into a vibrant network of learners and trainers.',
    icon: Users,
  },
  {
    src:register2,
    title: 'Build Your Profile',
    subtitle: 'Create your account and customize your learning path.',
    icon: UserPlus,
  },
  {
    src:register3,
    title: 'New Beginnings',
    subtitle: 'Start your journey toward knowledge and growth.',
    icon: GraduationCap,
  },
];

/* ────────────────────────────────────────────
   Login Panel
   ──────────────────────────────────────────── */

export function LoginPanel() {
  const router = useRouter();
  const { login, loading, error } = useAuthStore();
  const [email, setEmail] = useState('admin@grapetask.com');
  const [password, setPassword] = useState('Password123!');
  

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      const next = await login({ email, password });
      router.replace(next);
    } catch {
      // Auth store already sets the error message.
    }
  }

  return (
    <AuthFrame
      title="Welcome Back"
      caption="Sign in to continue your GrapeTask LMS workflow."
      images={loginImages}
      badgeText="Sign In"
      badgeIcon={LogIn}
    >
      <form className="space-y-3.5" onSubmit={onSubmit}>
        <Field label="Email">
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            required
          />
        </Field>
        <Field label="Password">
          <TextInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="••••••••"
            required
            className="pr-10"
          />
        </Field>
        {error ? (
          <p className="text-xs font-medium text-red-400 animate-in fade-in slide-in-from-top-1 duration-300">
            {error}
          </p>
        ) : null}
        <Button
          type="submit"
          disabled={loading}
          className="h-10 w-full rounded-lg bg-orange-500 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 hover:shadow-orange-500/30 active:scale-[0.98] transition-all duration-200"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Signing in…
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Login <ArrowRight className="size-4" />
            </span>
          )}
        </Button>
      </form>
      <p className="mt-4 text-center text-xs text-slate-400">
        New to GrapeTask LMS?{' '}
        <Link href="/register" className="font-medium text-orange-400 hover:text-orange-300 transition-colors">
          Create an account
        </Link>
      </p>
    </AuthFrame>
  );
}

/* ────────────────────────────────────────────
   Register Panel
   ──────────────────────────────────────────── */

export function RegisterPanel() {
  const router = useRouter();
  const { register, loading, error } = useAuthStore();
  const [role, setRole] = useState<Role>('learner');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [learnerCategory, setLearnerCategory] = useState<LearnerCategory>('individual_learner');
  const [trainerLevel, setTrainerLevel] = useState<LearningLevel>('university');
  const [portfolio, setPortfolio] = useState('');
  const [teachingExperience, setTeachingExperience] = useState('');
  const [joiningReason, setJoiningReason] = useState('');

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      const next = await register({
        name,
        email,
        password,
        role,
        learnerCategory: role === 'learner' ? learnerCategory : undefined,
        trainerLevel: role === 'trainer' ? trainerLevel : undefined,
        portfolio: role === 'trainer' ? portfolio : undefined,
        teachingExperience: role === 'trainer' ? teachingExperience : undefined,
        joiningReason: role === 'trainer' ? joiningReason : undefined,
      });
      router.replace(next);
    } catch {
      // Auth store already sets the error message.
    }
  }

  return (
    <AuthFrame
      title="Create Account"
      caption="Choose your LMS role and enter the details needed for access."
      images={registerImages}
      badgeText="Register"
      badgeIcon={UserPlus}
    >
      <form className="space-y-3.5" onSubmit={onSubmit}>
        <Field label="Account Type">
          <SelectInput value={role} onChange={(e) => setRole(e.target.value as Role)}>
            <option value="learner">Learner</option>
            <option value="trainer">Trainer</option>
            <option value="institute_head">Institute Head</option>
          </SelectInput>
        </Field>
        <Field label="Name">
          <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" required />
        </Field>
        <Field label="Email">
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            required
          />
        </Field>
        <Field label="Password">
          <TextInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Min 8 characters"
            minLength={8}
            required
            className="pr-10"
          />
        </Field>
        {role === 'learner' ? (
          <Field label="Learner Category">
            <SelectInput
              value={learnerCategory}
              onChange={(e) => setLearnerCategory(e.target.value as LearnerCategory)}
            >
              <option value="school_student">School Student</option>
              <option value="college_student">College Student</option>
              <option value="university_student">University Student</option>
              <option value="individual_learner">Individual Learner</option>
            </SelectInput>
          </Field>
        ) : null}
        {role === 'trainer' ? (
          <>
            <Field label="Trainer Level">
              <SelectInput
                value={trainerLevel}
                onChange={(e) => setTrainerLevel(e.target.value as LearningLevel)}
              >
                <option value="school">School</option>
                <option value="college">College</option>
                <option value="university">University</option>
              </SelectInput>
            </Field>
            <Field label="Portfolio">
              <TextInput value={portfolio} onChange={(e) => setPortfolio(e.target.value)} placeholder="Portfolio URL" />
            </Field>
            <Field label="Teaching Experience">
              <TextArea
                value={teachingExperience}
                onChange={(e) => setTeachingExperience(e.target.value)}
                placeholder="Describe your experience…"
              />
            </Field>
            <Field label="Reason For Joining">
              <TextArea
                value={joiningReason}
                onChange={(e) => setJoiningReason(e.target.value)}
                placeholder="Why do you want to join?"
              />
            </Field>
          </>
        ) : null}
        {error ? (
          <p className="text-xs font-medium text-red-400 animate-in fade-in slide-in-from-top-1 duration-300">
            {error}
          </p>
        ) : null}
        <Button
          type="submit"
          disabled={loading}
          className="h-10 w-full rounded-lg bg-orange-500 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600 hover:shadow-orange-500/30 active:scale-[0.98] transition-all duration-200"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Creating account…
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Register <ArrowRight className="size-4" />
            </span>
          )}
        </Button>
      </form>
      <p className="mt-4 text-center text-xs text-slate-400">
        Already registered?{' '}
        <Link href="/login" className="font-medium text-orange-400 hover:text-orange-300 transition-colors">
          Login
        </Link>
      </p>
    </AuthFrame>
  );
}

/* ────────────────────────────────────────────
   Shared Auth Frame – Premium Layout
   ──────────────────────────────────────────── */

interface CarouselItem {
  src: string | StaticImageData;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

function resolveCarouselSrc(src: string | StaticImageData) {
  return typeof src === 'string' ? src : src.src;
}

function AuthFrame({
  title,
  caption,
  children,
  images,
  badgeText,
  badgeIcon: BadgeIcon,
}: {
  title: string;
  caption: string;
  children: ReactNode;
  images: CarouselItem[];
  badgeText: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const transitioningRef = useRef(false);

  const transitionTo = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex || transitioningRef.current) return;
      transitioningRef.current = true;
      setVisible(false);
      setTimeout(() => {
        setActiveIndex(nextIndex);
        setLoadedImages((prev) => new Set([...prev, nextIndex]));
        setVisible(true);
        setTimeout(() => {
          transitioningRef.current = false;
        }, 500);
      }, 420);
    },
    [activeIndex],
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      const next = (activeIndex + 1) % images.length;
      transitionTo(next);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [activeIndex, images.length, transitionTo]);

  // Preload all images on mount
  useEffect(() => {
    images.forEach((img, i) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = resolveCarouselSrc(img.src);
      document.head.appendChild(link);
      setLoadedImages((prev) => new Set([...prev, i]));
    });
  }, [images]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B1120] px-4 py-6 sm:py-10">
      <div className="w-full max-w-[1040px] overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0F172A] shadow-2xl shadow-black/40">
        <div className="grid lg:grid-cols-[1fr_1fr]">
          {/* ── Left: Form ── */}
          <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            {/* Badge */}
            <div className="mb-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-400">
                <BadgeIcon className="size-3.5" />
                {badgeText}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-bold leading-tight text-white sm:text-[28px]">
              {title}
            </h1>
            <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
              {caption}
            </p>

            {/* Form content */}
            <div className="mt-6">{children}</div>
          </div>

          {/* ── Right: Image Carousel ── */}
          <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-none border-t border-white/[0.06] bg-[#0B1120] p-4 sm:min-h-[320px] sm:p-5 lg:min-h-0 lg:rounded-r-2xl lg:border-t-0 lg:border-l lg:p-6">
            {/* Decorative gradient overlays */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.07] via-transparent to-transparent" />
              <div className="absolute -right-20 -top-20 size-72 rounded-full bg-orange-500/[0.06] blur-[80px]" />
              <div className="absolute -bottom-16 -left-16 size-56 rounded-full bg-sky-500/[0.05] blur-[60px]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between gap-4">
              {/* Main image */}
              <div className="relative flex-1 overflow-hidden rounded-xl bg-slate-900/80 shadow-lg shadow-black/20">
                {/* Current image */}
                <div
                  className="absolute inset-0 transition-all duration-[480ms] ease-in-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'scale(1)' : 'scale(1.05)',
                  }}
                >
                  <img
                    className="h-full w-full object-cover"
                    src={resolveCarouselSrc(images[activeIndex].src)}
                    alt={images[activeIndex].title}
                    loading="eager"
                  />
                </div>

                {/* Gradient overlay at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />

                {/* Text overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const IconComp = images[activeIndex].icon;
                      return (
                        <div
                          className="flex size-7 items-center justify-center rounded-lg bg-orange-500/20 transition-all duration-[480ms]"
                          style={{ opacity: visible ? 1 : 0 }}
                        >
                          <IconComp className="size-3.5 text-orange-400" />
                        </div>
                      );
                    })()}
                    <div>
                      <h2
                        className="text-sm font-semibold text-white transition-all duration-[480ms] ease-in-out sm:text-[15px]"
                        style={{
                          opacity: visible ? 1 : 0,
                          transform: visible ? 'translateY(0)' : 'translateY(6px)',
                        }}
                      >
                        {images[activeIndex].title}
                      </h2>
                      <p
                        className="mt-0.5 text-[11px] leading-relaxed text-slate-300/80 transition-all duration-[480ms] ease-in-out sm:text-xs"
                        style={{
                          opacity: visible ? 1 : 0,
                          transform: visible ? 'translateY(0)' : 'translateY(6px)',
                          transitionDelay: visible ? '60ms' : '0ms',
                        }}
                      >
                        {images[activeIndex].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}