'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, ReactNode, useEffect, useState, useCallback, useRef } from 'react';
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
  BookOpen,
  Laptop,
  Presentation,
  Globe,
  Sparkles,
  Building2,
  School,
  UsersRound,
  AlertCircle,
} from 'lucide-react';

/* ─── Password Strength Helper ─── */
function getPasswordStrength(pw: string): number {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const STRENGTH_COLORS = ['', 'bg-red-500', 'bg-amber-500', 'bg-green-500', 'bg-emerald-400'];
const STRENGTH_LABELS = ['', 'Weak', 'Fair', 'Good', 'Strong'];
const STRENGTH_TEXT = ['', 'text-red-400', 'text-amber-400', 'text-green-400', 'text-emerald-400'];

/* ─── Inline style to kill white bg on ANY input ─── */
const DARK_BG_STYLE: React.CSSProperties = {
  backgroundColor: '#0b1120',
  background: '#0b1120',
};

const DARK_BG_FOCUS_STYLE: React.CSSProperties = {
  backgroundColor: '#0e1630',
  background: '#0e1630',
};

/* ─── Shared Input Class Strings — NO bg classes, bg comes from inline style ─── */
const INPUT_CLS =
  'w-full rounded-lg px-3 py-2 text-sm text-slate-100 border-[1.5px] border-slate-700/70 transition-all duration-200 hover:border-orange-500/30 focus:border-orange-500 focus:outline-none focus:ring-[3px] focus:ring-orange-500/15';

const SELECT_CLS =
  'w-full rounded-lg px-3 py-2 text-sm text-slate-100 border-[1.5px] border-slate-700/70 transition-all duration-200 hover:border-orange-500/30 focus:border-orange-500 focus:outline-none focus:ring-[3px] focus:ring-orange-500/15 appearance-none cursor-pointer';

const TEXTAREA_CLS =
  'w-full rounded-lg px-3 py-2 text-sm text-slate-100 border-[1.5px] border-slate-700/70 transition-all duration-200 hover:border-orange-500/30 focus:border-orange-500 focus:outline-none focus:ring-[3px] focus:ring-orange-500/15 resize-none';

/* 
  ✅ EDUCATION IMAGES
  Located at /public/images/education/
*/

const loginImagesData = [
  {
    src: '/images/education/student-laptop.jpg',
    title: 'Learn Anywhere',
    subtitle: 'Access courses, assignments, and live classes from any device.',
    icon: Laptop,
  },
  {
    src: '/images/education/university-lecture.jpg',
    title: 'University Ready',
    subtitle: 'Curriculum designed for schools, colleges, and universities.',
    icon: GraduationCap,
  },
  {
    src: '/images/education/online-class.jpg',
    title: 'Live Sessions',
    subtitle: 'Interactive classes with real-time feedback and quizzes.',
    icon: Presentation,
  },
];

const registerImagesData = [
  {
    src: '/images/education/teacher-classroom.jpg',
    title: 'Expert Guidance',
    subtitle: 'Learn from certified teachers and industry professionals.',
    icon: Users,
  },
  {
    src: '/images/education/group-study.jpg',
    title: 'Collaborative Learning',
    subtitle: 'Study groups, peer reviews, and team projects.',
    icon: BookOpen,
  },
  {
    src: '/images/education/workshop.jpg',
    title: 'Skill Development',
    subtitle: 'Hands-on workshops and real-world projects.',
    icon: ShieldCheck,
  },
];

/* ────────────────────────────────────────────
   PASSWORD STRENGTH METER (shared component)
   ──────────────────────────────────────────── */

function PasswordStrengthBar({ password }: { password: string }) {
  const pwScore = getPasswordStrength(password);

  if (password.length === 0) return null;

  return (
    <div className="mt-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-[3px] flex-1 rounded-full transition-all duration-300 ${
              i <= pwScore ? STRENGTH_COLORS[pwScore] : 'bg-slate-700/40'
            }`}
          />
        ))}
      </div>
      {STRENGTH_LABELS[pwScore] && (
        <p className={`text-[10px] mt-0.5 font-medium ${STRENGTH_TEXT[pwScore]}`}>
          {STRENGTH_LABELS[pwScore]}
        </p>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────
   LOGIN PANEL
   ──────────────────────────────────────────── */

export function LoginPanel() {
  const router = useRouter();
  const { login, loading, error } = useAuthStore();
  const [email, setEmail] = useState('admin@grapetask.com');
  const [password, setPassword] = useState('Password123!');
  const [showPassword, setShowPassword] = useState(false);

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
      caption="Sign in to continue your learning journey."
      images={loginImagesData}
      badgeText="Sign In"
      badgeIcon={LogIn}
    >
      <form className="space-y-3" onSubmit={onSubmit}>
        <Field label="Email">
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            required
            className={INPUT_CLS}
            style={DARK_BG_STYLE}
          />
        </Field>

        <Field label="Password">
          <div className="relative">
            <TextInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              required
              className={`${INPUT_CLS} pr-10`}
              style={DARK_BG_STYLE}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-orange-400 transition-colors duration-150 p-0.5 rounded-md hover:bg-orange-500/10"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
            </button>
          </div>
          {/* Password Strength Meter for Login */}
          <PasswordStrengthBar password={password} />
        </Field>

        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-[11px] text-slate-400 hover:text-orange-400 transition-colors duration-200"
          >
            Forgot password?
          </Link>
        </div>

        {error && (
          <div className="animate-in fade-in slide-in-from-top-1 duration-300">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-500/10 border border-red-500/20">
              <AlertCircle className="size-3.5 text-red-400 shrink-0" />
              <span className="text-[12px] font-medium text-red-300">{error}</span>
            </div>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="group relative h-10 w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:from-orange-600 hover:to-orange-700 active:scale-[0.98] transition-all duration-200 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
          <span className="relative flex items-center justify-center gap-2">
            {loading ? (
              <>
                <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Signing in…
              </>
            ) : (
              <>
                Login <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </>
            )}
          </span>
        </Button>
      </form>

      <p className="mt-4 text-center text-[13px] text-slate-400">
        New to GrapeTask LMS?{' '}
        <Link href="/register" className="font-semibold text-orange-400 hover:text-orange-300 transition-colors">
          Create an account
        </Link>
      </p>
    </AuthFrame>
  );
}

/* ────────────────────────────────────────────
   REGISTER PANEL
   ──────────────────────────────────────────── */

export function RegisterPanel() {
  const router = useRouter();
  const { register, loading, error } = useAuthStore();
  const [role, setRole] = useState<Role>('learner');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [learnerCategory, setLearnerCategory] = useState<LearnerCategory>('individual_learner');
  const [trainerLevel, setTrainerLevel] = useState<LearningLevel>('university');
  const [portfolio, setPortfolio] = useState('');
  const [teachingExperience, setTeachingExperience] = useState('');
  const [joiningReason, setJoiningReason] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [instituteType, setInstituteType] = useState('school');
  const [studentCount, setStudentCount] = useState('1-50');

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      /* 
        ✅ FIX: instituteName, instituteType, studentCount ko 
        register() ke type mein nahi bhejte — sirf valid props pass karte hain.
        Institute Head ka data backend pe separately ya extended API se jaayega.
      */
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
      caption="Choose your role and start your learning journey today."
      images={registerImagesData}
      badgeText="Register"
      badgeIcon={UserPlus}
      narrowForm
    >
      <form className="space-y-3" onSubmit={onSubmit}>
        {/* Account Type */}
        <Field label="Account Type">
          <SelectInput
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className={SELECT_CLS}
            style={DARK_BG_STYLE}
          >
            <option value="learner">Learner</option>
            <option value="trainer">Trainer</option>
            <option value="institute_head">Institute Head</option>
          </SelectInput>
        </Field>

        {/* Full Name */}
        <Field label="Full Name">
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
            className={INPUT_CLS}
            style={DARK_BG_STYLE}
          />
        </Field>

        {/* Email Address */}
        <Field label="Email Address">
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            required
            className={INPUT_CLS}
            style={DARK_BG_STYLE}
          />
        </Field>

        {/* Password */}
        <Field label="Password">
          <div className="relative">
            <TextInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password (min. 8 characters)"
              minLength={8}
              required
              className={`${INPUT_CLS} pr-10`}
              style={DARK_BG_STYLE}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-orange-400 transition-colors duration-150 p-0.5 rounded-md hover:bg-orange-500/10"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
            </button>
          </div>
          <PasswordStrengthBar password={password} />
        </Field>

        {/* ── Learner Fields ── */}
        {role === 'learner' && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <Field label="Learner Category">
              <SelectInput
                value={learnerCategory}
                onChange={(e) => setLearnerCategory(e.target.value as LearnerCategory)}
                className={SELECT_CLS}
                style={DARK_BG_STYLE}
              >
                <option value="school_student">School Student (Grade 1-12)</option>
                <option value="college_student">College Student</option>
                <option value="university_student">University Student</option>
                <option value="individual_learner">Individual Learner</option>
              </SelectInput>
            </Field>
          </div>
        )}

        {/* ── Trainer Fields ── */}
        {role === 'trainer' && (
          <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <Field label="Trainer Level">
              <SelectInput
                value={trainerLevel}
                onChange={(e) => setTrainerLevel(e.target.value as LearningLevel)}
                className={SELECT_CLS}
                style={DARK_BG_STYLE}
              >
                <option value="school">School Level</option>
                <option value="college">College Level</option>
                <option value="university">University Level</option>
              </SelectInput>
            </Field>

            <Field label="Portfolio URL (Optional)">
              <TextInput
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                placeholder="https://your-portfolio.com"
                className={INPUT_CLS}
                style={DARK_BG_STYLE}
              />
            </Field>

            <Field label="Teaching Experience">
              <TextArea
                value={teachingExperience}
                onChange={(e) => setTeachingExperience(e.target.value)}
                placeholder="Tell us about your teaching experience..."
                rows={2}
                className={TEXTAREA_CLS}
                style={DARK_BG_STYLE}
              />
            </Field>

            <Field label="Why do you want to join?">
              <TextArea
                value={joiningReason}
                onChange={(e) => setJoiningReason(e.target.value)}
                placeholder="Share your motivation to join GrapeTask LMS..."
                rows={2}
                className={TEXTAREA_CLS}
                style={DARK_BG_STYLE}
              />
            </Field>
          </div>
        )}

        {/* ── Institute Head Fields ── */}
        {role === 'institute_head' && (
          <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <Field label="Institute Name">
              <TextInput
                value={instituteName}
                onChange={(e) => setInstituteName(e.target.value)}
                placeholder="Enter your institute name"
                className={INPUT_CLS}
                style={DARK_BG_STYLE}
              />
            </Field>

            <Field label="Institute Type">
              <SelectInput
                value={instituteType}
                onChange={(e) => setInstituteType(e.target.value)}
                className={SELECT_CLS}
                style={DARK_BG_STYLE}
              >
                <option value="school">School</option>
                <option value="college">College</option>
                <option value="university">University</option>
                <option value="training_center">Training Center</option>
                <option value="online_academy">Online Academy</option>
              </SelectInput>
            </Field>

            <Field label="Student Count">
              <SelectInput
                value={studentCount}
                onChange={(e) => setStudentCount(e.target.value)}
                className={SELECT_CLS}
                style={DARK_BG_STYLE}
              >
                <option value="1-50">1 - 50</option>
                <option value="51-200">51 - 200</option>
                <option value="201-500">201 - 500</option>
                <option value="500+">500+</option>
              </SelectInput>
            </Field>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="animate-in fade-in slide-in-from-top-1 duration-300">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-500/10 border border-red-500/20">
              <AlertCircle className="size-3.5 text-red-400 shrink-0" />
              <span className="text-[12px] font-medium text-red-300">{error}</span>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="group relative h-10 w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:from-orange-600 hover:to-orange-700 active:scale-[0.98] transition-all duration-200 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
          <span className="relative flex items-center justify-center gap-2">
            {loading ? (
              <>
                <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Creating account…
              </>
            ) : (
              <>
                Create Account <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </>
            )}
          </span>
        </Button>
      </form>

      <p className="mt-4 text-center text-[13px] text-slate-400">
        Already have an account?{' '}
        <Link href="/login" className="font-semibold text-orange-400 hover:text-orange-300 transition-colors">
          Sign in
        </Link>
      </p>
    </AuthFrame>
  );
}

/* ────────────────────────────────────────────
   AUTH FRAME - Premium Layout
   ──────────────────────────────────────────── */

interface CarouselItem {
  src: string | StaticImageData;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

function resolveCarouselSrc(src: string | StaticImageData): string {
  return typeof src === 'string' ? src : src.src;
}

function AuthFrame({
  title,
  caption,
  children,
  images,
  badgeText,
  badgeIcon: BadgeIcon,
  narrowForm = false,
}: {
  title: string;
  caption: string;
  children: ReactNode;
  images: CarouselItem[];
  badgeText: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
  narrowForm?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const transitioningRef = useRef(false);

  const transitionTo = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex || transitioningRef.current) return;
      transitioningRef.current = true;
      setVisible(false);
      setTimeout(() => {
        setActiveIndex(nextIndex);
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

  const gridCols = narrowForm
    ? 'lg:grid-cols-[1.15fr_1fr]'
    : 'lg:grid-cols-[1fr_1.15fr]';

  return (
    <main className="flex min-h-screen items-start justify-center bg-gradient-to-br from-[#0A0F1C] via-[#0B1120] to-[#0F172A] p-4 sm:items-center sm:py-8">
      <div className="w-full max-w-[960px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0F172A]/80 backdrop-blur-sm shadow-2xl shadow-black/50">
        <div className={`grid ${gridCols}`}>

          {/* FORM SECTION */}
          <div className="order-2 lg:order-1 flex flex-col justify-center px-5 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-8">
            {/* Badge */}
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-400">
                <BadgeIcon className="size-3.5" />
                {badgeText}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              {title}
            </h1>
            <p className="mt-1 text-[13px] leading-relaxed text-slate-400">
              {caption}
            </p>

            {/* Form */}
            <div className="auth-form mt-4 border-t border-white/[0.05] pt-4">
              {children}
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="order-1 lg:order-2 relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-t-2xl border-b border-white/[0.06] bg-gradient-to-br from-slate-900/50 to-slate-800/30 p-4 sm:min-h-[280px] sm:p-5 lg:min-h-full lg:rounded-t-none lg:rounded-r-2xl lg:border-b-0 lg:border-l lg:p-5">

            {/* Decorative gradients */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.08] via-transparent to-transparent" />
              <div className="absolute -right-20 -top-20 size-72 rounded-full bg-orange-500/[0.08] blur-[100px]" />
              <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-sky-500/[0.06] blur-[100px]" />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between gap-3">
              {/* Image Container */}
              <div className="relative flex-1 overflow-hidden rounded-xl bg-slate-900/60 shadow-2xl shadow-black/30">
                {/* Animated Image */}
                <div
                  className="absolute inset-0 transition-all duration-[600ms] ease-out will-change-transform"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'scale(1)' : 'scale(1.06)',
                  }}
                >
                  <img
                    className="h-full w-full object-cover object-center"
                    src={resolveCarouselSrc(images[activeIndex].src)}
                    alt={images[activeIndex].title}
                    loading="eager"
                  />
                </div>

                {/* Overlays */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />

                {/* Text Overlay */}
                <div
                  className="absolute inset-x-0 bottom-0 p-4 sm:p-5 transition-all duration-[600ms] ease-out will-change-transform"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(6px)',
                  }}
                >
                  <div className="flex items-start gap-2.5">
                    <div
                      className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/40 to-orange-600/30 backdrop-blur-sm transition-transform duration-[600ms] ease-out"
                      style={{
                        transform: visible ? 'scale(1)' : 'scale(0.85)',
                      }}
                    >
                      {(() => {
                        const IconComp = images[activeIndex].icon;
                        return <IconComp className="size-3.5 text-orange-400" />;
                      })()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-sm font-semibold text-white">
                        {images[activeIndex].title}
                      </h2>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-slate-200/80 sm:text-xs">
                        {images[activeIndex].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-1.5 py-0.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => transitionTo(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-5 bg-orange-500'
                        : 'w-1.5 bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── NUCLEAR Scoped CSS — kills white bg at ALL costs ─── */}
      <style>{`
        /* ═══════════════════════════════════════════
           FORCE DARK BG ON EVERY FORM ELEMENT
           ═══════════════════════════════════════════ */
        .auth-form input,
        .auth-form textarea,
        .auth-form select {
          background-color: #0b1120 !important;
          background: #0b1120 none !important;
          color: #e2e8f0 !important;
        }
        .auth-form input:hover,
        .auth-form textarea:hover,
        .auth-form select:hover {
          background-color: #0d1526 !important;
          background: #0d1526 none !important;
        }
        .auth-form input:focus,
        .auth-form textarea:focus,
        .auth-form select:focus {
          background-color: #0e1630 !important;
          background: #0e1630 none !important;
        }

        /* ═══════════════════════════════════════════
           CHROME AUTOFILL — NUCLEAR OVERRIDE
           ═══════════════════════════════════════════ */
        .auth-form input:-webkit-autofill,
        .auth-form input:-webkit-autofill:hover,
        .auth-form input:-webkit-autofill:focus,
        .auth-form input:-webkit-autofill:valid,
        .auth-form input:-webkit-autofill-active,
        .auth-form textarea:-webkit-autofill,
        .auth-form textarea:-webkit-autofill:hover,
        .auth-form textarea:-webkit-autofill:focus,
        .auth-form textarea:-webkit-autofill-active,
        .auth-form select:-webkit-autofill,
        .auth-form select:-webkit-autofill:hover,
        .auth-form select:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #0b1120 inset !important;
          box-shadow: 0 0 0 1000px #0b1120 inset !important;
          -webkit-text-fill-color: #e2e8f0 !important;
          caret-color: #e2e8f0 !important;
          transition: background-color 9999s ease-in-out 0s !important;
        }

        /* ═══════════════════════════════════════════
           PLACEHOLDERS — SOFT SLATE, NOT WHITE
           ═══════════════════════════════════════════ */
        .auth-form input::placeholder,
        .auth-form textarea::placeholder {
          color: rgba(148, 163, 184, 0.35) !important;
          font-size: 12px !important;
          font-weight: 300 !important;
          opacity: 1 !important;
          letter-spacing: 0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .auth-form input:focus::placeholder,
        .auth-form textarea:focus::placeholder {
          color: rgba(148, 163, 184, 0.2) !important;
        }

        /* ═══════════════════════════════════════════
           SELECT DROPDOWN
           ═══════════════════════════════════════════ */
        .auth-form select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='%2364748b' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 5.646a.5.5 0 0 1 .708 0L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: right 10px center !important;
          background-size: 14px !important;
          padding-right: 32px !important;
        }
        .auth-form select:focus {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='%23f97316' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 5.646a.5.5 0 0 1 .708 0L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E") !important;
        }
        .auth-form select option {
          background-color: #0b1120 !important;
          background: #0b1120 none !important;
          color: #cbd5e1 !important;
          padding: 8px 12px !important;
        }

        /* ═══════════════════════════════════════════
           FIREFOX AUTOFILL
           ═══════════════════════════════════════════ */
        .auth-form input:-moz-autofill,
        .auth-form input:-moz-autofill-preview {
          filter: none !important;
        }

        /* ═══════════════════════════════════════════
           EDGE / 1PASSWORD / LASTPASS AUTOFILL
           ═══════════════════════════════════════════ */
        .auth-form input[data-com-onepassword-filled],
        .auth-form input[data-autofill],
        .auth-form input[data-lpignore] {
          background-color: #0b1120 !important;
          background: #0b1120 none !important;
        }
      `}</style>
    </main>
  );
}