"use client";

import { useEffect } from 'react';

export function CursorLightEffect() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handler);

    return () => {
      window.removeEventListener('mousemove', handler);
    };
  }, []);

  return null; // This component only adds an effect and does not render anything.
} 