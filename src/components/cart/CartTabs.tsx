import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cartTabItems } from "@/config/cartTab/CartTabItems";
import CartDetailTabs from "./CartDetailTabs";
import CartServiceSection from "./CartServiceSection";

export default function CartTabs() {
  return (
    <Tabs defaultValue={cartTabItems[0].value} className="w-full">
      <TabsList
        className="h-full w-full bg-transparent grid grid-cols-2 sm:flex flex-wrap justify-start gap-2 p-2"
        style={{ rowGap: 8 }}
      >
        {cartTabItems.map((item) => {
          const Icon = item.icon;
          return (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="w-full sm:max-w-fit p-2 text-sm font-medium border-b-2 border-transparent 
              transition-all duration-150 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 
              flex items-center gap-2 cursor-pointer hover:text-blue-400 justify-start sm:justify-start"
            >
              <Icon className="hidden sm:block" />
              {item.label}
            </TabsTrigger>
          );
        })}
      </TabsList>

      {/* Tabs content */}
      {cartTabItems.map((item) => (
        <TabsContent key={item.value} value={item.value} className="min-h-[120px]">
          {item.detailTabs ? (
            <CartDetailTabs detailTabs={item.detailTabs} />
          ) : (
            <CartServiceSection apiUrl={item.apiUrl} />
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
} 