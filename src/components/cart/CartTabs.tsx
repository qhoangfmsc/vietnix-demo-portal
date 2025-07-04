import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cartTabItems } from "@/config/cartTab/CartTabItems";

export default function CartTabs() {
  return (
    <Tabs defaultValue={cartTabItems[0].value} className="w-full">
      <TabsList
        className="h-full bg-transparent flex flex-wrap justify-start gap-2 p-2"
        style={{ rowGap: 8 }}
      >
        {cartTabItems.map((item) => {
          const Icon = item.icon;
          return (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="max-w-fit px-4 py-2 text-sm font-medium border-b-2 border-transparent transition-all duration-150 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 flex items-center gap-2"
            >
              <Icon />
              {item.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {cartTabItems.map((item) => (
        <TabsContent key={item.value} value={item.value} className="min-h-[120px]">
          <div className="text-center text-lg font-semibold py-8">Nội dung mô phỏng cho tab "{item.label}"</div>
        </TabsContent>
      ))}
    </Tabs>
  );
} 