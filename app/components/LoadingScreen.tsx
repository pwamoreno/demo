"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

export function LoadingScreen({ 
  onLoadingComplete, 
  duration = 3 
}: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      onLoadingComplete?.();
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* SVG Logo with pulsing fill */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 86.63 71.54"
              className="w-24 h-24 md:w-32 md:h-32"
            >
              <style>
                {`
                  @keyframes fillPulse {
                    0%, 100% {
                      fill: transparent;
                      stroke: #070808;
                      opacity: 1;
                    }
                    50% {
                      fill: #EAF205;
                      stroke: #EAF205;
                      opacity: 1;
                    }
                  }
                  
                  .animated-path {
                    animation: fillPulse ${duration / 2}s ease-in-out infinite;
                    stroke-width: 1.5;
                  }
                `}
              </style>
              <g>
                <path
                  className="animated-path"
                  d="M36.44,69.65c1.63,.81,3.35,1.37,5.17,1.65,.61,.09,1.23,.15,1.84,.17-2.53-.2-4.88-.81-7.01-1.81Z"
                />
                <g>
                  <path
                    className="animated-path"
                    d="M30.42,65c.5,.61,1.05,1.18,1.64,1.72,1.18,1.08,2.49,1.97,3.9,2.68-2.03-1.09-3.89-2.58-5.54-4.4Z"
                  />
                  <path
                    className="animated-path"
                    d="M80.48,13.56c-3.91-3.57-9.2-5.07-14.97-4.7C62.06,4.01,57.51,.98,52.31,.2c-6.73-1.02-13.56,1.9-19.23,8.21-2.68,2.99-4.96,6.59-6.74,10.6-1.77,4.01-3.05,8.43-3.75,13.08-2,13.32,1.29,25.71,7.84,32.92,1.65,1.82,3.51,3.31,5.54,4.4,.16,.09,.32,.17,.48,.25,2.13,1,4.48,1.61,7.01,1.81,.05,0,.1,0,.15,0,.58,.05,1.18,.07,1.78,.07,2.3,0,4.72-.32,7.23-.96,3.89-.99,7.78-2.72,11.49-5.07,3.7-2.34,7.23-5.31,10.39-8.78,6.32-6.95,10.5-15.14,11.74-23.08,1.32-8.38-.72-15.51-5.76-20.1ZM27.72,40.96c-.06-2.59,.11-5.29,.52-8.03,1.23-8.19,4.46-15.54,9.09-20.7,4.33-4.83,9.35-7.1,14.13-6.37,2.8,.42,5.38,1.85,7.57,4.14-7.25,2.05-14.74,6.68-20.99,13.54-4.93,5.42-8.4,11.47-10.32,17.42Zm16.52,24.81h0c-3.31-.2-6.16-1.31-8.32-3.28-7.72-7.03-4.87-22.77,6.36-35.1,6.14-6.74,13.52-11.08,20.22-12.48,.2,.39,.4,.79,.59,1.2,2.91,6.28,3.83,14.26,2.6,22.46-2.34,15.53-11.73,27.21-21.44,27.21Zm36.34-33c-.54,3.42-1.73,6.91-3.48,10.32-1.75,3.41-4.06,6.72-6.85,9.79-1.84,2.02-3.82,3.85-5.88,5.44,3.39-5.22,5.87-11.71,6.95-18.91,1.35-8.95,.39-17.77-2.72-24.93,3.09,.26,5.84,1.34,8,3.3,3.57,3.25,4.98,8.57,3.97,14.99Z"
                  />
                </g>
                <path
                  className="animated-path"
                  d="M8.87,51.71c-4.89,0-8.87-3.98-8.87-8.87s3.98-8.87,8.87-8.87,8.87,3.98,8.87,8.87-3.98,8.87-8.87,8.87Zm0-12.01c-1.74,0-3.15,1.41-3.15,3.15s1.41,3.15,3.15,3.15,3.15-1.41,3.15-3.15-1.41-3.15-3.15-3.15Z"
                />
              </g>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
