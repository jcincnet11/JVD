'use client';

import { useTranslations } from 'next-intl';
import { FormEvent, useState } from 'react';
import ScrollReveal from './ScrollReveal';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('https://formspree.io/f/johnvincentdigital@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          _replyto: formData.email,
          business: formData.business,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', business: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-cream placeholder:text-cream/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent';

  return (
    <section id="contact" className="bg-dark py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream text-center">
            {t('heading')}
          </h2>
          <p className="mt-4 text-cream/70 text-lg text-center">
            {t('subheading')}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          {status === 'success' ? (
            <div className="mt-12 text-center py-16">
              <p className="text-2xl font-serif font-bold text-cream">{t('successHeading')}</p>
              <p className="mt-3 text-cream/70">{t('successMessage')}</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-accent underline underline-offset-4 hover:text-cream transition-colors"
              >
                {t('sendAnother')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cream/80 mb-2">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cream/80 mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium text-cream/80 mb-2">
                  {t('business')}
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-cream/80 mb-2">
                  {t('service')}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={inputClass}
                >
                  <option value="" className="text-charcoal">{t('serviceOptions.placeholder')}</option>
                  <option value="website" className="text-charcoal">{t('serviceOptions.website')}</option>
                  <option value="shopify" className="text-charcoal">{t('serviceOptions.shopify')}</option>
                  <option value="brand" className="text-charcoal">{t('serviceOptions.brand')}</option>
                  <option value="retainer" className="text-charcoal">{t('serviceOptions.retainer')}</option>
                  <option value="not-sure" className="text-charcoal">{t('serviceOptions.notSure')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cream/80 mb-2">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">{t('errorMessage')}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? t('sending') : t('submit')}
              </button>

              <p className="text-center text-cream/50 text-sm">
                <a href="https://wa.me/17877174203" target="_blank" rel="noopener noreferrer" className="underline hover:text-cream transition-colors">
                  {t('whatsapp')}
                </a>
              </p>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
