import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ToggleButton from './ThemeBtn';

const NAV_LINKS = [
  { label: 'Products', href: '/projects' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Labs', href: '/labs' },
  { label: 'Work With Us', href: '/work-with-us' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  const isActive = (href) => {
    if (href.startsWith('#')) return false;
    return router.pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span
            className="text-xl font-black tracking-tight hover:opacity-85 transition-opacity"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}
          >
            Intelli
            <span
              style={{
                background: 'linear-gradient(90deg, #7c3aed, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Xar
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                isActive(link.href)
                  ? 'text-white bg-white/8'
                  : 'hover:bg-white/5'
              }`}
              style={{ color: isActive(link.href) ? '#22d3ee' : 'var(--text-secondary)' }}
              onMouseEnter={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = 'var(--text-primary)'; }}
              onMouseLeave={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ToggleButton />

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors hover:bg-white/5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ background: 'var(--text-secondary)' }} />
            <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
              style={{ background: 'var(--text-secondary)' }} />
            <span className={`block w-5 h-0.5 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ background: 'var(--text-secondary)' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-5 py-4 flex flex-col gap-1"
          style={{
            borderColor: 'var(--border-card)',
            background: 'var(--nav-bg)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2.5 text-sm font-medium rounded-lg transition-colors"
              style={{
                color: isActive(link.href) ? '#22d3ee' : 'var(--text-secondary)',
                background: isActive(link.href) ? 'rgba(34,211,238,0.06)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
