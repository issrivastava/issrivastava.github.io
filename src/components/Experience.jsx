import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Experience = () => {
  const { internships, education } = resumeData;
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="experience" className="py-20 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work Experience & Academic Background
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Hands-on machine learning experience paired with rigorous Computer Engineering foundations at University of Mumbai.
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white border border-amber-200 rounded-2xl shadow-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-sm shadow-amber-300'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'internships'
                  ? 'bg-amber-400 text-slate-950 shadow-sm shadow-amber-300'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Internships ({internships.length})
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'education'
                  ? 'bg-amber-400 text-slate-950 shadow-sm shadow-amber-300'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Education ({education.length})
            </button>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Internships Column */}
          {(activeTab === 'all' || activeTab === 'internships') && (
            <div className={`space-y-6 ${activeTab === 'internships' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Industry Experience</h3>
              </div>

              {internships.map((job, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-amber-200/90 shadow-md shadow-amber-100/40 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100/60 transition-all duration-300 relative group"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                        {job.status}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-amber-700 transition-colors">
                        {job.role}
                      </h4>
                      <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm mt-0.5">
                        <span>{job.company}</span>
                        {job.url && (
                          <a 
                            href={job.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-amber-600 hover:text-amber-700 inline-flex items-center"
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-xl font-medium">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{job.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="space-y-2.5 mb-5">
                    {job.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-amber-100 flex flex-wrap gap-2">
                    {job.technologies.map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Column */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className={`space-y-6 ${activeTab === 'education' ? 'lg:col-span-2 max-w-4xl mx-auto w-full' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Academic Education</h3>
              </div>

              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-amber-200/90 shadow-md shadow-amber-100/40 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100/60 transition-all duration-300 relative group"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                          {edu.scoreType}: {edu.score}
                        </span>
                        <span className="text-xs font-medium text-slate-500">
                          {edu.status}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-amber-700 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-amber-700 font-medium">
                        {edu.university}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-xl font-medium">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        {edu.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
                        <MapPin className="w-3 h-3 text-amber-500" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 mt-4 pt-4 border-t border-amber-100">
                    {edu.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};