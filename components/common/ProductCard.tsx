import { Product } from "@/sanity.types";
import { image } from "@/sanity/image";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm rounded-md group bg-tech_white ">
      <div className="relative overflow-hidden">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={image(product?.images[0]).size(900, 900).url()}
              alt="productImage"
              width={500}
              height={500}
              loading="lazy"
              className={`w-full h-70 object-contain rounde overflow-hidden 
                ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-60"}`}
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
      <div className="p-3 flex flex-col gap-2">
        {product?.categories && (
          <p
            className="uppercase line-clamp-1 text-xs 
            font-medium text-tech_dark/50"
          >
            {product?.categories.map((cat) => cat).join(",")}
          </p>
        )}
        <Title className="text-base line-clamp-2 h-12">{product?.name}</Title>
        <div className="flex items-center gap-2.5">
          <p className={`${product?.stock! === 0 && "text-tech_dark_red"}`}>
            {product.stock !== 0 ? "In Stock" : "Out of Stock"}
          </p>
          <p className="font-semibold text-tech_light_green">
            {(product?.stock as number) > 0 && product?.stock}{" "}
          </p>
        </div>
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />
        <AddToCartButton product={product} className="w-36 rounded-full"/>
      </div>
    </div>
  );
};

export default ProductCard;
