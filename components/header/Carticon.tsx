import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

const Carticon = () => {
  return (
    <Link
      href={"/cart"}
      className="flex items-center gap-2.5 justify-end group"
    >
      <span className="relative">
        <ShoppingBag
          className="text-tech_white lg:text-tech_orange w-6 h-6 lg:w-6 lg:h-6 
        group-hover:text-tech_orange lg:group-hover:text-tech_white hoverEffect"
        />
        <span
          className="absolute -top-1 -right-1 bg-tech_orange text-tech_white h-3.5 w-3.5 rounded-full text-xs
        font-semibold flex items-center justify-center "
        >
          0
        </span>
      </span>

      <div className="hidden lg:flex flex-col">
        <h4 className="text-base font-bold text-tech_white">Cart</h4>
        <p className="text-xs whitespace-nowrap capitalize">view cart</p>
      </div>
    </Link>
  );
};

export default Carticon;
