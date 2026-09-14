import React, { useState } from 'react';
import { 
  Bot, Award, Atom, Sparkles, CheckCircle2, 
  ExternalLink, Calculator, Music, Wind, Send, ChevronRight 
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const AgentsAndCerts = () => {
  const { certifications, aiAgents } = resumeData;
  const [selectedAgent, setSelectedAgent] = useState(aiAgents[0]);
  const [simulatedQuery, setSimulatedQuery] = useState('');
  const [simulatedResponse, setSimulatedResponse] = useState('');

  const agentIcons = {
    Mattly: Calculator,
    ScienceStudy: Atom,
    SongFinder: Music,
    PollutionPop: Wind
  };

  const handleRunAgentSim = (agent) => {
    setSelectedAgent(agent);
    if (agent.name === 'Mattly') {
      setSimulatedQuery('Evaluate dynamic kinematics for a 3-DOF robot arm');
      setSimulatedResponse('Matrix Jacobian J(θ) calculated: Det(J) ≠ 0 in standard workspace envelope. Optimal angular velocity resolved with 0 singular poses.');
    } else if (agent.name === 'ScienceStudy') {
      setSimulatedQuery('Explain Quantum Superposition & Qiskit state vectors');
      setSimulatedResponse('Superposition |ψ⟩ = α|0⟩ + β|1⟩. In Qiskit, initialized via Statevector simulator and Hadamard gate (qc.h(0)). Output probability |α|² + |β|² = 1.');
    } else if (agent.name === 'SongFinder') {
      setSimulatedQuery('Find upbeat synthwave track with lyrics about neon rain');
      setSimulatedResponse('Matched 3 candidate tracks from acoustic metadata. Confidence score: 94.2%. Tempo: 128 BPM, Key: F# Minor.');
    } else if (agent.name === 'PollutionPop') {
      setSimulatedQuery('Analyze current sensor telemetry: MQ-135 reading 320 ppm');
      setSimulatedResponse('⚠️ Warning: Elevated VOC/Ammonia levels detected above baseline (200 ppm). Alert triggered: Ventilate testing environment.');
    }
  };

  return (
    <section id="certs" className="py-20 bg-stone-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>AI Innovation & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Custom AI Agents & Verified Certifications
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Autonomous agent development alongside recognized credentials in Quantum Computing (NPTEL) and Python & AI Data Analytics (MSME).
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Part 1: AI Agents Showcase */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Custom Built AI Agents</h3>
              <p className="text-xs text-slate-500">Autonomous multi-agent creations for domain-specific automation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiAgents.map((agent) => {
              const IconC = agentIcons[agent.name] || Bot;
              const isSelected = selectedAgent?.name === agent.name;

              return (
                <div
                  key={agent.name}
                  onClick={() => handleRunAgentSim(agent)}
                  className={`cursor-pointer bg-white p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'border-amber-400 shadow-xl shadow-amber-200/50 scale-[1.02]'
                      : 'border-amber-200/70 hover:border-amber-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shadow-sm">
                        <IconC className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Agent Active
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-1">{agent.name}</h4>
                    <p className="text-xs text-amber-700 font-semibold mb-3">{agent.title}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{agent.desc}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {agent.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs font-bold text-amber-600 flex items-center gap-1">
                      <span>Click to simulate</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Agent Simulator Console */}
          <div className="mt-8 bg-slate-950 rounded-3xl p-6 sm:p-7 text-white font-mono text-xs border border-amber-500/30 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-amber-400 font-bold ml-2">
                  Agent Runner: {selectedAgent ? selectedAgent.name : 'Mattly'}
                </span>
              </div>
              <span className="text-slate-400 text-[11px]">Simulated Agent Runtime</span>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-amber-400">user@sagarika:~$ </span>
                <span className="text-slate-200">
                  {simulatedQuery || 'Evaluate dynamic kinematics for a 3-DOF robot arm'}
                </span>
              </div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-amber-200 leading-relaxed">
                <span className="text-emerald-400 font-bold">[{selectedAgent ? selectedAgent.name : 'Mattly'}] </span>
                {simulatedResponse || 'Matrix Jacobian J(θ) calculated: Det(J) ≠ 0 in standard workspace envelope. Optimal angular velocity resolved with 0 singular poses.'}
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Professional Certifications</h3>
              <p className="text-xs text-slate-500">Industry & government-recognized technical credentials</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-amber-200/90 shadow-md shadow-amber-100/30 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors shadow-sm">
                      {idx === 0 ? <Award className="w-6 h-6" /> : <Atom className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                      {cert.type}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-sm font-semibold text-slate-700 mb-2">
                    {cert.subtitle}
                  </p>
                  <p className="text-xs text-amber-700 font-medium mb-5">
                    Issued by: {cert.authority}
                  </p>
                </div>

                <div className="pt-4 border-t border-amber-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Topics & Credential Domains:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-stone-50 text-slate-800 border border-stone-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};