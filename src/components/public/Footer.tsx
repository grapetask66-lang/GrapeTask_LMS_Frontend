'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, ArrowRight, Sparkles, Heart, Zap, Shield, Award } from 'lucide-react';

const Footer = () => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  const quickLinks = [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Learners', href: '/for-learners' },
    { name: 'For Trainers', href: '/for-trainers' },
    { name: 'For Institutions', href: '/for-institutions' },
  ];

  const supportLinks = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  // Fixed: Social icons as proper React components
  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );

  const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
  );

  const socialLinks = [
    { Icon: FacebookIcon, label: 'Facebook', color: 'hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400' },
    { Icon: InstagramIcon, label: 'Instagram', color: 'hover:bg-pink-600/20 hover:border-pink-500/50 hover:text-pink-400' },
    { Icon: TwitterIcon, label: 'Twitter', color: 'hover:bg-sky-600/20 hover:border-sky-500/50 hover:text-sky-400' },
    { Icon: YoutubeIcon, label: 'YouTube', color: 'hover:bg-red-600/20 hover:border-red-500/50 hover:text-red-400' }
  ];

  const stats = [
    { value: '10K+', label: 'Active Learners', Icon: Zap },
    { value: '500+', label: 'Expert Trainers', Icon: Award },
    { value: '99%', label: 'Satisfaction Rate', Icon: Heart },
    { value: '24/7', label: 'Support Available', Icon: Shield },
  ];

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-10 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes border-dance {
          0%, 100% { border-color: rgba(240, 89, 31, 0.1); }
          50% { border-color: rgba(240, 89, 31, 0.3); }
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-element-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: -3s;
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #f0591f, #ff7a45, #f0591f);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-flow 3s ease infinite;
        }
        
        .footer-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .footer-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(240, 89, 31, 0.1);
        }
        
        .link-hover-effect {
          position: relative;
          overflow: hidden;
        }
        
        .link-hover-effect::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #f0591f, transparent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        
        .link-hover-effect:hover::after {
          transform: scaleX(1);
        }
        
        .stat-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stat-card:hover {
          background: rgba(240, 89, 31, 0.05);
          border-color: rgba(240, 89, 31, 0.2);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(240, 89, 31, 0.15);
        }
        
        .contact-icon-animated {
          animation: border-dance 2s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .stat-card:hover {
            transform: none;
            box-shadow: none;
          }
          .footer-card:hover {
            transform: none;
            box-shadow: none;
          }
        }
      `}</style>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] lg:w-[1000px] h-[250px] sm:h-[400px] lg:h-[500px] bg-[#f0591f]/8 blur-[100px] sm:blur-[150px] rounded-full pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-blue-500/8 blur-[80px] sm:blur-[120px] rounded-full floating-element" />
        <div className="absolute top-1/4 left-0 w-[200px] sm:w-[350px] lg:w-[400px] h-[200px] sm:h-[350px] lg:h-[400px] bg-purple-500/5 blur-[60px] sm:blur-[100px] rounded-full floating-element-delayed" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(240, 89, 31, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f0591f]/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat) => {
            const { Icon } = stat;
            return (
              <div
                key={stat.label}
                className="stat-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center group cursor-default"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-[#f0591f]/10 flex items-center justify-center text-[#f0591f] border border-[#f0591f]/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-[#f0591f] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#71717a] group-hover:text-[#a1a1aa] transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          
          {/* Brand & Description */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-6 sm:space-y-8">
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 sm:space-x-3 group"
              onMouseEnter={() => setHoveredSection('brand')}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Animated logo container */}
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-2 bg-[#f0591f]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-125" />
                
                {/* Main logo */}
                <div className="relative w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-[#f0591f] via-[#ff7a45] to-[#f0591f] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(240,89,31,0.4)] group-hover:shadow-[0_0_40px_rgba(240,89,31,0.6)] transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
                  <span className="text-white font-black text-xl sm:text-3xl relative z-10 group-hover:scale-110 transition-transform duration-300">G</span>
                  
                  {/* Sparkle effects */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100" />
                </div>
              </div>
              
              {/* Brand text */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white group-hover:text-[#e4e4e7] transition-all duration-300 group-hover:tracking-wide">
                  GrapeTask{' '}
                  <span className="relative">
                    <span className="gradient-text">LMS</span>
                  </span>
                </span>
                <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#71717a] mt-1 group-hover:text-[#f0591f]/70 transition-colors duration-300">
                  Skill-to-Earn Platform
                </span>
              </div>
            </Link>
            
            {/* Enhanced description with decorative elements */}
            <div className="relative">
              <div className="absolute -left-3 sm:-left-4 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-[#f0591f] via-[#ff7a45] to-transparent rounded-full opacity-50" />
              <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed max-w-sm pl-3 sm:pl-4">
                Pakistan&apos;s first skill-based learning platform directly connected to a live freelance marketplace. 
                <span className="text-[#f0591f] font-semibold"> Learn, get certified, and start earning instantly.</span>
              </p>
            </div>
            
            {/* Enhanced social links */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm font-bold text-white/60 uppercase tracking-wider">Follow Us</p>
              <div className="flex items-center gap-2 sm:space-x-2">
                {socialLinks.map((social) => {
                  const { Icon } = social;
                  return (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#a1a1aa] hover:-translate-y-1 sm:hover:-translate-y-1.5 transition-all duration-300 shadow-lg group ${social.color}`}
                    >
                      {/* Hover background glow */}
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        style={{ background: 'radial-gradient(circle at center, rgba(240, 89, 31, 0.1), transparent 70%)' }} 
                      />
                      <Icon />
                      
                      {/* Tooltip on hover */}
                      <div className="hidden sm:block absolute -top-8 left-1/2 -translate-x-1/2 bg-[#f0591f] text-white text-xs font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                        {social.label}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#f0591f] rotate-45" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className="lg:col-span-2 lg:col-start-6"
            onMouseEnter={() => setHoveredSection('quick')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-[#f0591f]/10 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f0591f]" />
              </div>
              <h4 className="text-white font-bold text-base sm:text-lg">Quick Links</h4>
            </div>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-card link-hover-effect group flex items-center text-[#a1a1aa] hover:text-[#f0591f] transition-all duration-300 font-medium text-sm sm:text-base py-1.5 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg hover:bg-white/[0.02]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 -ml-3.5 sm:-ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1.5 sm:mr-2 text-[#f0591f]" />
                    <span className="relative">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div 
            className="lg:col-span-2"
            onMouseEnter={() => setHoveredSection('support')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-[#f0591f]/10 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f0591f]" />
              </div>
              <h4 className="text-white font-bold text-base sm:text-lg">Support</h4>
            </div>
            <ul className="space-y-2 sm:space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-card link-hover-effect group flex items-center text-[#a1a1aa] hover:text-[#f0591f] transition-all duration-300 font-medium text-sm sm:text-base py-1.5 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg hover:bg-white/[0.02]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 -ml-3.5 sm:-ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1.5 sm:mr-2 text-[#f0591f]" />
                    <span className="relative">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us - Enhanced */}
          <div 
            className="sm:col-span-2 lg:col-span-3"
            onMouseEnter={() => setHoveredSection('contact')}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-[#f0591f]/10 flex items-center justify-center">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f0591f]" />
              </div>
              <h4 className="text-white font-bold text-base sm:text-lg">Contact Us</h4>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="footer-card p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#f0591f]/20 transition-all duration-300 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="contact-icon-animated w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#f0591f]/10 flex items-center justify-center text-[#f0591f] shrink-0 border border-[#f0591f]/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="space-y-0.5 sm:space-y-1 min-w-0">
                    <p className="text-[10px] sm:text-xs text-[#71717a] font-medium uppercase tracking-wider">Call Us</p>
                    <a 
                      href="tel:+923411228760" 
                      className="text-[#e4e4e7] font-bold text-base sm:text-lg tracking-wide hover:text-[#f0591f] transition-colors duration-300 block"
                    >
                      +92 341 1228760
                    </a>
                    <p className="text-[10px] sm:text-xs text-[#71717a]">Mon-Fri 9am-6pm</p>
                  </div>
                </div>
              </div>
              
              <div className="footer-card p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#f0591f]/20 transition-all duration-300 group">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="contact-icon-animated w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#f0591f]/10 flex items-center justify-center text-[#f0591f] shrink-0 border border-[#f0591f]/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="space-y-0.5 sm:space-y-1 min-w-0">
                    <p className="text-[10px] sm:text-xs text-[#71717a] font-medium uppercase tracking-wider">Email Us</p>
                    <a 
                      href="mailto:info@grapetask.co" 
                      className="text-[#e4e4e7] font-bold text-base sm:text-lg tracking-wide hover:text-[#f0591f] transition-colors duration-300 block truncate"
                    >
                      info@grapetask.co
                    </a>
                    <p className="text-[10px] sm:text-xs text-[#71717a]">We reply within 24hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar - Enhanced */}
        <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <p className="text-[#71717a] text-xs sm:text-sm font-medium">
              &copy; {new Date().getFullYear()} GrapeTask. All Rights Reserved.
            </p>
            <span className="text-[#f0591f]">&bull;</span>
            <p className="text-[#71717a] text-xs sm:text-sm flex items-center">
              Made with <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 mx-1 text-[#f0591f] fill-current animate-pulse" /> in Pakistan
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2">
            <Link 
              href="/privacy" 
              className="text-[#71717a] hover:text-[#e4e4e7] transition-colors text-xs sm:text-sm font-medium link-hover-effect"
            >
              Privacy Policy
            </Link>
            <span className="text-white/10 hidden sm:inline">|</span>
            <Link 
              href="/terms" 
              className="text-[#71717a] hover:text-[#e4e4e7] transition-colors text-xs sm:text-sm font-medium link-hover-effect"
            >
              Terms of Service
            </Link>
            <span className="text-white/10 hidden sm:inline">|</span>
            <Link 
              href="/sitemap" 
              className="text-[#71717a] hover:text-[#e4e4e7] transition-colors text-xs sm:text-sm font-medium link-hover-effect"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;