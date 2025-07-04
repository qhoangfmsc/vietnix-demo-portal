import * as React from "react";
import { Button } from "../ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";

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

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="bg-blue-50 px-4 py-3 font-bold text-gray-700 text-lg border-b">{service.serviceName}</div>
      <div className="p-4 flex flex-col gap-1">
        {fields.map(([key, value]) => (
          <div key={key} className="leading-7 mb-1">
            <span className="font-bold uppercase text-gray-600">{key}:</span>{" "}
            {typeof value === "string" || typeof value === "number" ? (
              <span className={key.toLowerCase().includes("backup") ? "font-semibold text-blue-700" : ""}>
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
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded py-2 mt-1 transition">
          Đăng ký
        </Button>
      </div>
    </div>
  );
} 