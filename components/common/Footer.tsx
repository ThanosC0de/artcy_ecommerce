import React from "react";
import FooterTop from "./FooterTop";
import Container from "./Container";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Container className="bg-tech_white border-t">
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 g-8">
          <div className="space-y-4">
            <Logo className="w-40 mb-4" />
            <p className="text-tech_light_color text-sm">
              Discover Curates Product Collection at Artcy, Blending style and
              come to elevate your style.
            </p>
            <SocialMedia
              className="text-tech_dark_color/60"
              iconClassName="border-tach_dark_color/60 hover:text-tech_orange 
              hover:text-tech_orange"
              tooltipClassName="bg-tach_dark_color text-white"
            />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="text-gray-600 hover:text-tech_orange 
                  text-sm font-medium hoverEffect"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-3">
              {categoriesData.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="text-gray-600 hover:text-tech_orange text-sm 
                  font-medium hoverEffect"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 text-sm">
              Subscribe to our newsletter to recevie updates and exclusive
              offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 
              rounded-md focus:ring focus:ring-tech_orange"
              />
              <button
                type="submit"
                className="w-full bg-gray-900
               text-white py-2 rounded-md hover:bg-gray-800 transition-colors "
              >Subcribe</button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
