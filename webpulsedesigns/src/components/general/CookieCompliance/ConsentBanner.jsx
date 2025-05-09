'use client';
import { useState, useEffect } from 'react';
import { SlideInFooter } from '@/components/general';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeartbeat } from 'react-icons/fa';

export default function ConsentBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('wpCookieConsent');
    if (!consent) setVisible(true);
    else if (consent === 'true') loadAnalytics();
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('wpCookieConsent', 'true');
    loadAnalytics();
    setVisible(false);
  };

  const loadAnalytics = () => {
    if (window.gtag) return; // already loaded
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-CKQNBHX0CX';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
gtag('config', 'G-CKQNBHX0CX', { anonymize_ip: true });
    `;
    document.head.appendChild(script2);
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <SlideInFooter className="will-change-transform transition-transform duration-500">
          <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex flex-col sm:flex-row justify-between items-center z-50">
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
  );
}
