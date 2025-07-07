"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { useStickyScroll } from '@/hooks/useStickyScroll';

interface StickyAsideWrapperProps {
  children: React.ReactNode;
  threshold?: number;
  className?: string;
}

export const StickyAsideWrapper: React.FC<StickyAsideWrapperProps> = React.memo(function StickyAsideWrapper({
  children,
  threshold = 120,
  className
}) {
  const isSticky = useStickyScroll({ threshold });

  return (
    <div
      className={cn(
        "h-full transition-all duration-300 ease-in-out",
        isSticky && "lg:sticky lg:top-0 lg:h-screen lg:z-10",
        className
      )}
    >
      {children}
    </div>
  );
});