'use client';

import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
type FieldErrors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const preselected = searchParams.get('service');
    if (preselected) {
      setFormData((prev) => ({ ...prev, service: preselected }));
    }
  }, [searchParams]);

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (formData.name.trim().length < 2) next.name = t('form.name.error');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) next.email = t('form.email.error');
    if (formData.message.trim().length < 10) next.message = t('form.message.error');
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      if (nextErrors.name) nameRef.current?.focus();
      else if (nextErrors.email) emailRef.current?.focus();
      else if (nextErrors.message) messageRef.current?.focus();
      return;
    }
    setErrors({});
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

  const inputBase =
    'w-full px-4 py-3 bg-white/10 border rounded-lg text-cream focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark';
  const inputClass = `${inputBase} border-white/20`;
  const inputErrorClass = `${inputBase} border-red-400`;
  const labelClass = 'block text-sm font-medium text-cream/80 mb-2';
  const linkFocusClass =
    'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark rounded';

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
            <div role="status" aria-live="polite" className="mt-12 text-center py-16">
              <p className="text-2xl font-serif font-bold text-cream">{t('successHeading')}</p>
              <p className="mt-3 text-cream/70">{t('form.success')}</p>
              <button
                onClick={() => setStatus('idle')}
                className={`mt-6 text-accent underline underline-offset-4 hover:text-cream transition-colors ${linkFocusClass}`}
              >
                {t('sendAnother')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-12 space-y-6">
              <p className="text-cream/70 text-sm">{t('form.required_note')}</p>

              <div>
                <label htmlFor="name" className={labelClass}>
                  {t('form.name.label')} <span aria-hidden="true">*</span>
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={errors.name ? inputErrorClass : inputClass}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-sm text-red-400 mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  {t('form.email.label')} <span aria-hidden="true">*</span>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={errors.email ? inputErrorClass : inputClass}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-sm text-red-400 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="business" className={labelClass}>
                  {t('form.business.label')}
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
                <label htmlFor="service" className={labelClass}>
                  {t('form.service.label')}
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
                  <option value="accessibility" className="text-charcoal">{t('serviceOptions.accessibility')}</option>
                  <option value="retainer" className="text-charcoal">{t('serviceOptions.retainer')}</option>
                  <option value="local-presence" className="text-charcoal">{t('serviceOptions.localPresence')}</option>
                  <option value="not-sure" className="text-charcoal">{t('serviceOptions.notSure')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  {t('form.message.label')} <span aria-hidden="true">*</span>
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${errors.message ? inputErrorClass : inputClass} resize-none`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-sm text-red-400 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {status === 'error' && (
                <p role="alert" className="text-red-400 text-sm text-center">{t('form.generic_error')}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                aria-busy={status === 'submitting'}
                className="w-full py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? t('form.submit.loading') : t('form.submit.default')}
              </button>

              <p className="text-center text-cream/70 text-sm">
                <a
                  href="https://wa.me/17877174203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline hover:text-cream transition-colors ${linkFocusClass}`}
                >
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
