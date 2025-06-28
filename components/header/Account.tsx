import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Account = () => {
  return (
    <div>
      <Link
        href={"/account/account"}
        className="hidden lg:flex items-center gap-2.5 justify-end group">
        <User className="w-6 h-6 text-tech_orange group-hover:text-tech_white hoverEffect" />
        <div className="hidden lg:flex flex-col">
          <h4 className="text-base font-bold text-tech_white">Account</h4>
          <p className="text-xs whitespace-nowrap">Login/Register</p>
        </div>
      </Link>
      <User className=" lg:hidden lg:text-tech_orange w-6 h-6 hover:text-tech_orange lg:group-hover:text-tech_white hoverEffect" />
    </div>
  );
};

export default Account;
