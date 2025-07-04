import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const CartButton: React.FC = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button className="hover:text-blue-400" variant="ghost" size="icon" asChild>
          <Link href="/cart">
            <ShoppingBag />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        Giỏ hàng
      </TooltipContent>
    </Tooltip>
  );
};

export default CartButton;
