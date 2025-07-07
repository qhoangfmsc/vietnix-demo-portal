"use client";

import React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const LanguageSwitchingButton: React.FC = () => {
  const { lang, setLanguageFunction } = useLanguage();
  const activeClass = "font-semibold text-primary";

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button className="hover:text-primary" variant="ghost" size="icon" aria-label="Change language">
              <Globe size={20} />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          Chọn ngôn ngữ
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguageFunction("vi")}
          className={lang === "vi" ? activeClass : ""}
        >
          🇻🇳 Tiếng Việt (VI)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguageFunction("en")}
          className={lang === "en" ? activeClass : ""}
        >
          🇬🇧 English (EN)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitchingButton;
