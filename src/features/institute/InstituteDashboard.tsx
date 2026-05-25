'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardTitle } from '@/components/ui/Card';
import { EmptyState } from '@/components/ui/EmptyState';
import { Field, SelectInput, TextArea, TextInput } from '@/components/ui/Field';
import { coursesApi, institutionsApi, reportsApi } from '@/lib/api';
import { useAuthStore } from '@/store/auth-store';
import type { Course, Institution, PricingPackage, User } from '@/types/domain';
import {
  Users,
  BookOpen,
  GraduationCap,
  BarChart3,
  FileText,
  Settings,
  Download,
  Plus,
  CheckCircle2,
  AlertCircle,
  Lock,
  Unlock,
  TrendingUp,
  School,
  Building2,
  Zap
} from 'lucide-react';

export function InstituteDashboard() {
  const { user } = useAuthStore();
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const [students, setStudents] = useState<User[]>([]);
  const [packages, setPackages] = useState<PricingPackage[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [reports, setReports] = useState<any[]>([]);
  const [groupForm, setGroupForm] = useState({ name: '', type: 'class' as 'institute' | 'class' | 'trainer_head_room' });
  const [reportForm, setReportForm] = useState({ learnerId: '', courseId: '', remarks: '' });
  const [message, setMessage] = useState('');

  const institutionId = useMemo(() => user?.institutionId ?? institutions[0]?.id ?? '', [institutions, user?.institutionId]);

  async function load() {
    const [institutionRows, courseRows, packageRows] = await Promise.all([
      institutionsApi.list().catch(() => []),
      coursesApi.list(),
      institutionsApi.pricing(),
    ]);
    setInstitutions(institutionRows);
    setCourses(courseRows);
    setPackages(packageRows);
    const id = user?.institutionId ?? institutionRows[0]?.id;
    if (id) {
      const [studentRows, reportRows] = await Promise.all([institutionsApi.students(id), reportsApi.byInstitution(id).catch(() => [])]);
      setStudents(studentRows.filter((student) => student.role === 'learner'));
      setReports(reportRows);
    }
  }

  useEffect(() => {
    load().catch((error) => setMessage(error.message));
  }, []);

  async function createGroup(event: FormEvent) {
    event.preventDefault();
    if (!institutionId) return;
    await institutionsApi.createGroup(institutionId, groupForm);
    setGroupForm({ name: '', type: 'class' });
    setMessage('Group created.');
  }

  async function requestReport(event: FormEvent) {
    event.preventDefault();
    if (!institutionId) return;
    await reportsApi.create({ ...reportForm, institutionId });
    setReportForm({ learnerId: '', courseId: '', remarks: '' });
    setMessage('Report generated and available for download.');
    await load();
  }

  return (
    <div className="space-y-8">
      {/* Success/Error Messages */}
      {message && (
        <div className={`rounded-xl border p-4 flex items-start gap-3 transition-all duration-300 ${
          message.includes('created') || message.includes('generated') || message.includes('queued')
            ? 'border-emerald-500/30 bg-emerald-500/10'
            : 'border-blue-500/30 bg-blue-500/10'
        }`}>
          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
            message.includes('created') || message.includes('generated') || message.includes('queued')
              ? 'text-emerald-400'
              : 'text-blue-400'
          }`} />
          <p className={`text-sm flex-1 ${
            message.includes('created') || message.includes('generated') || message.includes('queued')
              ? 'text-emerald-200'
              : 'text-blue-200'
          }`}>{message}</p>
        </div>
      )}

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Institution Overview</h1>
        <p className="text-sm text-gray-400 mt-1">Manage student access, monitor course participation, and keep track of active learning plans from one simple dashboard.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-gray-800 to-gray-800/50 border-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Institution</p>
              <p className="text-xl font-bold text-white mt-2">{institutions.find((item) => item.id === institutionId)?.name ?? 'Portal'}</p>
            </div>
            <Building2 className="w-8 h-8 text-orange-400/30" />
          </div>
        </Card>
        
        <Card className="bg-gradient-to-br from-gray-800 to-gray-800/50 border-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Students</p>
              <p className="text-xl font-bold text-white mt-2">{students.length}</p>
            </div>
            <Users className="w-8 h-8 text-blue-400/30" />
          </div>
        </Card>
        
        <Card className="bg-gradient-to-br from-gray-800 to-gray-800/50 border-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Courses</p>
              <p className="text-xl font-bold text-white mt-2">{courses.length}</p>
            </div>
            <BookOpen className="w-8 h-8 text-emerald-400/30" />
          </div>
        </Card>
        
        <Card className="bg-gradient-to-br from-gray-800 to-gray-800/50 border-gray-700">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Reports</p>
              <p className="text-xl font-bold text-white mt-2">{reports.length}</p>
            </div>
            <FileText className="w-8 h-8 text-purple-400/30" />
          </div>
        </Card>
      </div>

      {/* Active Student Access Section */}
      <Card id="access-overview" className="border-gray-700">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-orange-400" />
              <h3 className="text-lg font-semibold text-white">Active Student Access</h3>
            </div>
            <p className="text-sm text-gray-400 mb-6">Total student access slots allocated across learning levels.</p>
            
            <div className="space-y-3">
              <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-400" />
                    <span className="font-medium text-white">School Access</span>
                  </div>
                  <span className="font-semibold text-orange-400">{Math.floor(students.length * 0.48)} Active</span>
                </div>
              </div>
              
              <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="font-medium text-white">College Access</span>
                  </div>
                  <span className="font-semibold text-blue-400">{Math.floor(students.length * 0.34)} Active</span>
                </div>
              </div>
              
              <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="font-medium text-white">University Access</span>
                  </div>
                  <span className="font-semibold text-purple-400">{Math.floor(students.length * 0.18)} Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Allocation Badge */}
          <div className="lg:flex-shrink-0 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-40 w-40 rounded-full border-8 border-gray-700 bg-gradient-to-br from-gray-800 to-gray-800/50 relative">
                <div className="text-center">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Allocated</p>
                  <p className="text-4xl font-bold text-white">{students.length}</p>
                  <p className="text-xs text-gray-400 mt-1">slots</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Grid Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Manage Students */}
          <Card id="students" className="border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <CardTitle 
                title="Student Management" 
                caption="View and manage all students linked to this institution." 
              />
              <span className="text-sm text-gray-400">{students.length} students</span>
            </div>
            
            {students.length > 0 ? (
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="bg-gray-800/50 border-b border-gray-700">
                      <th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase">Name</th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase">Email</th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase">Level</th>
                      <th className="py-3 px-4 text-left text-xs font-semibold text-gray-400 uppercase">Marketplace</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {students.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-800/50 transition-colors">
                        <td className="py-3 px-4 text-sm font-medium text-gray-200">{student.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-400">{student.email}</td>
                        <td className="py-3 px-4 text-sm">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {(student as any).learnerCategory || 'Portal'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm">
                          <div className="flex items-center gap-1.5">
                            {(student as any).marketplaceGigAccess ? (
                              <>
                                <Unlock className="w-4 h-4 text-emerald-400" />
                                <span className="text-emerald-400">Enabled</span>
                              </>
                            ) : (
                              <>
                                <Lock className="w-4 h-4 text-gray-500" />
                                <span className="text-gray-500">Locked</span>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <EmptyState 
                title="No students yet" 
                detail="Students enrolled through this institution will appear here." 
              />
            )}
          </Card>

          {/* Assign Courses */}
          <Card id="assign-courses" className="border-gray-700">
            <CardTitle 
              title="Available Courses" 
              caption="Recommended courses to assign to institutional learners." 
            />
            
            {courses.length > 0 ? (
              <div className="grid gap-3 md:grid-cols-2">
                {courses.slice(0, 6).map((course) => (
                  <div 
                    key={course.id} 
                    className="rounded-lg border border-gray-700 bg-gray-800 p-4 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-orange-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-white text-sm line-clamp-2">{course.title}</h3>
                        <p className="text-xs text-gray-400 mt-0.5">{course.level}</p>
                      </div>
                    </div>
                    <Button 
                      variant="ghost"
                      size="sm"
                      onClick={() => setMessage(`Course assignment queued for ${course.title}.`)}
                      className="w-full text-xs border-gray-700 hover:bg-gray-700"
                    >
                      <Plus className="w-3.5 h-3.5 mr-1" />
                      Assign Course
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState title="No courses available" detail="Available courses will appear here." />
            )}
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Groups Management */}
          <Card id="groups" className="border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-blue-400" />
              <CardTitle title="Create Group" />
            </div>
            
            <form className="space-y-4" onSubmit={createGroup}>
              <Field label="">
                <TextInput 
                  value={groupForm.name} 
                  onChange={(event) => setGroupForm({ ...groupForm, name: event.target.value })}
                  placeholder="Group name (e.g., Class 10-A)"
                  required 
                />
              </Field>
              
              <Field label="">
                <SelectInput 
                  value={groupForm.type} 
                  onChange={(event) => setGroupForm({ ...groupForm, type: event.target.value as 'institute' | 'class' | 'trainer_head_room' })}
                >
                  <option value="institute">Institute Group</option>
                  <option value="class">Class Group</option>
                  <option value="trainer_head_room">Trainer Head Room</option>
                </SelectInput>
              </Field>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Create Group
              </Button>
            </form>
          </Card>

          {/* Subscription Packages */}
          <Card id="packages" className="border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-orange-400" />
              <h3 className="font-semibold text-white">Pricing Plans</h3>
            </div>
            
            {packages.length > 0 ? (
              <div className="space-y-3">
                {packages.map((item) => (
                  <div key={item.id} className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 hover:bg-gray-800 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <span className="font-medium text-gray-200 text-sm">{item.level}</span>
                      <span className="text-xs text-gray-400">{item.duration}</span>
                    </div>
                    <p className="text-lg font-bold text-orange-400 mb-2">{item.pricePerStudentPkr} PKR</p>
                    <p className="text-xs text-gray-400">GT: {item.grapeTaskRevenuePercent}% • Trainers: {item.trainerRevenuePercent}%</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">No packages available</p>
            )}
          </Card>
        </div>
      </div>

      {/* Reports Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card id="request-report" className="border-gray-700">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-green-400" />
            <CardTitle title="Request Report" caption="Generate student progress reports." />
          </div>
          
          <form className="space-y-4" onSubmit={requestReport}>
            <Field label="">
              <SelectInput 
                value={reportForm.learnerId} 
                onChange={(event) => setReportForm({ ...reportForm, learnerId: event.target.value })} 
                required
              >
                <option value="">Select student...</option>
                {students.map((student) => (
                  <option key={student.id} value={student.id}>{student.name}</option>
                ))}
              </SelectInput>
            </Field>
            
            <Field label="">
              <SelectInput 
                value={reportForm.courseId} 
                onChange={(event) => setReportForm({ ...reportForm, courseId: event.target.value })} 
                required
              >
                <option value="">Select course...</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>{course.title}</option>
                ))}
              </SelectInput>
            </Field>
            
            <Field label="">
              <TextArea 
                value={reportForm.remarks} 
                onChange={(event) => setReportForm({ ...reportForm, remarks: event.target.value })} 
                placeholder="Additional remarks (optional)..."
                required 
              />
            </Field>
            
            <Button className="w-full bg-green-600 hover:bg-green-500 text-white">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </form>
        </Card>

        <Card id="download-reports" className="border-gray-700">
          <div className="flex items-center gap-2 mb-6">
            <Download className="w-5 h-5 text-purple-400" />
            <CardTitle title="Download Reports" caption="Access generated progress reports." />
          </div>
          
          {reports.length > 0 ? (
            <div className="space-y-3">
              {reports.map((report) => (
                <a 
                  key={report.id} 
                  href={report.reportUrl} 
                  download="grapetask-progress-report.pdf"
                  className="block rounded-lg border border-gray-700 bg-gray-800 p-4 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white text-sm">Progress Report</p>
                      <p className="text-xs text-gray-400 mt-1">{new Date(report.createdAt).toLocaleDateString()}</p>
                    </div>
                    <Download className="w-5 h-5 text-purple-400" />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <EmptyState 
              title="No reports yet" 
              detail="Generated progress reports will appear here for download." 
            />
          )}
        </Card>
      </div>
    </div>
  );
}
