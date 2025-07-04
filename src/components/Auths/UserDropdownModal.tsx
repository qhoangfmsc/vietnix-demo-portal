"use client";
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { userDropdownItems } from "../../config/userDropdownItems";
import { Button } from "@/components/ui/button";

export default function UserDropdownModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-xs w-full">
        <DialogHeader>
          <DialogTitle>Tài khoản</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-1 mt-2">
          {userDropdownItems.map((item, idx) =>
            item.separator ? (
              <div key={idx} className="border-t my-2" />
            ) : item.href ? (
              <Button key={item.name} asChild variant="ghost" className="justify-start w-full">
                <Link href={item.href} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </Button>
            ) : null
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 