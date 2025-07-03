import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { Blog } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { getLatestBlog } from "@/sanity/queries";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";

const LatestBlog = async () => {
  const blogs = await getLatestBlog();
  console.log(blogs);

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
            className="group rounded-md overflow-hidden border 
            border-tech_light_green/20 
            hover:border-tech_light_green  hoverEffect"
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
            <div className="p-5  ">
              <div className="text-sm flex items-center gap-5">
                <div className="flex items-center relative">
                  {blog?.blogcategories?.map((item, index) => (
                    <p
                      key={index}
                      className="font-semibold text-tech_dark tracking-wide "
                    >
                      {item?.title}
                    </p>
                  ))}
                  <span
                    className="absolute left-0 -bottom-1.5 bg-tech_orange/30 inline-block w-full
                  h-[2px] group-hover:bg-tech_orange hover:cursor-pointer hoverEffect"
                  />
                </div>
                <p className="flex items-center gap-1 text-tech_light_color relative">
                  <Calendar size={15} />
                  {dayjs(blog?.publishedAt).format("MMMM D, YYYY")}
                  <span
                    className="absolute left-0 -bottom-1.5 bg-tech_orange/30 inline-block w-full
                  h-[2px] group-hover:bg-tech_orange hover:cursor-pointer hoverEffect"
                  />
                </p>
              </div>
              <Link href={`/blog/${blog?.slug?.current}`} className="text-base font-bold tracking-wide mt-5
              line-clamp-2 hover:text-tech_orange hoverEffect">{blog?.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default LatestBlog;
