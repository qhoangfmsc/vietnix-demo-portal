import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, User, Users, Mail, Lock, Settings, Repeat2, BookUser } from "lucide-react";

const user = {
  name: "User",
  email: "user@email.com",
};

const iconClass = "w-5 h-5 mr-3";

const dropdownItems = [
  { name: "Chuyển đổi tài khoản", href: "/switch-account", icon: <Repeat2 className={iconClass} /> },
  { separator: true },
  { name: "Chi tiết tài khoản", href: "/account-detail", icon: <User className={iconClass} /> },
  { name: "Quản lý người dùng", href: "/user-management", icon: <Users className={iconClass} /> },
  { name: "Chi tiết liên hệ", href: "/contact-detail", icon: <BookUser className={iconClass} /> },
  { name: "Lịch sử Email", href: "/email-history", icon: <Mail className={iconClass} /> },
  { name: "Mật khẩu", href: "/password", icon: <Lock className={iconClass} /> },
  { name: "Thiết lập bảo mật", href: "/security-settings", icon: <Settings className={iconClass} /> },
  { separator: true },
  { name: "Đăng xuất", href: "/logout", icon: <LogOut className={iconClass} /> },
];

const UserDropdown: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
          <Button variant="ghost" size="default" className="rounded-full p-8 px-4">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="text-xl text-white bg-[linear-gradient(282deg,_#00b0ff_5.54%,_#3e98eb)]">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start ml-2">
              <span className="font-semibold text-lg leading-tight">{user.name}</span>
              <span className="text-base text-gray-500 leading-tight">{user.email}</span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80 py-2 text-xl">
          {dropdownItems.map((item, idx) =>
            item.separator ? (
              <DropdownMenuSeparator key={idx} />
            ) : (
              <DropdownMenuItem key={item.name} asChild>
                <a href={item.href} className="flex items-center py-3 px-2 cursor-pointer">
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDropdown; 