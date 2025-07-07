"use client"

import * as React from "react";
import { useFetch } from "@/hooks/useFetch";
import CartServiceItem from "./CartServiceItem";

interface Price {
  name: string;
  price: string;
}
export type Service = {
  [key: string]: string | number | null | undefined | Price[];
};

export default function CartServiceSection({ apiUrl }: { apiUrl?: string }) {
  const { data, error, loading } = useFetch<Service[]>(apiUrl || "");

  if (!apiUrl) return null;
  if (loading) return <div className="text-center text-gray-400 py-8">Đang tải dữ liệu...</div>;
  if (error) return <div className="text-center text-red-500 py-8">Lỗi tải dữ liệu</div>;
  if (!data) return null;

  return (
    <div className="flex flex-col gap-4 mt-12">
      <h1 className="text-xl font-bold">Gói dịch vụ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((service, idx) => (
          <CartServiceItem
            key={typeof service.serviceName === 'string' ? service.serviceName : String(idx)}
            service={service as Parameters<typeof CartServiceItem>[0]['service']}
          />
        ))}
      </div>
    </div>
  );
} 