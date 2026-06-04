'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardTitle } from '@/components/ui/Card';
import { EmptyState } from '@/components/ui/EmptyState';
import { Field, SelectInput, TextArea, TextInput } from '@/components/ui/Field';
import { coursesApi, meetingsApi, reportsApi, submissionsApi } from '@/lib/api';
import type { Course, LearningLevel, ReviewDecision } from '@/types/domain';
import {
  BookOpen,
  Plus,
  Upload,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Video,
  Users,
  Calendar,
  MessageSquare,
  BarChart3,
  Play,
  Eye,
  Send,
  Clock
} from 'lucide-react';

export function TrainerDashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [courseForm, setCourseForm] = useState({ title: '', description: '', level: 'university' as LearningLevel });
  const [videoForm, setVideoForm] = useState({ courseId: '', title: '', position: 1, videoUrl: '', summary: '' });
  const [meetingForm, setMeetingForm] = useState({ courseId: '', startsAt: '', provider: 'zoom' as 'zoom' | 'google_meet', meetingUrl: '', agenda: '' });
  const [message, setMessage] = useState('');

  async function load() {
    const [courseRows, submissionRows] = await Promise.all([coursesApi.list(), submissionsApi.trainerList()]);
    setCourses(courseRows);
    setSubmissions(submissionRows);
  }

  useEffect(() => {
    load().catch((error) => setMessage(error.message));
  }, []);

  async function createCourse(event: FormEvent) {
    event.preventDefault();
    const created = await coursesApi.create(courseForm);
    setCourseForm({ title: '', description: '', level: 'university' });
    setMessage(`Course created: ${created.title}`);
    await load();
  }

  async function addVideo(event: FormEvent) {
    event.preventDefault();
    await coursesApi.addVideo(videoForm.courseId, {
      title: videoForm.title,
      position: Number(videoForm.position),
      videoUrl: videoForm.videoUrl,
      summary: videoForm.summary,
    });
    setMessage('Video added. Add MCQ, quiz, summary, and homework sets through the assessment builder payload.');
    setVideoForm({ courseId: '', title: '', position: 1, videoUrl: '', summary: '' });
    await load();
  }

  async function reviewSubmission(id: string, decision: ReviewDecision) {
    await submissionsApi.review(id, decision, decision === 'fail' ? 'Rewatch the video and retry a different test set.' : 'Reviewed by trainer.');
    await load();
  }

  async function createMeeting(event: FormEvent) {
    event.preventDefault();
    await meetingsApi.create(meetingForm);
    setMeetingForm({ courseId: '', startsAt: '', provider: 'zoom', meetingUrl: '', agenda: '' });
    setMessage('Meeting scheduled.');
  }

  return (
    <div className="space-y-8">
      {/* Success/Error Messages */}
      {message && (
        <div className={`rounded-xl border p-4 flex items-start gap-3 transition-all duration-300 ${
          message.includes('created') || message.includes('added') || message.includes('scheduled')
            ? 'border-emerald-500/30 bg-emerald-500/10'
            : 'border-blue-500/30 bg-blue-500/10'
        }`}>
          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
            message.includes('created') || message.includes('added') || message.includes('scheduled')
              ? 'text-emerald-400'
              : 'text-blue-400'
          }`} />
          <p className={`text-sm flex-1 ${
            message.includes('created') || message.includes('added') || message.includes('scheduled')
              ? 'text-emerald-200'
              : 'text-blue-200'
          }`}>{message}</p>
        </div>
      )}

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Trainer Dashboard</h1>
        <p className="text-sm text-gray-400 mt-1">Create courses, manage content, review submissions, and track learner progress</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[32px] p-6 sm:p-8 transition-all duration-700 transform-style-3d hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(240,89,31,0.15)] hover:border-orange-500/50 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full pointer-events-none group-hover:bg-orange-500/20 transition-colors" />
          <div className="flex items-start justify-between">
            <div className="z-10 relative">
              <p className="text-sm font-bold text-[#94a3b8] uppercase tracking-widest mb-4">Total Courses</p>
              <p className="text-4xl sm:text-6xl font-black text-white">{courses.length}</p>
            </div>
            <div className="p-3 sm:p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20 group-hover:scale-110 transition-transform z-10 relative">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[32px] p-6 sm:p-8 transition-all duration-700 transform-style-3d hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:border-blue-500/50 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none group-hover:bg-blue-500/20 transition-colors" />
          <div className="flex items-start justify-between">
            <div className="z-10 relative">
              <p className="text-sm font-bold text-[#94a3b8] uppercase tracking-widest mb-4">Submissions</p>
              <p className="text-4xl sm:text-6xl font-black text-white">{submissions.length}</p>
            </div>
            <div className="p-3 sm:p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform z-10 relative">
              <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[32px] p-6 sm:p-8 transition-all duration-700 transform-style-3d hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] hover:border-purple-500/50 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full pointer-events-none group-hover:bg-purple-500/20 transition-colors" />
          <div className="flex items-start justify-between">
            <div className="z-10 relative">
              <p className="text-sm font-bold text-[#94a3b8] uppercase tracking-widest mb-4">Awaiting Review</p>
              <p className="text-4xl sm:text-6xl font-black text-purple-400">{submissions.filter(s => !s.reviewed).length}</p>
            </div>
            <div className="p-3 sm:p-4 bg-purple-500/10 rounded-2xl border border-purple-500/20 group-hover:scale-110 transition-transform z-10 relative">
              <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[32px] p-6 sm:p-8 transition-all duration-700 transform-style-3d hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] hover:border-emerald-500/50 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors" />
          <div className="flex items-start justify-between">
            <div className="z-10 relative">
              <p className="text-sm font-bold text-[#94a3b8] uppercase tracking-widest mb-4">Learners Active</p>
              <p className="text-4xl sm:text-6xl font-black text-emerald-400">24</p>
            </div>
            <div className="p-3 sm:p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:scale-110 transition-transform z-10 relative">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Course Creation & Video Upload */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card id="create-course" className="border-gray-700">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="w-5 h-5 text-orange-400" />
            <CardTitle 
              title="Create New Course" 
              caption="Define course details and learning level for admin approval." 
            />
          </div>
          
          <form className="space-y-4" onSubmit={createCourse}>
            <Field label="Course Title">
              <TextInput 
                value={courseForm.title} 
                onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })} 
                placeholder="Enter course title"
                required 
              />
            </Field>
            
            <Field label="Learning Level">
              <SelectInput 
                value={courseForm.level} 
                onChange={(e) => setCourseForm({ ...courseForm, level: e.target.value as LearningLevel })}
              >
                <option value="school">School</option>
                <option value="college">College</option>
                <option value="university">University</option>
                <option value="individual">Individual</option>
              </SelectInput>
            </Field>
            
            <Field label="Description">
              <TextArea 
                value={courseForm.description} 
                onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })} 
                placeholder="Describe your course, learning objectives, and target audience..."
                required 
              />
            </Field>
            
            <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Create Course
            </Button>
          </form>
        </Card>

        <Card id="upload-video" className="border-gray-700">
          <div className="flex items-center gap-2 mb-6">
            <Upload className="w-5 h-5 text-blue-400" />
            <CardTitle 
              title="Add Video Lesson" 
              caption="Attach video URLs and content summaries for learners." 
            />
          </div>
          
          <form className="space-y-4" onSubmit={addVideo}>
            <Field label="Select Course">
              <SelectInput 
                value={videoForm.courseId} 
                onChange={(e) => setVideoForm({ ...videoForm, courseId: e.target.value })} 
                required
              >
                <option value="">Choose a course...</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>{course.title}</option>
                ))}
              </SelectInput>
            </Field>
            
            <Field label="Video Title">
              <TextInput 
                value={videoForm.title} 
                onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })} 
                placeholder="Lesson topic"
                required 
              />
            </Field>
            
            <div className="grid grid-cols-2 gap-3">
              <Field label="Position #">
                <TextInput 
                  type="number" 
                  min={1} 
                  value={videoForm.position} 
                  onChange={(e) => setVideoForm({ ...videoForm, position: Number(e.target.value) })} 
                  required 
                />
              </Field>
              
              <Field label="Duration">
                <TextInput 
                  type="text"
                  placeholder="e.g., 45 min"
                />
              </Field>
            </div>
            
            <Field label="Video URL">
              <TextInput 
                value={videoForm.videoUrl} 
                onChange={(e) => setVideoForm({ ...videoForm, videoUrl: e.target.value })} 
                placeholder="YouTube or video platform URL"
                required 
              />
            </Field>
            
            <Field label="Summary">
              <TextArea 
                value={videoForm.summary} 
                onChange={(e) => setVideoForm({ ...videoForm, summary: e.target.value })} 
                placeholder="Key points and learning objectives for this lesson..."
              />
            </Field>
            
            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
              <Upload className="w-4 h-4 mr-2" />
              Add Video
            </Button>
          </form>
        </Card>
      </div>

      {/* My Courses */}
      <Card id="my-courses" className="border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <CardTitle 
              title="My Courses" 
              caption="Manage courses awaiting or submitted for admin approval." 
            />
          </div>
          <span className="text-sm text-gray-400">{courses.length} courses</span>
        </div>
        
        {courses.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="group rounded-2xl border border-gray-700 bg-[#0f172a]/80 backdrop-blur-xl p-6 transition-all duration-500 transform-style-3d hover:shadow-[0_20px_50px_rgba(240,89,31,0.15)] hover:-translate-y-2 hover:scale-[1.02] hover:border-[#f0591f]/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center border border-orange-500/20">
                    <BookOpen className="w-5 h-5 text-orange-400" />
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                    (course as any).status === 'approved'
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                      : (course as any).status === 'rejected'
                      ? 'bg-red-500/20 text-red-300 border-red-500/30'
                      : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                  }`}>
                    {(course as any).status || 'draft'}
                  </span>
                </div>
                
                <h3 className="font-semibold text-white mb-1 line-clamp-2">{course.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{course.level}</p>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{course.description}</p>
                
                <Button 
                  variant="ghost"
                  className="w-full text-xs"
                  onClick={() => coursesApi.submitReview(course.id).then(load)}
                >
                  <Send className="w-3.5 h-3.5 mr-2" />
                  {(course as any).status === 'approved' ? 'View Details' : 'Submit for Review'}
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState 
            title="No courses yet" 
            detail="Create your first course to start teaching on GrapeTask." 
          />
        )}
      </Card>

      {/* Review Submissions */}
      <Card id="submissions" className="border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <CardTitle 
              title="Student Submissions" 
              caption="Review homework and practical assignments from your learners." 
            />
          </div>
          {submissions.length > 0 && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-300 border border-orange-500/30">
              {submissions.filter(s => !s.reviewed).length} Pending
            </span>
          )}
        </div>
        
        {submissions.length > 0 ? (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div 
                key={submission.id} 
                className="rounded-2xl border border-gray-700 bg-[#0f172a]/80 backdrop-blur-xl p-6 transition-all duration-500 transform-style-3d hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-500/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center text-sm font-medium text-white border border-gray-500/30">
                        {submission.enrollment?.learner?.name?.charAt(0)?.toUpperCase() || 'L'}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{submission.enrollment?.learner?.name ?? 'Learner'}</p>
                        <p className="text-xs text-gray-400">{submission.video?.title ?? 'Homework Submission'}</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700">
                      <p className="text-sm text-gray-300 line-clamp-3">{submission.textAnswer ?? submission.fileUrl ?? 'No submission content'}</p>
                    </div>
                  </div>
                  
                  <div className="lg:flex-shrink-0 flex gap-2 flex-col">
                    <Button 
                      onClick={() => reviewSubmission(submission.id, 'pass')}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      Pass
                    </Button>
                    <Button 
                      onClick={() => reviewSubmission(submission.id, 'fail')}
                      variant="ghost"
                      className="border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Fail
                    </Button>
                    <Button 
                      onClick={() => reviewSubmission(submission.id, 'improve')}
                      variant="ghost"
                      className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 text-xs"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Improve
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState 
            title="No submissions yet" 
            detail="Homework submissions from learners will appear here for your review." 
          />
        )}
      </Card>

      {/* Meetings & Reports */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card id="meetings" className="border-gray-700">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-purple-400" />
            <CardTitle 
              title="Schedule Live Session" 
              caption="Create Q&A sessions via Zoom or Google Meet." 
            />
          </div>
          
          <form className="space-y-4" onSubmit={createMeeting}>
            <Field label="Select Course">
              <SelectInput 
                value={meetingForm.courseId} 
                onChange={(e) => setMeetingForm({ ...meetingForm, courseId: e.target.value })} 
                required
              >
                <option value="">Choose a course...</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>{course.title}</option>
                ))}
              </SelectInput>
            </Field>
            
            <Field label="Session Date & Time">
              <TextInput 
                type="datetime-local" 
                value={meetingForm.startsAt} 
                onChange={(e) => setMeetingForm({ ...meetingForm, startsAt: e.target.value })} 
                required 
              />
            </Field>
            
            <Field label="Platform">
              <SelectInput 
                value={meetingForm.provider} 
                onChange={(e) => setMeetingForm({ ...meetingForm, provider: e.target.value as 'zoom' | 'google_meet' })}
              >
                <option value="zoom">Zoom</option>
                <option value="google_meet">Google Meet</option>
              </SelectInput>
            </Field>
            
            <Field label="Meeting URL">
              <TextInput 
                value={meetingForm.meetingUrl} 
                onChange={(e) => setMeetingForm({ ...meetingForm, meetingUrl: e.target.value })} 
                placeholder="https://..."
                required 
              />
            </Field>
            
            <Field label="Session Agenda">
              <TextArea 
                value={meetingForm.agenda} 
                onChange={(e) => setMeetingForm({ ...meetingForm, agenda: e.target.value })} 
                placeholder="Topics to discuss in this session..."
              />
            </Field>
            
            <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Session
            </Button>
          </form>
        </Card>

        <Card id="reports" className="border-gray-700">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-green-400" />
            <CardTitle 
              title="Analytics & Reports" 
              caption="Generate progress reports for your courses and learners." 
            />
          </div>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-sm text-green-200 mb-2">Report generation is available through the API service. Generate weekly or biweekly progress reports.</p>
              <p className="text-xs text-green-300 mb-4">Reports include:</p>
              <ul className="text-xs text-green-300 space-y-1 ml-3">
                <li>✓ Student engagement metrics</li>
                <li>✓ Test pass rates and performance</li>
                <li>✓ Homework completion status</li>
                <li>✓ Course progress tracking</li>
              </ul>
            </div>
            
            <Button 
              variant="ghost"
              onClick={() => setMessage('Reports API is configured. Use POST /api/reports with course, learner, and institute IDs.')}
              className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
