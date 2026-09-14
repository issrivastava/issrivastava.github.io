import React, { useState } from 'react';
import { Github } from './Icons';
import {
  Sparkles, ExternalLink,  ArrowRight, Star,
  Cpu, Activity, Layers, Gamepad2, Smartphone, Check, X,
  FileCode, Award
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Projects = () => {
  const { projects } = resumeData;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & Robotics', 'Full-Stack', 'IoT & Embedded', 'Game Dev'];

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'AI & Robotics') return p.category.includes('AI') || p.category.includes('Robotics');
    if (activeCategory === 'Full-Stack') return p.category.includes('Full-Stack') || p.category.includes('Mobile');
    if (activeCategory === 'IoT & Embedded') return p.category.includes('IoT') || p.category.includes('Embedded');
    if (activeCategory === 'Game Dev') return p.category.includes('Game');
    return true;
  });

  const getCategoryIcon = (category) => {
    if (category.includes('AI') || category.includes('Robotics')) return Cpu;
    if (category.includes('IoT')) return Activity;
    if (category.includes('Game')) return Gamepad2;
    if (category.includes('Mobile')) return Smartphone;
    return Layers;
  };

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            High-Impact Projects & Systems
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            From vision-guided robotic arms and municipal Ideathon-awarded IoT sensors to full-stack healthcare platforms.
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-300 scale-105'
                  : 'bg-stone-50 border border-stone-200 text-slate-600 hover:text-slate-900 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => {
            const IconComp = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl border border-amber-200/90 overflow-hidden shadow-md shadow-amber-100/30 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-100/60 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Banner with Accent */}
                <div className="p-6 pb-4 bg-gradient-to-b from-amber-50/70 to-white border-b border-amber-100/70">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 shadow-xs">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-amber-700 font-semibold mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {project.summary}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 mb-5">
                      {project.points.slice(0, 2).map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack pills & Actions */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[10px] font-medium px-2 py-1 rounded-lg bg-stone-100 text-slate-500">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group/btn"
                      >
                        <span>Deep Dive Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <a
                        href={resumeData.personal.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-slate-500 hover:text-slate-900 inline-flex items-center gap-1"
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-amber-300 shadow-2xl p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-amber-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  {selectedProject.badge}
                </span>
                <span className="text-xs text-slate-500">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-semibold text-amber-700 mb-4">
                {selectedProject.tagline}
              </p>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 mb-6 text-xs text-slate-700 leading-relaxed">
                {selectedProject.summary}
              </div>

              {/* All bullet points */}
              <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Key Engineering Deliverables
              </h4>
              <div className="space-y-2.5 mb-6">
                {selectedProject.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-[10px]">
                      {idx + 1}
                    </div>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <h4 className="font-bold text-slate-900 text-sm mb-2">Full Technology Stack</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 rounded-xl bg-amber-50 text-amber-900 border border-amber-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-amber-100 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={resumeData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="yellow-gradient-btn px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>View Project on GitHub</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold border border-stone-300 text-slate-700 hover:bg-stone-50"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};