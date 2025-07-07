"use client"

import * as React from "react";
import CartServiceSection from "./CartServiceSection";
import { Button } from "../ui/button";
import TickBannerIcon from "../icons/TickBannerIcon";
import Image from "next/image";

export type DetailTab = Record<string, string>;

export default function CartDetailTabs({ detailTabs }: { detailTabs: DetailTab[] }) {
  const [detail, setDetail] = React.useState<string | null>(null);
  return (
    <div className="w-full mb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {detailTabs.map((tab) => (
          <Button
            key={tab.value}
            onClick={() => setDetail(tab.value)}
            className={`relative flex flex-col h-full overflow-hidden items-center 
              border border-border rounded-lg p-4 transition-all duration-150 
              cursor-pointer bg-card hover:border-primary 
              ${detail === tab.value ? "border-primary shadow-md" : "border-border"} 
              hover:bg-transparent`}
          >
            {detail === tab.value && (
              <span className="absolute top-0 right-0 w-0 h-0 border-t-[35px] border-l-[35px] border-t-primary border-l-transparent">
                <TickBannerIcon />
              </span>
            )}
            <Image className="w-12 h-12 mb-2" src={tab.imageUrl} alt={tab.label} width={50} height={50} />
            <div className="font-semibold text-base text-foreground text-pretty">{tab.label}</div>
          </Button>
        ))}
      </div>
      {detail &&
        <CartServiceSection apiUrl={detailTabs.find(t => t.value === detail)?.apiUrl} />
      }
    </div>
  );
} 