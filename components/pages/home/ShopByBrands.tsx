import Container from "@/components/common/Container";
import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";
import React from "react";

const extraData = [
  {
    title: "Free Delivery",
    description: "free shipping over 1000",
    icon: <Truck size={45} />,
  },
  {
    title: "Free Return",
    description: "free shipping over 1000",
    icon: <GitCompareArrows size={45} />,
  },
  {
    title: "Customer Support",
    description: "Friedly 24/7 customer support",
    icon: <Headset size={45} />,
  },
  {
    title: "Money Back Guarantee",
    description: "Quality checked products",
    icon: <ShieldCheck size={45} />,
  },
];
const ShopByBrands = () => {
  return (
    <Container className="mt-10 md:mt-10 lg:mt-20  bg-tech_white p-5 lg:p-7 rounded-md ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-3  p-2">
        {extraData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 border px-5 py-3 rounded-md hover:border-tech_orange hoverEffect"
          >
            <span>{item.icon}</span>
            <div className="text-sm">
              <p className="text-tech_gray/80 font-bold">{item?.title}</p>
              <p className="tex-tech_light_color">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ShopByBrands;
