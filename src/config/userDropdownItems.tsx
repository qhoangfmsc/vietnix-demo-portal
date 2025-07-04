import { LogOut, User, Users, Mail, Lock, Settings, Repeat2, BookUser } from "lucide-react";

const iconClass = "w-5 h-5 mr-3";

export const userDropdownItems = [
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