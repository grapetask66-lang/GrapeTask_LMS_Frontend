import React from 'react';
import Link from 'next/link';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#020617] border-t border-white/10 pt-24 pb-10 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#f0591f]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#f0591f] to-[#ff7a45] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(240,89,31,0.3)] group-hover:shadow-[0_0_30px_rgba(240,89,31,0.5)] transition-all duration-300">
                <span className="text-white font-black text-2xl">G</span>
              </div>
              <span className="text-3xl font-black tracking-tight text-white group-hover:text-[#e4e4e7] transition-colors">
                GrapeTask <span className="text-[#f0591f]">LMS</span>
              </span>
            </Link>
            <p className="text-[#a1a1aa] text-base leading-relaxed max-w-sm">
              Pakistan's first skill-based learning platform directly connected to a live freelance marketplace. Learn, get certified, and start earning instantly.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {[
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, label: 'Facebook' },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, label: 'Instagram' },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>, label: 'Twitter' },
                { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>, label: 'YouTube' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#a1a1aa] hover:bg-[#f0591f]/10 hover:border-[#f0591f]/50 hover:text-[#f0591f] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['How It Works', 'For Learners', 'For Trainers', 'For Institutions'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                    className="group flex items-center text-[#a1a1aa] hover:text-[#f0591f] transition-colors font-medium text-base"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2" />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              {['Pricing', 'FAQ', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                    className="group flex items-center text-[#a1a1aa] hover:text-[#f0591f] transition-colors font-medium text-base"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2" />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#f0591f]/10 flex items-center justify-center text-[#f0591f] shrink-0 border border-[#f0591f]/20 shadow-inner">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[#71717a] font-medium mb-1">Call Us</p>
                  <p className="text-[#e4e4e7] font-bold tracking-wide">+92 341 1228760</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#f0591f]/10 flex items-center justify-center text-[#f0591f] shrink-0 border border-[#f0591f]/20 shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[#71717a] font-medium mb-1">Email Us</p>
                  <p className="text-[#e4e4e7] font-bold tracking-wide">info@grapetask.co</p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#71717a] text-sm font-medium">
            © {new Date().getFullYear()} GrapeTask. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-sm font-medium">
            <Link href="/privacy" className="text-[#71717a] hover:text-[#e4e4e7] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[#71717a] hover:text-[#e4e4e7] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
