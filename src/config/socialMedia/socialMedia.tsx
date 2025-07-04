import { faFacebookF, faLinkedinIn, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const socialMediaArray = [
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