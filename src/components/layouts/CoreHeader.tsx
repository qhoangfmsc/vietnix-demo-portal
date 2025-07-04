import React from 'react';
import Image from "next/image";
import Link from "next/link";
import RegisterButton from "@/components/auths/RegisterButton";
import LoginButton from "@/components/auths/LoginButton";
import UserDropdown from "@/components/auths/UserDropdown";
import UserDropdownModal from "@/components/auths/UserDropdownModal";
import { Menu, User } from "lucide-react";
import DrawerAsideNav from '@/components/layouts/aside/DrawerAsideNav';

const CoreHeader: React.FC = React.memo(function CoreHeader() {
  return (
    <header className="flex items-center justify-between px-4 lg:px-8 py-2 border-b border-gray-200 bg-white">
      <Link className="flex-shrink-0 py-3 w-28 lg:w-40" href="/">
        <Image src="/images/logo.svg" alt="Vietnix" width={160} height={50} priority />
      </Link>

      <div className="flex items-center gap-3">
        <RegisterButton />

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center gap-3">
          <LoginButton />
          <UserDropdown />
        </div>

        {/* MOBILE */}
        <div className="flex lg:hidden items-center gap-3">
          <UserDropdownModal trigger={
            <button className="p-2 rounded-full border border-gray-200 bg-white">
              <User className="h-6 w-6" />
            </button>
          } />
          <DrawerAsideNav trigger={
            <button className="p-2 rounded-md border border-gray-200 bg-white">
              <Menu className="h-6 w-6" />
            </button>
          } />
        </div>
      </div>
    </header>
  );
});

export default CoreHeader;
