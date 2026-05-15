import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#010411] border-t border-lightBorder pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 orange-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                GrapeTask <span className="text-primaryOrange">LMS</span>
              </span>
            </Link>
            <p className="text-bodyGrayText text-sm leading-relaxed max-w-xs">
              Pakistan's first skill-based learning platform directly connected to a live freelance marketplace. Learn, Get Certified, and Start Earning.
            </p>
            <div className="flex items-center space-x-4">
              {['Facebook', 'Instagram', 'TikTok', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-cardBg border border-lightBorder flex items-center justify-center hover:border-primaryOrange hover:text-primaryOrange transition-all"
                >
                  <span className="sr-only">{social}</span>
                  {/* Icons could go here */}
                  <div className="w-4 h-4 bg-current rounded-sm opacity-20" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['How It Works', 'For Learners', 'For Trainers', 'For Institutions', 'Pricing', 'About'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                    className="text-bodyGrayText hover:text-primaryOrange transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              {['FAQ', 'Certification', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                    className="text-bodyGrayText hover:text-primaryOrange transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-bodyGrayText">
                <span className="text-primaryOrange">📞</span>
                <span>+92 341 1228760</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-bodyGrayText">
                <span className="text-primaryOrange">✉️</span>
                <span>info@grapetask.co</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-bodyGrayText">
                <span className="text-primaryOrange">🌐</span>
                <span>www.grapetask.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lightBorder pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-darkGrayNumber text-xs mb-4 md:mb-0">
            © 2026 GrapeTask. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs text-darkGrayNumber">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
