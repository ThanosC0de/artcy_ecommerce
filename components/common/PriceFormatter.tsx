import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = ({ amount, className }: Props) => {
  const formattedPrice = new Number(amount).toLocaleString("en-India", {
    currency: "INR",
    style: "currency",
    minimumFractionDigits: 2,
  });
  return (
    <span className={cn("text-sm font-semibold text-tech_dark", className)}>
      {formattedPrice}
    </span>
  );
};

export default PriceFormatter;
