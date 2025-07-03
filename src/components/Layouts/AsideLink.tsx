"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

interface AsideLinkProps {
  href: string;
  label: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  active?: boolean;
  isCollapsed: boolean;
}

const AsideLink = React.memo(function AsideLink({ href, label, icon: Icon, active = false, isCollapsed }: AsideLinkProps) {
  const linkContent = (
    <div className={cn(
      "flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors",
      active && "bg-blue-500 text-white hover:bg-blue-600",
      isCollapsed && "justify-center"
    )}>
      <Icon className="h-5 w-5" strokeWidth={1} />
      {!isCollapsed && <span className="ml-4 font-medium">{label}</span>}
    </div>
  );

  if (isCollapsed) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Link href={href}>
              {linkContent}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Link href={href}>
      {linkContent}
    </Link>
  );
});

export default AsideLink; 