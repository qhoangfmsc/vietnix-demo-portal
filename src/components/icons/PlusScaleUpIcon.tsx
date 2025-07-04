import { Plus } from "lucide-react";

const PlusScaleUpIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <span className={`relative inline-flex items-center ${className}`}>
    <span className="animate-ping absolute text-[22px] -top-[2px]">
      <Plus />
    </span>
    <span>
      <Plus className="text-[17px]" />
    </span>
  </span>
);

export default PlusScaleUpIcon;
