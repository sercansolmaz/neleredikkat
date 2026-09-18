'use client';

import React, { useState } from 'react';
import { Send, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const FORM_ENDPOINT = 'https://forms.neleredikkat.com/';
const SUPPORT_EMAIL = 'info@neleredikkat.com';

const TOPICS = [
  { id: 'oneri', label: 'Öneri', icon: '💡' },
  { id: 'sikayet', label: 'Şikayet', icon: '⚠️' },
  { id: 'soru', label: 'Soru', icon: '❓' },
  { id: 'sponsorluk', label: 'Sponsorluk', icon: '🤝' },
  { id: 'rehber-talebi', label: 'Rehber Talebi', icon: '📝' },
  { id: 'diger', label: 'Diğer', icon: '✉️' }
] as const;

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [topic, setTopic] = useState<string>('oneri');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const topicLabel = TOPICS.find(t => t.id === topic)?.label || topic;
    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      topic: `[${topicLabel}] ${String(fd.get('subject') || '')}`.slice(0, 120),
      message: String(fd.get('message') || ''),
      website: String(fd.get('website') || '') // honeypot
    };
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus('ok');
        form.reset();
        setTopic('oneri');
      } else {
        setStatus('error');
        setErrorMsg(
          data.error === 'rate'
            ? 'Kısa sürede çok fazla deneme yapıldı. Lütfen bir saat sonra tekrar deneyebilirsin.'
            : data.error === 'validation'
              ? 'Bazı alanlar eksik ya da hatalı görünüyor. Mesajın en az 10 karakter olmalı.'
              : 'Mesajın gönderilemedi. Lütfen tekrar dene; olmazsa doğrudan e-posta gönderebilirsin.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMsg('Bağlantı hatası. Lütfen tekrar dene ya da doğrudan e-posta gönder.');
    }
  }

  if (status === 'ok') {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-200 dark:border-emerald-800 rounded-3xl p-8 sm:p-12 text-center space-y-4" role="status">
        <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/30">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-black text-slate-900 dark:text-white">Mesajın bize ulaştı — teşekkür ederiz!</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Mesajın ekibimiz tarafından özenle incelenecek; gerektiğinde e-posta yoluyla sana dönüş yapacağız.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:underline"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-10 space-y-6 shadow-sm"
    >
      {/* Konu seçimi */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Mesajın konusu
        </span>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Konu">
          {TOPICS.map(t => (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={topic === t.id}
              onClick={() => setTopic(t.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border-2 transition-all ${
                topic === t.id
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-400 dark:hover:border-emerald-600'
              }`}
            >
              <span aria-hidden>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Ad + E-posta */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Adın</span>
          <input
            name="name"
            required
            maxLength={80}
            autoComplete="name"
            placeholder="Adın Soyadın"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-emerald-500 transition-colors"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">E-posta</span>
          <input
            name="email"
            type="email"
            required
            maxLength={160}
            autoComplete="email"
            placeholder="ornek@eposta.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-emerald-500 transition-colors"
          />
        </label>
      </div>

      {/* Başlık */}
      <label className="block space-y-1.5">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Başlık</span>
        <input
          name="subject"
          required
          maxLength={100}
          placeholder="Kısaca ne hakkında?"
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-emerald-500 transition-colors"
        />
      </label>

      {/* Mesaj */}
      <label className="block space-y-1.5">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Mesajın</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={6}
          placeholder="Detayları buraya yaz — ilgili rehberin bağlantısını eklemek işimizi hızlandırır."
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:border-emerald-500 transition-colors resize-y"
        />
      </label>

      {/* honeypot — botlar doldurur, insanlar görmez */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, opacity: 0 }}
      />

      {/* Gönder */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white text-sm font-bold shadow-md shadow-emerald-600/25 transition-all"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Gönderiliyor…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Mesajı Gönder
            </>
          )}
        </button>
        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5" />
          ya da doğrudan:{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
            {SUPPORT_EMAIL}
          </a>
        </span>
      </div>

      {status === 'error' && (
        <p className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-xl p-3" role="alert">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          {errorMsg}
        </p>
      )}
    </form>
  );
}
