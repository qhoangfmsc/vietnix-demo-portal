import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

const LoginButton: React.FC = () => (
  <Button asChild variant="outline" size="lg" className="flex items-center gap-2">
    <Link href="/login">
      <LogIn className="w-5 h-5" />
      <span>Đăng nhập</span>
    </Link>
  </Button>
);

export default LoginButton; 