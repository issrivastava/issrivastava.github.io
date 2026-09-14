import React, { useState } from 'react';
import { Github, Linkedin } from './Icons';
import {
  Mail, Phone, MapPin, Globe,
  Send, Copy, Check, Sparkles, MessageSquare
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Contact = () => {
  const { personal } = resumeData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill out all required fields.' });
      return;
    }

    setStatus({ state: 'sending', message: 'Sending message...' });

    // Simulated instant send for portfolio demo
    setTimeout(() => {
      setStatus({ state: 'success', message: `Thank you, ${formData.name}! Your message has been sent successfully.` });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ state: 'idle', message: '' }), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Initiate Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Feel free to reach out for engineering roles, project inquiries, or technical discussions.
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Copy buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-stone-50/80 p-7 rounded-3xl border border-amber-200/90 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Contact Channels</h3>
              <p className="text-xs text-slate-600 mb-6">
                Click any item below to copy directly or open directly in your mail/phone client.
              </p>

              {/* Email item */}
              <div className="p-4 rounded-2xl bg-white border border-amber-200/80 mb-3.5 flex items-center justify-between hover:border-amber-400 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-800 block">Email Address</span>
                    <a 
                      href={`mailto:${personal.email}`}
                      className="text-xs font-semibold text-slate-800 hover:text-amber-600 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-slate-500 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-white border border-amber-200/80 mb-3.5 flex items-center justify-between hover:border-amber-400 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-800 block">Phone / WhatsApp</span>
                    <a 
                      href={`tel:${personal.phone}`}
                      className="text-xs font-semibold text-slate-800 hover:text-amber-600 transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl text-slate-500 hover:text-amber-700 hover:bg-amber-50 transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-white border border-amber-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-800 block">Primary Location</span>
                    <span className="text-xs font-semibold text-slate-800">{personal.location}</span>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                  IST (UTC+5:30)
                </span>
              </div>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="bg-stone-50 hover:bg-white p-4 rounded-2xl border border-amber-200 text-center hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <Github className="w-5 h-5 mx-auto mb-1.5 text-slate-700 group-hover:text-amber-600" />
                <span className="text-xs font-bold text-slate-800 block">GitHub</span>
                <span className="text-[10px] text-slate-400">@issrivastava</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-stone-50 hover:bg-white p-4 rounded-2xl border border-amber-200 text-center hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <Linkedin className="w-5 h-5 mx-auto mb-1.5 text-blue-600 group-hover:text-blue-700" />
                <span className="text-xs font-bold text-slate-800 block">LinkedIn</span>
                <span className="text-[10px] text-slate-400">Connect</span>
              </a>

              <a
                href={personal.website}
                target="_blank"
                rel="noreferrer"
                className="bg-stone-50 hover:bg-white p-4 rounded-2xl border border-amber-200 text-center hover:border-amber-400 hover:shadow-md transition-all group"
              >
                <Globe className="w-5 h-5 mx-auto mb-1.5 text-amber-600 group-hover:text-amber-700" />
                <span className="text-xs font-bold text-slate-800 block">Website</span>
                <span className="text-[10px] text-slate-400">Portfolio</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-amber-200/90 shadow-xl shadow-amber-100/40 relative">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Send a Direct Message</h3>
              <p className="text-xs text-slate-500 mb-6">Fill out the form below to initiate contact immediately.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Technical Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Sagarika, I would love to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white transition-all"
                  />
                </div>

                {status.message && (
                  <div className={`p-3 rounded-xl text-xs font-semibold ${
                    status.state === 'success' 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.state === 'sending'}
                  className="yellow-gradient-btn w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{status.state === 'sending' ? 'Sending Message...' : 'Transmit Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};