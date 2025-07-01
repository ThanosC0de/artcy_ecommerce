import { Product } from "@/sanity.types";
import { image } from "@/sanity/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm rounded-md group bg-tech_white ">
      <div className="relative overflow-hidden">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <img
              src={image(product?.images[0]).size(900, 900).url()}
              alt="productImage"
              loading="lazy"
              className={`w-full h-70 object-contain rounde overflow-hidden 
                ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-60"}hoverEffect`}
            />
          </Link>
        )}
        {(product?.discount as number) > 0 && (
          <p
            className="absolute top-2 left z-10 text-xs border border-l-0 
            bg-tech_purple text-tech_white font-semibold
             border-texh_dark/50 rounded-r-full px-2"
          >
            Save:₹
            {Math.round(
              (product?.price as number) * ((product?.discount as number) / 100)
            )}{" "}
            {`-(${product?.discount})`}
          </p>
        )}
      </div>
      <div>
        {product?.categories && (
          <p>{product?.categories.map((cat) => cat).join(",")}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
