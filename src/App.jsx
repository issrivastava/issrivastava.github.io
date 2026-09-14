import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { AgentsAndCerts } from './components/AgentsAndCerts';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 selection:bg-amber-300 selection:text-amber-950 font-sans relative">
      {/* Subtle Yellow Radial Ambient Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-amber-200/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-[-150px] w-[600px] h-[600px] bg-yellow-300/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-[-100px] w-[500px] h-[500px] bg-amber-300/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        
        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <AgentsAndCerts />
          <Contact />
        </main>

        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;