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
import Image from "next/image";

export default function CartBannerCarousel() {
  const { data: banners, error, loading } = useFetch<{ src: string; alt: string }[]>("/mockup-datas/banners/CartBanners.json");

  if (loading) return <div className="w-full h-32 md:h-40 bg-muted animate-pulse rounded-lg mb-6" />;
  if (error) return <div className="text-red-500">Lỗi tải banner</div>;
  if (!banners) return null;

  return (
    <Carousel
      plugins={[Autoplay({ delay: 10000, stopOnInteraction: false })]}
      opts={{ loop: true }}
      className="hidden lg:block w-full h-fit rounded-lg overflow-hidden mb-6"
    >
      <CarouselContent>
        {banners.map((banner, i) => (
          <CarouselItem key={i} className="h-fit">
            <Image
              src={banner.src}
              alt={banner.alt}
              width={1280}
              height={300}
              className="w-full h-fit object-contain rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
      <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
