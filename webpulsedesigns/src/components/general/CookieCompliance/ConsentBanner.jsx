'use client';

import { useState, useEffect } from 'react';
import { SlideInFooter } from '@/components/general';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeartbeat } from 'react-icons/fa';
import Script from 'next/script';

export default function ConsentBanner() {
  const [hasConsent, setHasConsent] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('wpCookieConsent');
    if (consent === 'true') {
      setHasConsent(true);
      setVisible(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('wpCookieConsent', 'true');
    setHasConsent(true);
    setVisible(false);
  };

  return (
    <>
      {/* ✅ Only inject scripts if consent is given */}
      {hasConsent && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-CKQNBHX0CX"
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', 'G-CKQNBHX0CX', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* ✅ Consent UI */}
      <AnimatePresence>
        {visible && (
          <SlideInFooter className="fixed bottom-0 left-0 right-0 z-[9999] will-change-transform w-full">
            <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-black via-slate-900 to-black backdrop-blur-md text-white p-4">
              <p className="text-sm">
                We use cookies to improve your experience. By continuing, you
                accept our use of analytics.
              </p>
              <button
                onClick={acceptCookies}
                className="mt-2 sm:mt-0 px-6 py-2 rounded-xl bg-black/60 backdrop-blur border border-pink-400 shadow-lg flex items-center gap-2 text-white font-jakartaSans transition-all duration-300 hover:brightness-110"
              >
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <FaHeartbeat className="text-pink-400" />
                </motion.span>
                Accept
              </button>
            </div>
          </SlideInFooter>
        )}
      </AnimatePresence>
    </>
  );
}
