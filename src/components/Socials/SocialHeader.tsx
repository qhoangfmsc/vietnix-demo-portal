import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { socialMediaArray } from "@/config/socialMedia/socialMedia";

const SocialComponent: React.FC = React.memo(function SocialComponent() {
    return (
        <div className="block">
            <div className="hidden md:flex flex-wrap items-center gap-2 text-gray-500">
                {socialMediaArray.map((social) => (
                    <Button
                        key={social.name}
                        className="hover:text-blue-400"
                        size="sm"
                        variant="ghost"
                        asChild
                    >
                        <Link href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            {social.icon}
                            <span>{social.name}</span>
                        </Link>
                    </Button>
                ))}
            </div>
        </div>
    )
})

export default SocialComponent