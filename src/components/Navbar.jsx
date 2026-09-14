import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from './Icons';
import {
  Menu, X, Download, Mail,   Sparkles, FileText
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Navbar = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'AI & Certs', href: '#certs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-amber-200/60 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 flex items-center justify-center font-bold text-slate-950 text-lg shadow-md shadow-amber-300/40 group-hover:scale-105 transition-transform">
              SS
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
                Sagarika Srivastava
              </span>
              <span className="hidden sm:block text-xs text-amber-700 font-medium">
                Computer Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-amber-100 px-3 py-1.5 rounded-full shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-amber-50 border border-amber-300 hover:bg-amber-100 px-3.5 py-2 rounded-xl transition-all shadow-sm"
              title="View & Download Resume"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="yellow-gradient-btn px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-amber-100 hover:text-amber-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-amber-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-amber-100 flex flex-col gap-2">
              <button
                onClick={() => { setIsOpen(false); onOpenResume(); }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-amber-300 bg-amber-50 text-slate-800 font-semibold text-sm"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                View & Download Resume
              </button>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full yellow-gradient-btn py-2.5 px-4 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};