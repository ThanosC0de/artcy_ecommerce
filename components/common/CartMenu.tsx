"use client";

import { BarChart2, Heart, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CartMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = 6;
  const favoriteProducts = 3;
  const cartCount = 3;
  const wishlistCount = 6;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="fixed bottom-5 right-5 flex flex-col 
  item-end gap-2"
    >
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div initial={{ opacity:0, y:20 }}  
          animate={{ opacity:1, y:0 }} 
          exit={{ opacity:0, y:20 }} 
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-2 mb-2">
            <Link href={"/cart"} onClick={handleClick}>
              <div
                className="bg-tech_dark text-tech_white p-3 rounded-full shadow-lg
      hover:bg-tech_orange hoverEffect group"
              >
                <ShoppingCart size={20} />
                {cartCount && (
                  <span
                    className="absolute -top-1 -right-1 bg-tech_dark text-tech_white
                text-xs w-5 h-5 flex items-center justify-center rounded-full 
                group-hover:bg hoverEffect "
                  >
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            <Link href={"/wishlist"} onClick={handleClick}>
              <div
                className="bg-tech_dark text-tech_white p-3 rounded-full shadow-lg
                hover:bg-tech_orange hoverEffect"
              >
                <Heart size={20} />
                {wishlistCount && (
                  <span
                    className="absolute -top-1 -right-1 bg-tech_orange text-white
                    text-xs w-5 h-5 flex items-center justify-center rounded-full "
                  >
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>

            <Link href={"/compare"} onClick={handleClick} >
              <div
                className="bg-tech_dark text-tech_white p-3 rounded-full shadow-lg 
              hover:bg-tech_orange hoverEffect"
              >
                <BarChart2 size={20} />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-tech_orange text-tech_white p-3 rounded-full shadow-lg
      hover:bg-tech_dark hoverEffect group "
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <>
            <ShoppingCart size={20} />
            {cartCount && (
              <span
                className="absolute -top-1 -right-1 bg-tech_dark text-tech_white
                text-xs w-5 h-5 flex items-center justify-center rounded-full 
                group-hover:bg hoverEffect "
              >
                {cartCount}
              </span>
            )}
          </>
        )}
      </button>
    </div>
  );
};

export default CartMenu;
