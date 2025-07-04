import { Button } from "@/components/ui/button";
import Link from "next/link";
import PlusScaleUpIcon from "../animatedIcons/PlusScaleUpIcon";

const RegisterButton: React.FC = () => (
  <Button asChild className="bg-[linear-gradient(282deg,_#00b0ff_5.54%,_#3e98eb)] text-[17px]" size="lg" variant="default">
    <Link className="relative flex items-center" href="/dang-ky">
      <PlusScaleUpIcon />
      <span>Đăng ký dịch vụ</span>
    </Link>
  </Button>
);

export default RegisterButton; 