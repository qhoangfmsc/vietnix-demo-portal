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
import { userDropdownItems } from '../../config/userMenu/UserDropdownItems';

const user = {
  name: "User",
  email: "user@email.com",
};

const iconClass = "w-5 h-5 mr-3";

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
          {userDropdownItems.map((item, idx) =>
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