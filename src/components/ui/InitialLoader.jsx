import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InitialLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Add a small delay for smoother transition
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="tw-fixed tw-inset-0 tw-z-[9999] tw-bg-[#040C1D] tw-flex tw-flex-col tw-items-center tw-justify-center"
        >
          {/* Logo */}
          <div className="tw-mb-8 tw-animate-pulse">
            <img src="/daban-header-logo.svg" alt="Daban Holding" className="tw-w-48 md:tw-w-64" />
          </div>
          
          {/* Loading Spinner/Bar */}
          <div className="tw-w-48 tw-h-[2px] tw-bg-[rgba(255,255,255,0.1)] tw-rounded-full tw-overflow-hidden">
            <motion.div
              className="tw-h-full tw-bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
