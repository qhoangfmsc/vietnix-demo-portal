"use client"

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useFetch } from "@/hook/useFetch";

export default function CartBannerCarousel() {
  const { data: banners, error, loading } = useFetch<{ src: string; alt: string }[]>("/mockup-datas/banners/CartBanners.json");

  if (loading) return <div className="w-full h-32 md:h-40 bg-muted animate-pulse rounded-lg mb-6" />;
  if (error) return <div className="text-red-500">Lỗi tải banner</div>;
  if (!banners) return null;

  return (
    <Carousel
      plugins={[Autoplay({ delay: 10000, stopOnInteraction: false })]}
      opts={{ loop: true }}
      className="w-full h-32 md:h-40 rounded-lg overflow-hidden mb-6"
    >
      <CarouselContent>
        {banners.map((banner, i) => (
          <CarouselItem key={i} className="h-32 md:h-40">
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-32 md:h-40 object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
      <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
