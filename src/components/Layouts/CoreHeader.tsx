import React from 'react';
import Image from "next/image";
import Link from "next/link";
import RegisterButton from "../Auths/RegisterButton";
import LoginButton from "../Auths/LoginButton";
import UserDropdown from "../Auths/UserDropdown";

const CoreHeader: React.FC = React.memo(() => {
  return (
    <header className="flex items-center justify-between px-8 py-2 border-b border-gray-200 bg-white">
      <Link className="py-3" href="/">
        <Image src="/logo.svg" alt="Vietnix" width={160} height={50} priority />
      </Link>
      
      <div className="flex items-center gap-3">
        <RegisterButton />
        <LoginButton />
        <UserDropdown />
      </div>
    </header>
  );
});

export default CoreHeader;
