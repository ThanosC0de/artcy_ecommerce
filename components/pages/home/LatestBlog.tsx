import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { Blog } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { getLatestBlog } from "@/sanity/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestBlog = async () => {
  const blogs = await getLatestBlog();
  return (
    <Container className="mt-10 lg:mt-20 bg-tech_white p-5 lg:p-7 rounded-md">
      <div className="flex items-center justify-between gap-5 mb-10">
        <Title>Latest Blog</Title>
        <Link
          href={"/blog"}
          className="text-sm font-semibold tracking-wide hover:text-tech_red"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-3">
        {blogs?.map((blog: Blog) => (
          <div
            key={blog?._id}
            className="group rounded-md overflow-hidden border-shop_light_green/10 
            hover:border-shop_light_green hoverEffect"
          >
            <div className="w-full h-64 overflow-hidden ">
              {blog?.mainImage && (
                <Link href={`/blog/${blog?.slug?.current}`}>
                  <Image
                    src={urlFor(blog?.mainImage).url()}
                    alt="blogImage"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 hoverEffect"
                  />
                </Link>
              )}
            </div>
            <div className="p-5 "  >
              <div>
                <div>
                  {blog?.blogcategories?.map((item,index)=>(
                    <p key={index}>{item?.title }</p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LatestBlog;
