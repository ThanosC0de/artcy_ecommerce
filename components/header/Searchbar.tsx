"use client"
import React from "react";
import { Input } from "../ui/input";

const Searchbar = () => {
    const [search, setSearch] = React.useState("");
  return (
    <div className="relative lg:w-full">
      <form onSubmit={(e) => e.preventDefault()} className="releative hidden lg:flex item-ceneter">
        <Input
          placeholder="Search..."
          className="flex-1 rounded-md py-5 focus-visible:ring-0 
          focus-visible:border-tech_orange bg-tech_white text-tech_dark placeholder:font-semibold 
          placeholder::tracking-wide pr-16"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          onFocus={()=> setSearch("")}
        />
      </form>
    </div>
  );
};

export default Searchbar;
