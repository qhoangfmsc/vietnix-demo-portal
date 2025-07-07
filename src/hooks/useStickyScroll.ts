import { useState, useEffect, useCallback } from 'react';

interface UseStickyScrollOptions {
  threshold?: number;
  enabled?: boolean;
}

export const useStickyScroll = ({ 
  threshold = 120, 
  enabled = true 
}: UseStickyScrollOptions = {}) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(() => {
    if (!enabled) return;
    
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > threshold);
  }, [threshold, enabled]);

  useEffect(() => {
    if (!enabled) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, enabled]);

  return isSticky;
}; 