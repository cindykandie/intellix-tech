import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ConsultationModal from '@/components/ConsultationModal';
import { useTheme } from '@/context/ThemeContext';
import { useInView } from '@/hooks/useInView';

const LABS_ITEMS = [
  { icon: '🧠', title: 'Neural UI', status: 'Experimental', desc: 'AI-generated interface components that adapt to user behavior patterns in real time. Exploring truly dynamic, personalized UI.', accent: '#22d3ee' },
  { icon: '🔮', title: 'Context Engine', status: 'Research', desc: 'A semantic memory layer for building context-aware AI applications. Helps AI assistants remember and reason across sessions.', accent: '#a855f7' },
  { icon: '👻', title: 'GhostType', status: 'Prototype', desc: 'An invisible AI writing assistant that learns your personal voice and style. Writes with you, not instead of you.', accent: '#fb923c' },
  { icon: '🌊', title: 'Flow State', status: 'Concept', desc: 'AI-powered productivity optimization that detects your peak cognitive windows and schedules deep work accordingly.', accent: '#60a5fa' },
  { icon: '🔍', title: 'Reality Check', status: 'Research', desc: 'A real-time media verification framework for detecting misinformation at scale. The foundation behind AI Radar.', accent: '#34d399' },
  { icon: '🎨', title: 'Mosaic', status: 'Ideation', desc: 'Visual content understanding engine for creative discovery and intelligent curation across image libraries.', accent: '#f472b6' },
];

const STATUS_ORDER = ['Experimental', 'Prototype', 'Research', 'Concept', 'Ideation'];

const Reveal = ({ children, className = '', delay = 0 }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`reveal ${inView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const WorkWithUs = ({ onOpen }) => {
  const { isDark } = useTheme();
  return (
    <section className="px-6 py-28 text-center relative overflow-hidden"
      style={{ background: isDark ? '#0a1628' : '#ede9fe' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)' }} />
      <div className="relative max-w-2xl mx-auto">
        <Reveal>
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--label-cyan)' }}>Collaborate</p>
          <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Interested in one of these ideas?
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We&apos;re open to collaborating with researchers, designers, and founders who want to bring
            experimental ideas to life. Let&apos;s build something wild.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={onOpen}
              className="px-8 py-3.5 rounded-full font-bold text-black text-base transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#22d3ee,#7c3aed)', boxShadow: '0 0 36px rgba(34,211,238,0.25)' }}>
              Book Consultation
            </button>
            <button onClick={onOpen}
              className="px-8 py-3.5 rounded-full font-semibold text-base transition-all"
              style={{ color: 'var(--text-primary)', border: '1px solid var(--border-card)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
              Propose a Collab
            </button>
            <a href="mailto:intellixar.tech@gmail.com">
              <button className="px-8 py-3.5 rounded-full font-semibold text-base transition-all"
                style={{ color: 'var(--label-cyan)', border: '1px solid rgba(34,211,238,0.25)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(34,211,238,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
                Send Email
              </button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default function Labs() {
  const [modalOpen, setModalOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <Layout>
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <div>
        {/* Hero */}
        <section className="relative px-6 pt-16 pb-24 overflow-hidden"
          style={{ background: isDark ? 'linear-gradient(160deg, #040a14 0%, #060d1a 100%)' : 'linear-gradient(160deg, #f0fdf4 0%, #ecfdf5 100%)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`, backgroundSize: '70px 70px' }} />

          {/* Ambient glow */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none breathe"
            style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

          <div className="relative max-w-4xl mx-auto">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-8"
                style={{ borderColor: 'rgba(34,211,238,0.3)', background: 'rgba(34,211,238,0.06)', color: 'var(--label-cyan)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 glow-pulse inline-block" />
                IntelliXar Labs
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                Where Wild Ideas<br />
                <span className="text-gradient-cyan">Come to Life.</span>
              </h1>
              <p className="text-lg max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                This is where we experiment. Research, prototypes, concepts, and builds that push the
                boundaries of what&apos;s technically and creatively possible.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="section-divider" />

        {/* Labs Grid */}
        <section className="px-6 py-20" style={{ background: 'var(--bg-mid)' }}>
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="mb-12">
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--label-cyan)' }}>Experiments</p>
                <div className="flex flex-wrap items-center gap-3">
                  {STATUS_ORDER.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)', border: '1px solid var(--border-card)' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {LABS_ITEMS.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div
                    className="glass-card rounded-2xl p-7 h-full flex flex-col"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${item.accent}30`;
                      e.currentTarget.style.boxShadow = `0 0 24px ${item.accent}08`;
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-card)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                        style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}25` }}
                      >
                        {item.icon}
                      </div>
                      <span
                        className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
                        style={{ background: `${item.accent}12`, color: item.accent, border: `1px solid ${item.accent}30` }}
                      >
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-3"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                      {item.desc}
                    </p>
                    <div className="mt-5 pt-4" style={{ borderTop: '1px solid var(--border-card)' }}>
                      <button
                        onClick={() => setModalOpen(true)}
                        className="text-xs font-semibold transition-colors"
                        style={{ color: item.accent }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                      >
                        Interested in this? →
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Research process */}
        <section className="px-6 py-20" style={{ background: 'var(--bg-surface)' }}>
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div
                className="rounded-2xl p-px"
                style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.25) 0%, rgba(124,58,237,0.15) 100%)' }}
              >
                <div className="rounded-2xl px-8 md:px-14 py-12 text-center"
                  style={{ background: 'var(--modal-bg)', backdropFilter: 'blur(20px)' }}>
                  <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--label-cyan)' }}>How We Experiment</p>
                  <h2 className="text-3xl font-black mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                    Idea → Prototype → Ship
                  </h2>
                  <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                    Every experiment starts with a genuine curiosity. We give ideas a time-boxed prototype
                    window — if it resonates, it graduates to a full product. If not, we learn and move.
                    This is how AI Radar was born.
                  </p>
                  <div className="flex flex-wrap justify-center gap-8 mt-10">
                    {[
                      { label: 'Experiments Running', value: '6' },
                      { label: 'Graduated to Products', value: '2' },
                      { label: 'Ideas in Queue', value: '10+' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-3xl font-black mb-1" style={{ color: '#22d3ee' }}>{stat.value}</p>
                        <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="section-divider" />
        <WorkWithUs onOpen={() => setModalOpen(true)} />
      </div>
    </Layout>
  );
}
