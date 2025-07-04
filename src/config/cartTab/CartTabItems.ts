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
  { value: "hosting", label: "Hosting", icon: Globe },
  { value: "vps", label: "VPS", icon: Server },
  { value: "dedicated-server", label: "Máy chủ vật lý", icon: HardDrive },
  { value: "ssl", label: "SSL Certificates", icon: BadgeCheck },
  { value: "business-email", label: "Email Doanh Nghiệp", icon: Mail },
  { value: "firewall", label: "Firewall GEN 7", icon: Shield },
  { value: "pagespeed", label: "Tối ưu Pagespeed", icon: Gauge },
  { value: "licenses", label: "Licenses", icon: Key },
  { value: "colocation", label: "Chỗ đặt máy chủ", icon: Database },
  { value: "domain", label: "Tên miền", icon: AtSign }
];