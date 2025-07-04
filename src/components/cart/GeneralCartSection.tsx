import * as React from "react";
import CartBannerCarousel from "@/components/banners/CartBannerCarousel";
import CartTabs from "./CartTabs";
import { Card } from "../ui/card";

export default function GeneralCartSection() {
  return (
    <Card className="w-full sm:max-w-7xl mx-auto p-6 bg-white border rounded-xl">
      <CartBannerCarousel />
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">Các dịch vụ của Vietnix</h1>
        <CartTabs />
      </div>
    </Card>
  );
}
