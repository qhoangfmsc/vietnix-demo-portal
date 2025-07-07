import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const RegisterRedirect: React.FC = () => (
  <div className="hidden md:flex flex-col justify-between items-center w-1/2 bg-gradient-to-b from-primary to-primary/80 p-10 text-primary-foreground relative">
    <div className="flex flex-col items-center w-full">
      <Image src="/images/logo.svg" alt="Vietnix" width={120} height={40} className="mb-8" />
      <h2 className="text-2xl font-bold mb-2 text-center text-primary-foreground">ĐÃ CÓ TÀI KHOẢN?</h2>
      <p className="text-base text-center mb-8 text-primary-foreground/90">Đăng nhập ngay để nhận ưu đãi và dễ dàng quản lý các dịch vụ đã đăng ký tại Vietnix</p>
      <Button asChild variant="outline" className="border-primary-foreground bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary w-40">
        <Link href="/login">Đăng Nhập</Link>
      </Button>
    </div>
    <div className="text-center w-full mt-8">
      <span className="text-sm text-primary-foreground/80">Hotline Hỗ trợ: <b>1800 1093</b></span>
    </div>
  </div>
);

export default React.memo(RegisterRedirect); 