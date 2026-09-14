import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Award, BookOpen } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, education, internships, skills, projects, certifications, aiAgents } = resumeData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-amber-300 shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Control Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-amber-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              Resume Preview • {personal.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-amber-100 text-slate-700 flex items-center gap-1.5 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-700" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper-styled Resume Content */}
        <div className="p-6 sm:p-10 text-slate-900 font-sans leading-relaxed space-y-6">
          {/* Header */}
          <div className="text-center pb-6 border-b-2 border-amber-400">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wider uppercase text-slate-900">
              {personal.name}
            </h1>
            <p className="text-sm font-semibold tracking-widest text-amber-800 uppercase mt-1">
              {personal.title}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 mt-4">
              <span>{personal.location}</span>
              <span>•</span>
              <a href={`tel:${personal.phone}`} className="hover:text-amber-600">{personal.phone}</a>
              <span>•</span>
              <a href={`mailto:${personal.email}`} className="hover:text-amber-600">{personal.email}</a>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-amber-600 font-medium">LinkedIn</a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-amber-600 font-medium">GitHub</a>
              <span>•</span>
              <a href={personal.website} target="_blank" rel="noreferrer" className="hover:text-amber-600 font-medium">{personal.websiteDisplay}</a>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-extrabold text-amber-800 tracking-widest uppercase mb-2 border-b border-amber-200 pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-extrabold text-amber-800 tracking-widest uppercase mb-3 border-b border-amber-200 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs sm:text-sm">
                  <div>
                    <h3 className="font-bold text-slate-900">{edu.institution}</h3>
                    <p className="text-slate-700">{edu.degree} — <span className="font-semibold text-amber-800">{edu.university}</span></p>
                    <p className="text-slate-500 text-xs">{edu.location} | <strong className="text-slate-800">{edu.score}</strong></p>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-1 sm:mt-0">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships */}
          <div>
            <h2 className="text-xs font-extrabold text-amber-800 tracking-widest uppercase mb-3 border-b border-amber-200 pb-1">
              Internships
            </h2>
            {internships.map((job, idx) => (
              <div key={idx} className="text-xs sm:text-sm mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                  <span>{job.role} — <span className="text-amber-700">{job.company}</span></span>
                  <span className="text-xs font-normal text-slate-500">{job.period}</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700 text-xs">
                  {job.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-extrabold text-amber-800 tracking-widest uppercase mb-3 border-b border-amber-200 pb-1">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-slate-900">
                    <span>{proj.title}</span>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {proj.category}
                    </span>
                  </div>
                  <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-700 text-xs">
                    {proj.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                  <div className="mt-1 text-[11px] text-slate-500">
                    <strong className="text-slate-700">Technologies:</strong> {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-extrabold text-amber-800 tracking-widest uppercase mb-3 border-b border-amber-200 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              {skills.categories.map((cat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-1">
                  <span className="font-bold text-slate-800 w-44 flex-shrink-0">{cat.name}:</span>
                  <span className="text-slate-700">{cat.items.map(i => i.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Courses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h2 className="text-xs font-extrabold text-amber-800 tracking-widest uppercase mb-2 border-b border-amber-200 pb-1">
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                {certifications.map((c, idx) => (
                  <li key={idx}>
                    <strong>{c.title}</strong> — {c.authority}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-extrabold text-amber-800 tracking-widest uppercase mb-2 border-b border-amber-200 pb-1">
                AI Agents Created
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
                {aiAgents.map((agent, idx) => (
                  <li key={idx}>
                    <strong>{agent.name}</strong>: {agent.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};