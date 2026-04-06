'use client';

import { useTranslations } from 'next-intl';
import { FormEvent, useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Project Inquiry from ${formData.name} — ${formData.business}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.business}\nService: ${formData.service}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:iamjohnvdiaz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cream/80 mb-2">
                {t('name')}
              </label>
              <input
                type="text"
                id="name"
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
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark"
            >
              {t('submit')}
            </button>

            <p className="text-center text-cream/50 text-sm">
              <a href="#" className="underline hover:text-cream transition-colors">
                {t('whatsapp')}
              </a>
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
