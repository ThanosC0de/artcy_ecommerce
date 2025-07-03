import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { ShoppingCart } from "lucide-react";
import React from "react";

interface Props {
  product: Product;
  className?: string;
}
const AddToCartButton = ({ product, className }: Props) => {
  return (
    <button
      className={cn(
        "w-full py-2 px-4 bg-tech_orange text-tech_white rounded flex items-center justify-center hover:bg-tech_orange/90 hoverEffect",
        className)}>
      <ShoppingCart size={16} className="mr-2" /> Add to Cart
    </button>
  );
};

export default AddToCartButton;
