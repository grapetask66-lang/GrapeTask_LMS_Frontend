'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  GraduationCap, 
  Briefcase, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  CheckCircle2, 
  Video,
  FileText,
  User,
  Mail,
  Building2,
  DollarSign,
  Hash,
  Star,
  BookOpen,
  Camera,
  CalendarDays,
  Clock,
  Image as ImageIcon
} from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export default function OnboardingFlow() {
  const router = useRouter();
  
  // Step Management
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isFlipping, setIsFlipping] = useState(false);

  // Form State
  const [role, setRole] = useState<'student' | 'trainer' | null>(null);
  
  // Trainer Specific
  const [personalDetails, setPersonalDetails] = useState({ name: '', username: '', phone: '', email: '' });
  const [profDetails, setProfDetails] = useState({ title: '', experience: '', university: '' });
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState('');
  
  // Real File Upload States
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const profilePicRef = useRef<HTMLInputElement>(null);
  
  const [documents, setDocuments] = useState<{cnic: File|null, degree: File|null, resume: File|null}>({ cnic: null, degree: null, resume: null });
  const cnicRef = useRef<HTMLInputElement>(null);
  const degreeRef = useRef<HTMLInputElement>(null);
  const resumeRef = useRef<HTMLInputElement>(null);
  
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const videoRef = useRef<HTMLInputElement>(null);

  const [videoLink, setVideoLink] = useState('');
  const [payment, setPayment] = useState({ bankName: '', accountTitle: '', iban: '' });
  const [interview, setInterview] = useState({ date: '', time: '' });
  
  const totalSteps = role === 'trainer' ? 9 : 4; // Students skip straight to success after skills

  const handleNext = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setDirection('forward');
      if (role === 'student' && step === 4) {
        setStep(9);
      } else {
        setStep((s) => s + 1);
      }
      setIsFlipping(false);
    }, 400); // Wait for half flip
  };

  const handleBack = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setDirection('backward');
      if (role === 'student' && step === 9) {
        setStep(4);
      } else {
        setStep((s) => s - 1);
      }
      setIsFlipping(false);
    }, 400);
  };

  const handleFinish = () => {
    if (role === 'trainer') {
      router.push('/terms');
    } else {
      router.push('/student/dashboard');
    }
  };

  const addSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentSkill.trim()) {
      e.preventDefault();
      if (!skills.includes(currentSkill.trim())) {
        setSkills([...skills, currentSkill.trim()]);
      }
      setCurrentSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  // Left Side Banner Content based on Step
  const getBannerContent = () => {
    if (step === 1) return { title: "Join GrapeTask", desc: "Select your role to start your journey." };
    if (step === 2) return { title: "Personal Info", desc: "Tell us about yourself so we can set up your profile." };
    if (step === 3) return { title: "Professional Background", desc: "Share your experience and academic history." };
    if (step === 4) return { title: "Your Expertise", desc: "List the skills you excel at. Press Enter to add." };
    if (step === 5) return { title: "Verification", desc: "Upload your professional documents to get verified." };
    if (step === 6) return { title: "Demo Video", desc: "Showcase your teaching style with a short demo video." };
    if (step === 7) return { title: "Payment Details", desc: "Where should we send your earnings?" };
    if (step === 8) return { title: "Interview Booking", desc: "Schedule a quick 10-15 minute verification call with our team." };
    if (step === 9) return { title: "You're All Set!", desc: "Your profile is ready for the next steps." };
    return { title: "", desc: "" };
  };

  const banner = getBannerContent();

  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-[#020617] overflow-hidden font-sans relative">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#f0591f] opacity-[0.08] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600 opacity-[0.05] rounded-full blur-[150px] pointer-events-none" />

      {/* LEFT SIDE: Immersive Graphics (Desktop Only) */}
      <div className="hidden md:flex md:w-[45%] lg:w-[40%] bg-[#0f172a]/50 backdrop-blur-3xl border-r border-white/5 relative flex-col justify-between p-12 lg:p-16 z-10 shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f0591f] to-[#ff7a45] flex items-center justify-center shadow-lg shadow-[#f0591f]/30">
            <span className="text-white font-black text-xl">G</span>
          </div>
          <span className="text-2xl font-black text-white">GrapeTask<span className="text-[#f0591f]">.</span></span>
        </div>

        {/* Dynamic Text */}
        <div className="animate-in slide-in-from-bottom-8 fade-in duration-700">
          <div className="inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-[#f0591f] font-bold text-xs tracking-widest uppercase">Step {step} of {totalSteps}</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6 drop-shadow-lg">
            {banner.title}
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed max-w-md">
            {banner.desc}
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center gap-3 mt-12">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-500 ${
                i + 1 === step ? 'w-10 bg-gradient-to-r from-[#f0591f] to-orange-400 shadow-[0_0_15px_rgba(240,89,31,0.5)]' : 
                i + 1 < step ? 'w-2 bg-white/40' : 'w-2 bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Interactive Flip Form */}
      <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8 perspective-[2000px] z-10">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="absolute top-6 left-6 md:hidden flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f0591f] to-[#ff7a45] flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-xl font-black text-white">GrapeTask</span>
        </div>

        {/* Mobile Progress (Hidden on Desktop) */}
        <div className="absolute top-20 left-6 right-6 md:hidden">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#f0591f] transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
          <p className="text-xs text-[#94a3b8] mt-2 font-bold uppercase tracking-wider">Step {step} of {totalSteps}</p>
        </div>

        {/* The Flipping Card */}
        <div 
          className={`w-full max-w-2xl bg-[#0f172a]/80 backdrop-blur-2xl border border-white/10 rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 shadow-2xl transition-all duration-700 transform-style-3d ${
            isFlipping ? (direction === 'forward' ? 'rotate-y-90 scale-95 opacity-0' : '-rotate-y-90 scale-95 opacity-0') : 'rotate-y-0 scale-100 opacity-100'
          }`}
          style={{ transformOrigin: 'center center' }}
        >
          <div className="h-[55vh] sm:h-[60vh] max-h-[600px] overflow-y-auto hide-scrollbar pb-10">
            
            {/* Step 1: Role Selection */}
            {step === 1 && (
              <div className="h-full flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-8 text-center">I want to join as a...</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div 
                    onClick={() => setRole('student')}
                    className={`cursor-pointer group relative overflow-hidden rounded-[32px] border-2 p-8 transition-all duration-300 ${
                      role === 'student' ? 'border-[#f0591f] bg-[#f0591f]/10 shadow-[0_0_30px_rgba(240,89,31,0.2)]' : 'border-[#1e293b] bg-[#020617] hover:border-[#334155]'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors ${role === 'student' ? 'bg-[#f0591f] shadow-lg shadow-[#f0591f]/30' : 'bg-[#1e293b] group-hover:bg-[#334155]'}`}>
                        <GraduationCap className={`w-10 h-10 ${role === 'student' ? 'text-white' : 'text-[#94a3b8]'}`} />
                      </div>
                      <h3 className={`text-2xl font-black mb-3 ${role === 'student' ? 'text-white' : 'text-[#cbd5e1]'}`}>Student</h3>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Learn premium skills, complete practical tasks, and start earning.</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => setRole('trainer')}
                    className={`cursor-pointer group relative overflow-hidden rounded-[32px] border-2 p-8 transition-all duration-300 ${
                      role === 'trainer' ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)]' : 'border-[#1e293b] bg-[#020617] hover:border-[#334155]'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors ${role === 'trainer' ? 'bg-blue-500 shadow-lg shadow-blue-500/30' : 'bg-[#1e293b] group-hover:bg-[#334155]'}`}>
                        <Briefcase className={`w-10 h-10 ${role === 'trainer' ? 'text-white' : 'text-[#94a3b8]'}`} />
                      </div>
                      <h3 className={`text-2xl font-black mb-3 ${role === 'trainer' ? 'text-white' : 'text-[#cbd5e1]'}`}>Trainer</h3>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Teach high-demand skills, review assignments, and earn 70% revenue share.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Personal Details */}
            {step === 2 && (
              <div className="h-full">
                <div className="space-y-6 sm:space-y-8 mt-4">
                  
                  {/* Photo Upload Area */}
                  <div className="flex flex-col items-center justify-center mb-4">
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      ref={profilePicRef}
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setProfilePic(e.target.files[0]);
                        }
                      }}
                    />
                    <div 
                      onClick={() => profilePicRef.current?.click()}
                      className={`w-24 h-24 rounded-[2rem] border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all group shadow-inner overflow-hidden ${profilePic ? 'border-[#f0591f] bg-[#f0591f]/10' : 'bg-[#020617] border-[#334155] hover:border-[#f0591f] hover:bg-[#f0591f]/5'}`}
                    >
                      {profilePic ? (
                        <ImageIcon className="w-8 h-8 text-[#f0591f]" />
                      ) : (
                        <>
                          <Camera className="w-6 h-6 text-[#64748b] group-hover:text-[#f0591f] mb-2" />
                          <span className="text-[10px] font-bold text-[#64748b] group-hover:text-[#f0591f] uppercase tracking-wider">Upload</span>
                        </>
                      )}
                    </div>
                    {profilePic && <span className="text-xs text-[#f0591f] mt-2 font-bold">{profilePic.name}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
                        <input 
                          type="text" 
                          required
                          value={personalDetails.name}
                          onChange={(e) => setPersonalDetails({...personalDetails, name: e.target.value})}
                          placeholder="e.g. John Doe" 
                          className="w-full pl-11 pr-4 py-3 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium text-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Username</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748b] font-bold text-sm">@</span>
                        <input 
                          type="text" 
                          required
                          value={personalDetails.username}
                          onChange={(e) => setPersonalDetails({...personalDetails, username: e.target.value})}
                          placeholder="johndoe123" 
                          className="w-full pl-9 pr-4 py-3 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium text-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748b]" />
                        <input 
                          type="email" 
                          required
                          value={personalDetails.email}
                          onChange={(e) => setPersonalDetails({...personalDetails, email: e.target.value})}
                          placeholder="john@example.com" 
                          className="w-full pl-11 pr-4 py-3 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={personalDetails.phone}
                        onChange={(e) => setPersonalDetails({...personalDetails, phone: e.target.value})}
                        placeholder="+92 300 0000000" 
                        className="w-full px-5 py-3 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Professional Details */}
            {step === 3 && (
              <div className="h-full">
                <div className="space-y-6 sm:space-y-8 mt-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Professional Title</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                      <input 
                        type="text" 
                        value={profDetails.title}
                        onChange={(e) => setProfDetails({...profDetails, title: e.target.value})}
                        placeholder={role === 'trainer' ? "e.g. Senior Frontend Engineer" : "e.g. Computer Science Student"} 
                        className="w-full pl-12 pr-4 py-4 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Years of Experience</label>
                      <select 
                        value={profDetails.experience}
                        onChange={(e) => setProfDetails({...profDetails, experience: e.target.value})}
                        className="w-full px-5 py-4 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium appearance-none"
                      >
                        <option value="" disabled>Select experience</option>
                        {role === 'trainer' ? (
                          <>
                            <option value="1-3">1-3 Years</option>
                            <option value="3-5">3-5 Years</option>
                            <option value="5-10">5-10 Years</option>
                            <option value="10+">10+ Years</option>
                          </>
                        ) : (
                          <>
                            <option value="none">None (Beginner)</option>
                            <option value="<1">Less than 1 Year</option>
                            <option value="1-2">1-2 Years</option>
                          </>
                        )}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">University / Institute</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                        <input 
                          type="text" 
                          value={profDetails.university}
                          onChange={(e) => setProfDetails({...profDetails, university: e.target.value})}
                          placeholder="Current or Past University" 
                          className="w-full pl-12 pr-4 py-4 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Skills */}
            {step === 4 && (
              <div className="h-full">
                <div className="space-y-6 mt-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Add Skills</label>
                    <div className="relative">
                      <Star className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f0591f]" />
                      <input 
                        type="text" 
                        value={currentSkill}
                        onChange={(e) => setCurrentSkill(e.target.value)}
                        onKeyDown={addSkill}
                        placeholder="Type a skill and press Enter (e.g. React.js, UI/UX)" 
                        className="w-full pl-12 pr-4 py-4 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium"
                      />
                    </div>
                  </div>

                  <div className="min-h-[150px] p-6 rounded-[2rem] border border-white/5 bg-[#020617]/50 shadow-inner">
                    {skills.length === 0 ? (
                      <div className="h-full flex items-center justify-center text-[#64748b] text-sm">
                        No skills added yet. Press enter to add.
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="bg-[#1e293b] text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 border border-white/10 animate-in zoom-in-95"
                          >
                            {skill}
                            <button 
                              onClick={() => removeSkill(skill)}
                              className="w-5 h-5 rounded-full bg-white/10 hover:bg-red-500/20 hover:text-red-400 flex items-center justify-center transition-colors"
                            >
                              &times;
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Documents (Trainer Only) */}
            {step === 5 && role === 'trainer' && (
              <div className="h-full">
                <div className="grid gap-4 mt-4">
                  <input type="file" accept=".pdf,image/*" className="hidden" ref={cnicRef} onChange={(e) => e.target.files && setDocuments({...documents, cnic: e.target.files[0]})} />
                  <input type="file" accept=".pdf,image/*" className="hidden" ref={degreeRef} onChange={(e) => e.target.files && setDocuments({...documents, degree: e.target.files[0]})} />
                  <input type="file" accept=".pdf,image/*" className="hidden" ref={resumeRef} onChange={(e) => e.target.files && setDocuments({...documents, resume: e.target.files[0]})} />

                  {[
                    { id: 'cnic', label: 'CNIC / Identity Card', icon: FileText, state: documents.cnic, ref: cnicRef },
                    { id: 'degree', label: 'Latest Degree', icon: GraduationCap, state: documents.degree, ref: degreeRef },
                    { id: 'resume', label: 'Professional Resume', icon: Briefcase, state: documents.resume, ref: resumeRef }
                  ].map((doc) => (
                    <div 
                      key={doc.id}
                      onClick={() => doc.ref.current?.click()}
                      className={`cursor-pointer p-6 rounded-[24px] border-2 flex items-center justify-between transition-all duration-300 ${doc.state ? 'bg-[#f0591f]/10 border-[#f0591f] shadow-[0_0_20px_rgba(240,89,31,0.1)]' : 'bg-[#020617] border-[#1e293b] hover:border-[#334155]'}`}
                    >
                      <div className="flex items-center gap-5">
                        <div className={`p-4 rounded-2xl ${doc.state ? 'bg-[#f0591f]' : 'bg-[#1e293b]'}`}>
                          <doc.icon className={`w-6 h-6 ${doc.state ? 'text-white' : 'text-[#64748b]'}`} />
                        </div>
                        <div>
                          <h4 className={`text-lg font-bold ${doc.state ? 'text-white' : 'text-[#cbd5e1]'}`}>{doc.label}</h4>
                          <p className="text-xs text-[#64748b] mt-1 font-bold">
                            {doc.state ? doc.state.name : 'PDF, JPG (Max 5MB)'}
                          </p>
                        </div>
                      </div>
                      {doc.state ? <CheckCircle2 className="text-[#f0591f] w-8 h-8" /> : <Upload className="text-[#64748b] w-6 h-6" />}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Demo Video (Trainer Only) */}
            {step === 6 && role === 'trainer' && (
              <div className="h-full">
                <div className="space-y-6 mt-4">
                  
                  <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-[24px]">
                    <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2"><Video className="w-5 h-5" /> Video Requirements</h3>
                    <ul className="text-sm text-[#94a3b8] space-y-2 list-disc pl-5">
                      <li>Duration must be between 3 to 10 minutes.</li>
                      <li>Video quality must be at least 720p (HD).</li>
                      <li>Audio must be clear without echo or background noise.</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Video Link (YouTube / Google Drive)</label>
                    <input 
                      type="url" 
                      value={videoLink}
                      onChange={(e) => setVideoLink(e.target.value)}
                      placeholder="https://..." 
                      className="w-full px-5 py-4 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-4 text-sm text-[#64748b] font-bold uppercase tracking-wider py-2">
                    <hr className="flex-1 border-[#1e293b]" /> OR <hr className="flex-1 border-[#1e293b]" />
                  </div>

                  <input 
                    type="file" 
                    accept="video/mp4,video/webm" 
                    className="hidden" 
                    ref={videoRef}
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setVideoFile(e.target.files[0]);
                      }
                    }}
                  />
                  <div 
                    onClick={() => videoRef.current?.click()}
                    className={`w-full p-8 border-2 border-dashed rounded-[32px] flex flex-col items-center justify-center transition-colors cursor-pointer group ${videoFile ? 'border-[#f0591f] bg-[#f0591f]/10' : 'border-[#334155] bg-[#020617] hover:border-[#f0591f]'}`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors mb-4 ${videoFile ? 'bg-[#f0591f]' : 'bg-[#1e293b] group-hover:bg-[#f0591f]'}`}>
                      {videoFile ? <CheckCircle2 className="w-8 h-8 text-white" /> : <Upload className="w-8 h-8 text-[#64748b] group-hover:text-white" />}
                    </div>
                    <span className={`font-bold text-lg mb-1 ${videoFile ? 'text-white' : 'text-white'}`}>
                      {videoFile ? 'Video Uploaded Successfully' : 'Click to upload video file'}
                    </span>
                    <span className="text-[#64748b] text-sm">
                      {videoFile ? videoFile.name : 'MP4, WebM (Max 500MB)'}
                    </span>
                  </div>

                </div>
              </div>
            )}

            {/* Step 7: Payment Details (Trainer Only) */}
            {step === 7 && role === 'trainer' && (
              <div className="h-full">
                <div className="space-y-6 sm:space-y-8 mt-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Bank Name</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                      <input 
                        type="text" 
                        value={payment.bankName}
                        onChange={(e) => setPayment({...payment, bankName: e.target.value})}
                        placeholder="e.g. Meezan Bank, Payoneer" 
                        className="w-full pl-12 pr-4 py-4 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Account Title</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                      <input 
                        type="text" 
                        value={payment.accountTitle}
                        onChange={(e) => setPayment({...payment, accountTitle: e.target.value})}
                        placeholder="Name exactly as it appears on account" 
                        className="w-full pl-12 pr-4 py-4 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">IBAN / Account Number</label>
                    <div className="relative">
                      <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                      <input 
                        type="text" 
                        value={payment.iban}
                        onChange={(e) => setPayment({...payment, iban: e.target.value})}
                        placeholder="PK00 MEEZ 0000 0000 0000 0000" 
                        className="w-full pl-12 pr-4 py-4 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 8: Interview Booking (Trainer Only) */}
            {step === 8 && role === 'trainer' && (
              <div className="h-full">
                <div className="space-y-6 mt-4">
                  
                  <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-[24px]">
                    <h3 className="text-purple-400 font-bold mb-2 flex items-center gap-2"><Video className="w-5 h-5" /> Mandatory Verification Call</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed">
                      To maintain GrapeTask's premium quality, all trainers must pass a 10-15 minute verification call with our team. Please schedule a time below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Select Date</label>
                      <div className="relative">
                        <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                        <input 
                          type="date" 
                          value={interview.date}
                          onChange={(e) => setInterview({...interview, date: e.target.value})}
                          className="w-full pl-12 pr-4 py-4 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-white/70 uppercase tracking-widest pl-1">Select Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#64748b]" />
                        <input 
                          type="time" 
                          value={interview.time}
                          onChange={(e) => setInterview({...interview, time: e.target.value})}
                          className="w-full pl-12 pr-4 py-4 bg-[#020617] border border-white/10 rounded-2xl text-white placeholder-[#475569] focus:outline-none focus:border-[#f0591f] focus:ring-1 focus:ring-[#f0591f] transition-all shadow-inner font-medium"
                        />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            )}

            {/* Step 9 (Success) */}
            {step === 9 && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-[#f0591f] rounded-full blur-[80px] opacity-40 animate-pulse" />
                  <div className="w-32 h-32 bg-gradient-to-tr from-[#f0591f] to-[#fb923c] rounded-[2rem] rotate-12 flex items-center justify-center shadow-[0_0_50px_rgba(240,89,31,0.5)] relative z-10 transition-transform hover:rotate-0">
                    <CheckCircle2 className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight drop-shadow-md">
                  {role === 'trainer' ? 'Profile Ready!' : "You're All Set!"}
                </h1>
                
                <p className="text-[#94a3b8] text-lg max-w-sm mx-auto">
                  {role === 'trainer' 
                    ? "Next, you need to provide your equipment proofs and accept the Trainer Terms."
                    : "Welcome to GrapeTask! Start exploring courses and freelance opportunities."}
                </p>
              </div>
            )}

          </div>

          {/* Fixed Bottom Action Bar */}
          <div className="absolute bottom-0 left-0 w-full bg-[#0f172a]/95 backdrop-blur-3xl border-t border-white/10 p-6 sm:px-12 flex items-center justify-between rounded-b-[32px] sm:rounded-b-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] z-30">
            {step < 9 ? (
              <>
                <button 
                  onClick={handleBack}
                  className={`font-bold text-[#64748b] hover:text-white px-6 py-3 rounded-xl transition-all hover:bg-white/5 ${step === 1 ? 'invisible' : 'visible'}`}
                >
                  Go Back
                </button>
                
                <button 
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !role) ||
                    (step === 2 && (!personalDetails.name || !personalDetails.username || !personalDetails.email || !personalDetails.phone)) ||
                    (step === 3 && (!profDetails.experience || !profDetails.title)) ||
                    (step === 4 && skills.length === 0) ||
                    (step === 7 && (!payment.bankName || !payment.iban)) ||
                    (step === 8 && role === 'trainer' && (!interview.date || !interview.time))
                  }
                  className="flex items-center gap-3 bg-gradient-to-r from-[#f0591f] to-[#ff7a45] hover:shadow-[0_0_30px_rgba(240,89,31,0.6)] disabled:opacity-50 disabled:bg-none disabled:bg-[#1e293b] disabled:text-[#64748b] disabled:shadow-none text-white px-10 py-4 rounded-2xl font-black text-lg transition-all active:scale-95 group"
                >
                  {step === (role === 'trainer' ? 8 : 4) ? 'Submit Application' : 'Continue'} 
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            ) : (
              <button 
                onClick={handleFinish}
                className="w-full flex items-center justify-center gap-3 bg-white text-[#020617] hover:bg-gray-200 px-10 py-5 rounded-2xl font-black text-xl transition-all active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] group"
              >
                {role === 'trainer' ? 'Proceed to Terms' : 'Go to Dashboard'} 
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}
