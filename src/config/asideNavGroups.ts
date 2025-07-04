import { Home, Package, Globe, User, FileText, Download, Share2, LifeBuoy, Phone } from 'lucide-react';

export const asideNavGroups = [
    {
        links: [{ href: "/dashboard", label: "Trang chủ", icon: Home }]
    },
    {
        title: "DỊCH VỤ",
        links: [
            { href: "/services", label: "Dịch vụ của tôi", icon: Package, active: true },
            { href: "/domains", label: "Quản lý tên miền", icon: Globe },
        ]
    },
    {
        title: "TÀI KHOẢN",
        links: [
            { href: "/account-info", label: "Thông tin tài khoản", icon: User },
            { href: "/invoices", label: "Hóa đơn", icon: FileText },
            { href: "/themes-plugins", label: "Theme & Plugin", icon: Download },
        ]
    },
    {
        title: "ĐỐI TÁC",
        links: [
            { href: "/affiliate", label: "Affiliate Program", icon: Share2 },
        ]
    },
    {
        title: "HỖ TRỢ",
        links: [
            { href: "/support-request", label: "Yêu cầu hỗ trợ", icon: LifeBuoy },
            { href: "", label: "Hỗ trợ: 1800 1093", icon: Phone },
        ]
    }
]; 