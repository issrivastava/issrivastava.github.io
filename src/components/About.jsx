import React from 'react';
import { Eye, Layers, Cpu, CheckCircle2, GraduationCap, Award, Compass, Sparkles } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const About = () => {
  const { personal, pillars } = resumeData;

  const iconMap = {
    Eye: Eye,
    Layers: Layers,
    Cpu: Cpu
  };

  return (
    <section id="about" className="py-20 bg-stone-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging Software, Intelligent Models & Physical Hardware
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Narrative Card */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-3xl border border-amber-200/80 shadow-md shadow-amber-100/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-amber-700 font-semibold text-sm">
                <Compass className="w-4 h-4" />
                <span>My Journey & Vision</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">
                Computer Engineering Student with an Appetite for Innovation
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">
                Currently pursuing my <strong>B.E. in Computer Engineering</strong> at <strong>Rizvi College of Engineering (University of Mumbai)</strong> with a strong academic standing of <strong>CGPA 7.97</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                I thrive at the intersection of full-stack engineering, mobile ecosystems, embedded robotics, and artificial intelligence. Whether developing high-speed RESTful microservices with <strong>FastAPI & PostgreSQL</strong>, fluid cross-platform apps in <strong>Flutter</strong>, or real-time vision-based gesture control systems using <strong>OpenCV & MediaPipe</strong>, I build systems designed for tangible real-world utility.
              </p>

              <div className="space-y-3 pt-4 border-t border-amber-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-xs text-slate-700 font-medium">
                    Strong foundational problem solving in C++, Python, and relational database architecture.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-xs text-slate-700 font-medium">
                    Experience deploying physical sensor loops (Arduino/ESP32) and connecting them to cloud dashboards.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-xs text-slate-700 font-medium">
                    Honored at Mumbai University's Ideathon for AirSential — an innovative IoT air monitoring system.
                  </span>
                </div>
              </div>
            </div>

            {/* Academic pill */}
            <div className="mt-8 pt-4 border-t border-amber-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                RCOE, Bandra (W), Mumbai
              </span>
              <span className="font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                Graduating 2027
              </span>
            </div>
          </div>

          {/* Right Core Specialization Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {pillars.map((pillar, idx) => {
              const IconComp = iconMap[pillar.icon] || Cpu;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-3xl border border-amber-200/80 shadow-sm hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100/60 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                          {pillar.title}
                        </h4>
                        <span className="text-xs font-mono text-amber-600 font-semibold">0{idx + 1}</span>
                      </div>
                      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                        {pillar.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {pillar.tools.map((tool, tIdx) => (
                          <span 
                            key={tIdx}
                            className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50/80 text-amber-900 border border-amber-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};