'use client';

import { useEffect, useState } from 'react';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
const STORAGE_KEY = 'allskateparks:analytics-consent';
const SCRIPT_ID = 'google-analytics-script';

type ConsentChoice = 'granted' | 'denied';
type GtagArguments = [command: string, action: string | Date, params?: Record<string, unknown>];
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: GtagArguments) => void;
};

function analyticsWindow(): AnalyticsWindow {
  return window as AnalyticsWindow;
}

function initializeConsentMode() {
  const currentWindow = analyticsWindow();
  currentWindow.dataLayer = currentWindow.dataLayer || [];
  currentWindow.gtag =
    currentWindow.gtag ||
    ((...args: GtagArguments) => {
      currentWindow.dataLayer?.push(args);
    });

  currentWindow.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500,
  });
}

function updateAnalyticsConsent(choice: ConsentChoice) {
  analyticsWindow().gtag?.('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: choice,
  });
}

function clearAnalyticsCookies() {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim();
    if (name === '_ga' || name?.startsWith('_ga_')) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=.allskateparks.com; SameSite=Lax`;
    }
  });
}

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID?.trim()) return;

    initializeConsentMode();

    let savedChoice: ConsentChoice | null = null;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      savedChoice = stored === 'granted' || stored === 'denied' ? stored : null;
    } catch {
      savedChoice = null;
    }

    const privacySignal =
      (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true ||
      navigator.doNotTrack === '1';
    const initialChoice = privacySignal ? 'denied' : savedChoice;

    setChoice(initialChoice);
    if (initialChoice === 'granted') {
      updateAnalyticsConsent('granted');
      loadGoogleAnalytics();
    } else if (initialChoice === 'denied') {
      updateAnalyticsConsent('denied');
      clearAnalyticsCookies();
    } else {
      setShowChoices(true);
    }

  }, []);

  const saveChoice = (requestedChoice: ConsentChoice) => {
    if (!GA_MEASUREMENT_ID?.trim()) return;
    const privacySignal =
      (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true ||
      navigator.doNotTrack === '1';
    const nextChoice = privacySignal ? 'denied' : requestedChoice;
    try {
      window.localStorage.setItem(STORAGE_KEY, nextChoice);
    } catch {
      // Consent remains effective for this page even if storage is unavailable.
    }
    setChoice(nextChoice);
    setShowChoices(false);
    updateAnalyticsConsent(nextChoice);
    if (nextChoice === 'granted') {
      loadGoogleAnalytics();
    } else {
      clearAnalyticsCookies();
      if (choice === 'granted') {
        window.location.reload();
      }
    }
  };

  if (!GA_MEASUREMENT_ID?.trim()) return null;

  if (!showChoices) {
    return (
      <button
        type="button"
        style={{ position: 'fixed', bottom: '12px', left: '12px', zIndex: 1100, borderRadius: '999px', border: '1px solid var(--yellow)', background: 'var(--asphalt)', color: 'var(--yellow)', padding: '10px 16px', fontFamily: 'var(--font-body)', cursor: 'pointer' }}
        onClick={() => setShowChoices(true)}
        aria-label={`Privacy choices. Analytics is currently ${choice || 'not selected'}.`}
      >
        Privacy choices
      </button>
    );
  }

  return (
    <section
      style={{ position: 'fixed', bottom: '12px', left: '12px', right: '12px', zIndex: 1100, maxWidth: '760px', margin: '0 auto', borderRadius: '12px', border: '1px solid var(--yellow)', background: 'var(--asphalt)', color: '#fff', padding: '20px', fontFamily: 'var(--font-body)', boxShadow: '0 8px 32px #0008' }}
      aria-label="Analytics privacy choices"
      role="dialog"
      aria-modal="false"
    >
      <h2 style={{ fontSize: '18px', margin: '0 0 8px', color: 'var(--yellow)' }}>Your analytics choice</h2>
      <p style={{ fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
        We use Google Analytics only if you accept. It helps us count page views and see which pages are useful.
        Advertising and personalization stay off. Declining does not limit the site.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginTop: '16px' }}>
        <a
          href="/privacy"
          style={{ color: 'var(--yellow)', padding: '10px', fontWeight: 600 }}
        >
          Privacy details
        </a>
        <button
          type="button"
          style={{ minHeight: '44px', borderRadius: '8px', border: '1px solid var(--yellow)', background: 'var(--asphalt)', color: 'var(--yellow)', padding: '10px 16px', fontFamily: 'var(--font-body)', cursor: 'pointer' }}
          onClick={() => saveChoice('denied')}
        >
          Decline analytics
        </button>
        <button
          type="button"
          style={{ minHeight: '44px', borderRadius: '8px', border: '1px solid var(--yellow)', background: 'var(--yellow)', color: 'var(--asphalt)', padding: '10px 16px', fontFamily: 'var(--font-body)', fontWeight: 700, cursor: 'pointer' }}
          onClick={() => saveChoice('granted')}
        >
          Accept analytics
        </button>
      </div>
    </section>
  );
}

function loadGoogleAnalytics() {
  const measurementId = GA_MEASUREMENT_ID?.trim();
  if (!measurementId) return;

  const currentWindow = analyticsWindow();
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  currentWindow.gtag?.('js', new Date());
  currentWindow.gtag?.('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

