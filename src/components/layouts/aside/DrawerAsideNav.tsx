"use client";
import * as React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Grip } from "lucide-react";
import { asideNavGroups } from "@/configs/asideMenu/AsideNavGroups";
import SupportCallButton from "@/components/layouts/SupportCallButton";
import AsideLink from "@/components/layouts/aside/AsideLink";

export default function DrawerAsideNav({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="right" className="p-0 w-64">
        <SheetHeader>
          <SheetTitle className="text-lg px-4 pt-4 pb-2">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col h-full overflow-y-auto p-4 space-y-8">
          {asideNavGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-2">
              {group.title && (
                <div className="flex items-center gap-2 px-3 mb-1 text-sm text-gray-500 uppercase tracking-wider">
                  <Grip className="h-4 w-4 text-gray-400" strokeWidth={1} />
                  <span>{group.title}</span>
                </div>
              )}
              {group.links.map((link, linkIndex) => (
                link.label === 'Hỗ trợ: 1800 1093' ? (
                  <SupportCallButton
                    key={linkIndex}
                    label={link.label}
                    icon={link.icon}
                    isCollapsed={false}
                  />
                ) : (
                  <AsideLink
                    key={linkIndex}
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                    active={'active' in link && link.active}
                    isCollapsed={false}
                  />
                )
              ))}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
} 