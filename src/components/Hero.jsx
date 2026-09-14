import React from 'react';
import { Github, Linkedin } from './Icons';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Award,
  Cpu,
  Code2,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Hero = ({ onOpenResume }) => {
  const { personal, stats } = resumeData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Yellow Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-300/25 via-yellow-200/20 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-48 right-10 w-72 h-72 bg-amber-400/10 blur-2xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-yellow-300/15 blur-2xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300/80 text-amber-900 text-xs font-semibold shadow-sm mb-6 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>Available for Machine Learning & Software Opportunities</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-500 bg-clip-text text-transparent">Sagarika Srivastava</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-semibold text-amber-800/90 mb-4 flex items-center gap-2 flex-wrap">
              <span>{personal.title}</span>
              <span className="text-amber-400">•</span>
              <span className="text-slate-600 font-normal">Mumbai, India</span>
            </p>

            {/* Pitch */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {personal.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="yellow-gradient-btn px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md w-full sm:w-auto"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl font-semibold text-sm bg-white border-2 border-amber-300 text-slate-800 hover:bg-amber-50/80 hover:border-amber-400 transition-all flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>View / Download CV</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl font-medium text-sm text-slate-600 hover:text-amber-700 hover:bg-amber-100/50 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-amber-600" />
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social & Contact links */}
            <div className="flex items-center gap-3 flex-wrap pt-4 border-t border-amber-200/60 w-full text-xs text-slate-600">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50/60 transition-all text-slate-700 font-medium"
              >
                <Github className="w-3.5 h-3.5 text-slate-800" />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50/60 transition-all text-slate-700 font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-amber-300 hover:bg-amber-50/60 transition-all text-slate-700 font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <span>{personal.email}</span>
              </a>

              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {personal.location}
              </span>
            </div>
          </div>

          {/* Right Hero Interactive Snapshot */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative card frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500" />
              
              <div className="relative bg-white border border-amber-200/80 rounded-3xl p-6 sm:p-7 shadow-xl shadow-amber-500/10">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-amber-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-mono text-slate-500">sagarika.profile.json</span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    Active Dev
                  </span>
                </div>

                {/* Profile Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 p-0.5 shadow-md shadow-amber-300/40">
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-amber-300 font-bold text-2xl">
                      SS
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Sagarika Srivastava</h3>
                    <p className="text-xs text-amber-700 font-medium">B.E. Computer Engineering (2023–2027)</p>
                    <p className="text-xs text-slate-500">Rizvi College • University of Mumbai</p>
                  </div>
                </div>

                {/* Code-like details */}
                <div className="bg-stone-50 rounded-2xl p-4 font-mono text-xs text-slate-700 space-y-2 border border-stone-200/80 mb-6">
                  <div className="flex justify-between">
                    <span className="text-amber-700">"status":</span>
                    <span className="text-emerald-600 font-semibold">"ML Intern @ testAIn"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">"core_focus":</span>
                    <span className="text-slate-800">["Vision HRI", "IoT", "FastAPI"]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">"academic_cgpa":</span>
                    <span className="text-amber-600 font-bold">7.97 / 10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">"school_score":</span>
                    <span className="text-amber-600 font-bold">92.2% (Ryan Panvel)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">"award":</span>
                    <span className="text-purple-700 font-semibold">"Mumbai Univ Ideathon"</span>
                  </div>
                </div>

                {/* Quick highlights badges */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 text-center">
                    <span className="block text-xl font-extrabold text-amber-700">5+</span>
                    <span className="text-[11px] font-medium text-slate-600">Engineered Projects</span>
                  </div>
                  <div className="p-3 rounded-xl bg-yellow-50/70 border border-yellow-200 text-center">
                    <span className="block text-xl font-extrabold text-amber-800">4</span>
                    <span className="text-[11px] font-medium text-slate-600">Custom AI Agents</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metric / Stat Strip */}
        <div className="mt-16 pt-8 border-t border-amber-200/70">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white p-4 rounded-2xl border border-amber-200/60 shadow-sm hover:border-amber-400 hover:shadow-amber-100/50 transition-all text-center group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">{stat.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};