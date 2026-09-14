import React, { useState } from 'react';
import { Github } from './Icons';
import {
  Code2, Cpu, Smartphone, FileCode, Gamepad2, Coffee, Database,
  Layout, Zap, Atom, Eye, Hand, Server, Binary, Wifi, Gauge,
  Radio, Activity, GitBranch,  Terminal, TabletSmartphone,
  Boxes, Sparkles, Search, Layers
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Skills = () => {
  const { categories } = resumeData.skills;
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap = {
    Code2, Cpu, Smartphone, FileCode, Gamepad2, Coffee, Database,
    Layout, Zap, Atom, Eye, Hand, Server, Binary, Wifi, Gauge,
    Radio, Activity, GitBranch, Github, Terminal, TabletSmartphone, Boxes
  };

  const tabs = ['All', ...categories.map(c => c.name)];

  const allItems = categories.flatMap(c => 
    c.items.map(item => ({ ...item, category: c.name }))
  );

  const filteredItems = allItems.filter(item => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 bg-white relative">
      {/* Background yellow accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Core Tooling & Engineering Stacks
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Proficiencies across programming languages, backend frameworks, cross-platform mobile, computer vision, and IoT hardware.
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto p-1.5 bg-stone-100/80 rounded-2xl border border-stone-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-amber-400 text-slate-950 shadow-sm shadow-amber-300'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Real-time Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-amber-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g., Python, OpenCV)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-amber-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {filteredItems.map((skill, idx) => {
            const IconComp = iconMap[skill.icon] || Code2;
            return (
              <div
                key={idx}
                className="bg-stone-50/70 hover:bg-white border border-stone-200 hover:border-amber-400 p-4 rounded-2xl transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-amber-100/50 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 group-hover:bg-amber-400 text-amber-800 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    {skill.level}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm group-hover:text-amber-700 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {skill.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-stone-50 rounded-2xl border border-dashed border-amber-200">
            <p className="text-slate-500 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('All'); }}
              className="mt-2 text-xs font-semibold text-amber-600 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Categories Breakdown List */}
        <div className="mt-14 pt-10 border-t border-amber-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, cIdx) => (
              <div key={cIdx} className="bg-stone-50/80 p-5 rounded-2xl border border-amber-100">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-900 text-sm">{cat.name}</h4>
                  <span className="text-xs font-semibold text-amber-700">{cat.items.length} skills</span>
                </div>
                <p className="text-xs text-slate-500 mb-3">{cat.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, iIdx) => (
                    <span 
                      key={iIdx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-stone-200 text-slate-700"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};