import React from 'react';
import { cn } from '@/lib/utils';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

interface SupportCallButtonProps {
    label: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    isCollapsed: boolean;
}

const SupportCallButton = React.memo(function SupportCallButton({ label, icon: Icon, isCollapsed }: SupportCallButtonProps) {
    const button = (
        <a
            href="tel:18001093"
            className={cn(
                "flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors",
                isCollapsed && "justify-start"
            )}
            style={{ textDecoration: 'none' }} 
        >
            <Icon className="h-5 w-5 flex-shrink-0" strokeWidth={1} />
            {!isCollapsed && <span className="ml-4 font-medium overflow-hidden whitespace-nowrap text-ellipsis">{label}</span>}
        </a>
    );
    
    if (isCollapsed) {
        return (
            <Tooltip>
                <TooltipTrigger asChild>
                    {button}
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={8}>{label}</TooltipContent>
            </Tooltip>
        );
    }
    return button;
});

export default SupportCallButton; 