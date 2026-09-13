import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Mail, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';
import { MagneticButton } from '../components/common/MagneticButton';
import { Reveal } from '../components/common/Reveal';
import { socialsData } from '../data/socials';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields before sending.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    // Clean frontend submission prototype
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you for reaching out! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 relative bg-light-bg/50 dark:bg-dark-bg/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="CONTACT"
          title="LET'S CONNECT."
          subtitle="Open to conversations, collaborations, and new opportunities in technology and digital products."
        />

        <div className="grid lg:grid-cols-12 gap-10 mt-12">
          {/* Left Column: Social Link Cards */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal direction="left" delay={0.2} width="100%">
              <h3 className="text-xl font-extrabold text-light-text dark:text-dark-text mb-6">
                Reach Out Directly
              </h3>
            </Reveal>

            {socialsData.map((social, idx) => {
              const IconComp = Icons[social.icon] || Mail;
              return (
                <Reveal key={idx} direction="left" delay={0.1 * idx + 0.3} width="100%">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <GlassCard className="flex items-center justify-between p-5 border border-dark-border/10 dark:border-dark-border/30 hover:border-accent-purple/50">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3 rounded-xl glass-panel text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="block text-xs font-semibold text-light-muted dark:text-dark-muted">
                            {social.name}
                          </span>
                          <span className="font-bold text-sm sm:text-base text-light-text dark:text-dark-text">
                            {social.value}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight className="w-5 h-5 text-light-muted dark:text-dark-muted group-hover:text-accent-pink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </GlassCard>
                  </a>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.3} width="100%">
              <GlassCard className="p-6 sm:p-8 border border-dark-border/20 dark:border-dark-border/40">
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl glass-panel bg-light-bg/40 dark:bg-dark-bg/60 border border-dark-border/10 dark:border-dark-border/30 focus:border-accent-purple focus:outline-none text-light-text dark:text-dark-text text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl glass-panel bg-light-bg/40 dark:bg-dark-bg/60 border border-dark-border/10 dark:border-dark-border/30 focus:border-accent-purple focus:outline-none text-light-text dark:text-dark-text text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me a little about what you're working on..."
                      className="w-full px-4 py-3 rounded-xl glass-panel bg-light-bg/40 dark:bg-dark-bg/60 border border-dark-border/10 dark:border-dark-border/30 focus:border-accent-purple focus:outline-none text-light-text dark:text-dark-text text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Feedback Status Alert */}
                  {status.type === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{status.message}</span>
                    </div>
                  )}

                  {status.type === 'success' && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{status.message}</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <MagneticButton
                      type="submit"
                      variant="primary"
                      disabled={status.type === 'loading'}
                      className="w-full sm:w-auto"
                    >
                      <span>{status.type === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}</span>
                      <Send className="w-4 h-4" />
                    </MagneticButton>
                  </div>
                </form>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
