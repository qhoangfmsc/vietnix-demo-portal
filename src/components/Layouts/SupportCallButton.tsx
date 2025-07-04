import React from 'react';
import { cn } from '@/lib/utils';
import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

interface SupportCallButtonProps {
    label: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    isCollapsed: boolean;
}

const SupportCallButton = React.memo(function SupportCallButton({ label, icon: Icon, isCollapsed }: SupportCallButtonProps) {
    return (
        <a
            href="tel:18001093"
            className={cn(
                "flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors",
                isCollapsed && "justify-center"
            )}
            style={{ textDecoration: 'none' }} 
        >
            <Icon className="h-5 w-5 flex-shrink-0" strokeWidth={1} />
            {!isCollapsed && <span className="ml-4 font-medium overflow-hidden whitespace-nowrap text-ellipsis">{label}</span>}
        </a>
    );
});

export default SupportCallButton; 