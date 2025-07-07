import {
  Globe,
  Server,
  HardDrive,
  BadgeCheck,
  Mail,
  Shield,
  Gauge,
  Key,
  Database,
  AtSign
} from "lucide-react";

export const cartTabItems = [
  {
    value: "hosting",
    label: "Hosting",
    icon: Globe,
    detailTabs: [
      { value: "cheap-hosting", label: "Hosting Giá Rẻ", imageUrl: "/images/hosting-gia-r.svg", apiUrl: "/mockup-datas/carts/ServiceItems.json" },
      { value: "seo-hosting", label: "SEO Hosting", imageUrl: "/images/seo-hosting.svg", apiUrl: "/mockup-datas/carts/ServiceItems.json" },
      { value: "nvme-hosting", label: "Hosting NVMe", imageUrl: "/images/hosting-nvme.svg", apiUrl: "/mockup-datas/carts/ServiceItems.json" },
      { value: "wordpress-hosting", label: "Wordpress Hosting", imageUrl: "/images/wordpress-hosting-2024.svg", apiUrl: "/mockup-datas/carts/ServiceItems.json" },
      { value: "business-hosting", label: "Hosting Doanh Nghiệp", imageUrl: "/images/hosting-doanh-nghip-2025.svg", apiUrl: "/mockup-datas/carts/ServiceItems.json" },
      { value: "maxspeed-hosting", label: "Hosting MaxSpeed", imageUrl: "/images/hosting-maxspeed.svg", apiUrl: "/mockup-datas/carts/ServiceItems.json" }
    ]
  },
  {
    value: "vps",
    label: "VPS",
    icon: Server,
    detailTabs: [
      { value: "cheap-vps", label: "VPS Giá Rẻ", imageUrl: "/images/vps-gia-r.svg", apiUrl: "/mockup-datas/carts/ServiceItems.json" },
      { value: "ssd-vps", label: "VPS SSD", imageUrl: "/images/vps-ssd-pro.svg", apiUrl: "/mockup-datas/carts/ServiceItems.json" },
      { value: "nvme-vps", label: "VPS NVMe", imageUrl: "/images/vps-nvme-2025.svg", apiUrl: "/mockup-datas/carts/ServiceItems.json" },
      { value: "amd-vps", label: "VPS AMD", imageUrl: "/images/vps-amd.svg", apiUrl: "/mockup-datas/carts/ServiceItems.json" },
      { value: "gpu-vps", label: "VPS GPU", imageUrl: "/images/cloud-vps-gpu.svg", apiUrl: "/mockup-datas/carts/ServiceItems.json" }
    ]
  },
  {
    value: "dedicated-server",
    label: "Máy chủ vật lý",
    icon: HardDrive,
    apiUrl: "/mockup-datas/carts/ServiceItems.json"
  },
  {
    value: "ssl",
    label: "SSL Certificates",
    icon: BadgeCheck,
    apiUrl: "/mockup-datas/carts/ServiceItems.json"
  },
  {
    value: "business-email",
    label: "Email Doanh Nghiệp",
    icon: Mail,
    apiUrl: "/mockup-datas/carts/ServiceItems.json"
  },
  {
    value: "firewall",
    label: "Firewall GEN 7",
    icon: Shield,
    apiUrl: "/mockup-datas/carts/ServiceItems.json"
  },
  {
    value: "pagespeed",
    label: "Tối ưu Pagespeed",
    icon: Gauge,
    apiUrl: "/mockup-datas/carts/ServiceItems.json"
  },
  {
    value: "licenses",
    label: "Licenses",
    icon: Key,
    apiUrl: "/mockup-datas/carts/ServiceItems.json"
  },
  {
    value: "colocation",
    label: "Chỗ đặt máy chủ",
    icon: Database,
    apiUrl: "/mockup-datas/carts/ServiceItems.json"
  },
  {
    value: "domain",
    label: "Tên miền",
    icon: AtSign,
    apiUrl: "/mockup-datas/carts/ServiceItems.json"
  }
];