"use client";

import React, { useState, useCallback } from 'react';
import { ChevronLeft, Grip } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SupportCallButton from '@/components/layouts/SupportCallButton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { asideNavGroups } from '@/configs/asideMenu/AsideNavGroups';
import AsideLink from '@/components/layouts/aside/AsideLink';
import { StickyAsideWrapper } from '@/components/layouts/aside/StickyAsideWrapper';

export const AsideNav: React.FC = React.memo(function AsideNav() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = useCallback(() => {
        setIsCollapsed(prev => !prev);
    }, []);

    return (
        <StickyAsideWrapper threshold={120}>
            <aside
                className={cn(
                    "flex flex-col h-full bg-card shadow-md border-r transition-all duration-300 ease-in-out overflow-hidden",
                    isCollapsed ? "w-20" : "w-64"
                )}
                role="navigation"
                aria-label="Main navigation"
            >
                {/* MINIMIZE/EXPAND ASIDE MENU BUTTON */}
                <div className="p-4 text-muted-foreground">
                    {isCollapsed ? (
                        <TooltipProvider>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        onClick={toggleCollapse}
                                        className="w-full justify-center"
                                        aria-label="Mở rộng"
                                        aria-expanded="false"
                                    >
                                        <ChevronLeft
                                            className={cn(
                                                "h-6 w-6 transition-transform duration-300",
                                                isCollapsed && "rotate-180"
                                            )}
                                            strokeWidth={1}
                                            aria-hidden="true"
                                        />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    Mở rộng
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ) : (
                        <Button
                            variant="outline"
                            onClick={toggleCollapse}
                            className="w-full flex items-center gap-2 justify-center"
                            aria-label="Thu nhỏ"
                            aria-expanded="true"
                        >
                            <ChevronLeft className="h-6 w-6" strokeWidth={1} aria-hidden="true" />
                            <span className="text-sm">Thu nhỏ</span>
                        </Button>
                    )}
                </div>

                {/* NAVIGATION CONTENT */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-8" role="navigation">
                    {asideNavGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-2">
                            {group.title && (
                                isCollapsed ? (
                                    <TooltipProvider key="collapsed-title">
                                        <Tooltip delayDuration={0}>
                                            <TooltipTrigger asChild>
                                                <div className="flex items-center px-3 mb-1 justify-start">
                                                    <Grip className="h-5 w-5 text-muted-foreground" strokeWidth={1} aria-hidden="true" />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent side="right" className="min-w-[80px]">
                                                <div className="font-bold text-sm">{group.title}</div>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ) : (
                                    <h2 
                                        key="expanded-title"
                                        className={cn(
                                            "text-sm text-muted-foreground uppercase tracking-wider px-3 mb-1 overflow-hidden whitespace-nowrap text-ellipsis"
                                        )}
                                    >
                                        {group.title}
                                    </h2>
                                )
                            )}
                            {group.links.map((link, linkIndex) => (
                                link.label === 'Hỗ trợ: 1800 1093' ? (
                                    <SupportCallButton
                                        key={linkIndex}
                                        label={link.label}
                                        icon={link.icon}
                                        isCollapsed={isCollapsed}
                                    />
                                ) : (
                                    <AsideLink
                                        key={linkIndex}
                                        href={link.href}
                                        label={link.label}
                                        icon={link.icon}
                                        active={'active' in link && link.active}
                                        isCollapsed={isCollapsed}
                                    />
                                )
                            ))}
                        </div>
                    ))}
                </nav>
            </aside>
        </StickyAsideWrapper>
    );
});

AsideNav.displayName = 'AsideNav'; 