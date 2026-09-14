import React from 'react';
import { Github, Linkedin } from './Icons';
import {
  ArrowUp, Heart,   Mail, Globe, Sparkles
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Footer = ({ onOpenResume }) => {
  const { personal } = resumeData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center font-bold text-slate-950 text-lg shadow-md shadow-amber-400/20">
                SS
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Sagarika Srivastava
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              Computer Engineering Undergraduate specializing in Machine Learning, Full-Stack development, and IoT robotics solutions.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 text-slate-300 hover:text-amber-400 hover:bg-slate-700 flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 text-slate-300 hover:text-amber-400 hover:bg-slate-700 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-9 h-9 rounded-xl bg-slate-800 text-slate-300 hover:text-amber-400 hover:bg-slate-700 flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Profile</a></li>
              <li><a href="#skills" className="hover:text-amber-400 transition-colors">Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-amber-400 transition-colors">Experience & Education</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Engineered Projects</a></li>
              <li><a href="#certs" className="hover:text-amber-400 transition-colors">AI Agents & Certs</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Information</a></li>
            </ul>
          </div>

          {/* Resume & Location */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Curriculum Vitae
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              View the verified resume containing complete academic background, projects, and certifications.
            </p>
            <button
              onClick={onOpenResume}
              className="yellow-gradient-btn px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm"
            >
              <span>Preview & Print Resume</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sagarika Srivastava. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted in White & Yellow Theme
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-700 flex items-center justify-center transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};