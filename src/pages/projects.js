import Layout from '@/components/Layout';
import Link from 'next/link';
import projects from '@/data/projects.json';
import { useTheme } from '@/context/ThemeContext';
import { useInView } from '@/hooks/useInView';

const STATUS_META = {
  'AI Radar': { status: 'Beta', color: '#22d3ee', category: 'AI Tool' },
  'MemeGod Creator': { status: 'Live', color: '#4ade80', category: 'Creative Tool' },
};

const Reveal = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <Layout>
      <div
        style={{
          background: isDark
            ? 'linear-gradient(160deg, #040a14 0%, #060d1a 100%)'
            : 'linear-gradient(160deg, #f8fafc 0%, #f1f5f9 100%)',
          minHeight: '100vh',
        }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-28">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--label-cyan)' }}>Products</p>
              <h1 className="text-4xl md:text-6xl font-black mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                Our Product Ecosystem
              </h1>
              <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
                AI-powered tools and creative technology products built by IntelliXar.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {projects.projects.map((project, i) => {
              const meta = STATUS_META[project.title] || { status: 'Live', color: '#4ade80', category: 'Product' };
              return (
                <Reveal key={project.title} delay={i * 100}>
                  <div
                    className="glass-card rounded-2xl overflow-hidden"
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${meta.color}30`; e.currentTarget.style.boxShadow = `0 0 28px ${meta.color}08`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div className="w-full h-52 overflow-hidden" style={{ background: 'var(--bg-card)' }}>
                      <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        src={project.image} alt={project.title} />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>{meta.category}</span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                          style={{ background: `${meta.color}18`, color: meta.color, border: `1px solid ${meta.color}40` }}>
                          <span className="w-1 h-1 rounded-full inline-block" style={{ background: meta.color }} />
                          {meta.status}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                        {project.title}
                      </h2>
                      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
                      {project.isInternal ? (
                        <Link href={project.liveSiteLink}>
                          <button className="px-6 py-2.5 rounded-full font-bold text-black text-sm transition-all hover:scale-105"
                            style={{ background: meta.color, boxShadow: `0 0 20px ${meta.color}35` }}>
                            View Product
                          </button>
                        </Link>
                      ) : (
                        <a href={project.liveSiteLink} target="_blank" rel="noreferrer">
                          <button className="px-6 py-2.5 rounded-full font-bold text-black text-sm transition-all hover:scale-105"
                            style={{ background: meta.color, boxShadow: `0 0 20px ${meta.color}35` }}>
                            Try Now
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={200}>
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center" style={{ minHeight: 300 }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 glow-pulse"
                  style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)' }}>
                  <span className="text-xl">⚡</span>
                </div>
                <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>More Products Coming</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>We ship fast. Stay tuned.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Layout>
  );
}
