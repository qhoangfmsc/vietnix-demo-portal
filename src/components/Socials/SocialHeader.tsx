import { faFacebookF, faYoutube, faXTwitter, faTiktok, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface SocialComponent { }

const SocialComponent: React.FC<SocialComponent> = () => {
    const socialArray = [
        {
            name: "Facebook",
            href: "https://www.facebook.com/VietnixHosting/",
            icon: <FontAwesomeIcon icon={faFacebookF} width={10} />
        },
        {
            name: "Twitter",
            href: "https://twitter.com/vietnix",
            icon: <FontAwesomeIcon icon={faXTwitter} width={14} />
        },
        {
            name: "Tiktok",
            href: "https://www.tiktok.com/@vietnix",
            icon: <FontAwesomeIcon icon={faTiktok} width={14} />
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/vietnix-hosting/",
            icon: <FontAwesomeIcon icon={faLinkedinIn} width={14} />
        },
        {
            name: "YouTube",
            href: "https://www.youtube.com/@vietnix",
            icon: <FontAwesomeIcon icon={faYoutube} width={18} />
        }
    ]

    return (
        <div className="flex flex-wrap items-center gap-2 text-gray-500">
            {socialArray.map((social) => (
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
    )
}

export default SocialComponent