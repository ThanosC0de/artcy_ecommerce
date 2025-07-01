import GoBack from "@/components/common/GoBack";
import Logo from "@/components/common/Logo";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-tech_white relative ">
      <GoBack />
      <div className="h-full min-h-screen flex flex-col items-center justify-center px-4 ">
        <div className="max-w-md mx-auto">
          <div className="text-center ">
            <Logo className="w-48 mx-auto " />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Looking for something?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We&apos;re sorry, The web address you entered is not a functioning
              page on our site
            </p>
          </div>
          <div className="mt-6 space-y-6 ">
            <div className="rounded-md shadow-xs space-y-4">
              <Link
                href={"/"}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent
                text-sm rounded-md text-white bg-tech_orange/80 hover:bg-tech_orange font-semibold focous:outline-hidden
                focus:ring-2 focus:ring-offset-2 focus:ring-black hoverEffect"
              >
                Go to Artcy&apos;s homepage
              </Link>
              <Link
                href={"/help"}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300
                text-sm font-semibold rounded-md text-amazonBlue bg-white hover:bg-gray-50 focous:outline-hidden
                focus:ring-2 focus:ring-offset-2 focus:ring-amazoneBlue"
              >
                Help
              </Link>
            </div>
          </div>
          <div className="my-8 text-center">
            <p className="text-sm text-gray-600">
              Need help? visit the{" "}
              <Link
                href="/help"
                className="font-medium text-amzone-blue hover:text-amazone-blue-dark"
              >
                help section
              </Link>{" "}
              or{" "}
              <Link
                href="/contact"
                className="font-medium text-amzone-blue hover:text-amazone-blue-dark"
              >
                contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
