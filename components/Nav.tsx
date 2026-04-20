'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

const sections: Array<{ id: string; label: string }> = [
  { id: 'services', label: 'services' },
  { id: 'work', label: 'work' },
  { id: 'local', label: 'local' },
  { id: 'pricing', label: 'packages' },
  { id: 'about', label: 'about' },
  { id: 'contact', label: 'contact' },
];

export default function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const otherLocale = locale === 'en' ? 'es' : 'en';

  return (
    <nav
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur-sm transition-shadow ${
        scrolled ? 'shadow-sm border-b border-border' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-serif text-xl font-bold text-charcoal">
            John Vincent Digital
          </a>

          <div className="hidden md:flex items-center gap-8">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`text-sm font-medium transition-colors pb-1 ${
                  activeSection === id
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-warm-gray hover:text-charcoal'
                }`}
              >
                {t(label)}
              </a>
            ))}
            <a
              href={`/${otherLocale}`}
              className="text-sm font-medium px-3 py-1 rounded border border-border text-warm-gray hover:text-charcoal hover:border-charcoal transition-colors"
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <a
              href={`/${otherLocale}`}
              className="text-sm font-medium px-3 py-1 rounded border border-border text-warm-gray"
            >
              {locale === 'en' ? 'ES' : 'EN'}
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border pt-4">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  activeSection === id ? 'text-accent' : 'text-warm-gray hover:text-charcoal'
                }`}
              >
                {t(label)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
