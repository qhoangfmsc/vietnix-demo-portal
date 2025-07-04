"use client"

import * as React from "react";
import CartServiceSection from "./CartServiceSection";
import { Button } from "../ui/button";
import TickBannerIcon from "../icons/TickBannerIcon";

export default function CartDetailTabs({ detailTabs }: { detailTabs: any[] }) {
  const [detail, setDetail] = React.useState(null);
  return (
    <div className="w-full mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {detailTabs.map((tab) => (
          <Button
            key={tab.value}
            onClick={() => setDetail(tab.value)}
            className={`relative flex flex-col h-full overflow-hidden items-center border border-gray-200 rounded-lg px-6 py-4 transition-all duration-150 cursor-pointer bg-white hover:border-blue-400 ${detail === tab.value ? "border-blue-500 shadow-md" : "border-gray-200"} hover:bg-transparent`}
          >
            {detail === tab.value && (
              <span className="absolute top-0 right-0 w-0 h-0 border-t-[35px] border-l-[35px] border-t-blue-500 border-l-transparent">
                <TickBannerIcon />
              </span>
            )}
            <img src={tab.imageUrl} alt={tab.label} className="w-12 h-12 mb-2" />
            <span className="font-semibold text-base text-gray-700">{tab.label}</span>
          </Button>
        ))}
      </div>
      {detail &&
        <CartServiceSection apiUrl={detailTabs.find(t => t.value === detail)?.apiUrl} />
      }
    </div>
  );
} 