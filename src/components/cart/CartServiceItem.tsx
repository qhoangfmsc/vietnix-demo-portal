import * as React from "react";
import { Button } from "../ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import { notify } from "@/components/notifications/CustomNoti";
import { Loader2Icon } from "lucide-react";

interface Price {
  name: string;
  price: string;
}
interface CartServiceItemProps {
  service: {
    serviceName: string;
    priceList: Price[];
    [key: string]: string | number | undefined | null | Price[];
  };
}

export default function CartServiceItem({ service }: CartServiceItemProps) {
  const fields = Object.entries(service).filter(
    ([key]) => key !== "serviceName" && key !== "priceList"
  );
  const [selected, setSelected] = React.useState("0");
  const [buyProcess, setBuyProcess] = React.useState(false);

  const handleClickServiceItem = () => {
    setBuyProcess(true);
    const price = service.priceList[Number(selected)];
    notify.loading("Đang tiến hành mua...", { duration: 2000 });
    setTimeout(() => {
      notify.success(
        `Đã mua sản phẩm: ${service.serviceName}`,
        { description: price ? `Gói: ${price.name} - ${price.price}` : undefined },
      );
      setBuyProcess(false);
    }, 2000);
  }

  return (
    <div className="w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="bg-primary/10 px-4 py-3 font-bold text-foreground text-lg border-b">{service.serviceName}</div>
      <div className="p-4 flex flex-col gap-1">
        {fields.map(([key, value]) => (
          <div key={key} className="leading-7 mb-1">
            <span className="font-bold uppercase text-muted-foreground">{key}:</span>{" "}
            {typeof value === "string" || typeof value === "number" ? (
              <span className={key.toLowerCase().includes("backup") ? "font-semibold text-primary" : ""}>
                {value}
              </span>
            ) : null}
          </div>
        ))}
        <Select value={selected} onValueChange={setSelected}>
          <SelectTrigger className="mt-3 mb-2 w-full">
            <SelectValue placeholder="Chọn gói" />
          </SelectTrigger>
          <SelectContent>
            {service.priceList.map((item, idx) => (
              <SelectItem key={item.name} value={String(idx)}>
                {item.name} - {item.price}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded py-2 mt-1 transition cursor-pointer"
          onClick={handleClickServiceItem}
          disabled={buyProcess}
        >
          {buyProcess ? <Loader2Icon className="animate-spin" /> : "Đăng ký"}
        </Button>
      </div>
    </div>
  );
} 