"use client";
import React, { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";

const Searchbar = () => {
  const [search, setSearch] = React.useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const searchRef = useRef<HTMLInputElement>(null);
  const [showSearch, setShowSearch] = useState(false);
  const mobileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="relative lg:w-full">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="releative hidden lg:flex item-ceneter"
      >
        <Input
          placeholder="Search..."
          className="flex-1 rounded-md py-5 focus-visible:ring-0 
          focus-visible:border-tech_orange bg-tech_white text-tech_dark placeholder:font-semibold 
          placeholder::tracking-wide pr-16"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setSearch("")}
        />
        {search ? (
          <X
            onClick={() => setSearch("")}
            className="w-5 h-5 absolute right-3 top-2.5 text-tech_black hover:text-tech_orange hoverEffect:cursor-pointer"
          />
        ) : (
          <Search className="absolute right-3 top-3 w-5 h-5 text-tech_black"/>
        )}
      </form>
    </div>
  );
};

export default Searchbar;
