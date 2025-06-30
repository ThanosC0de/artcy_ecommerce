import Container from "@/components/common/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";
import { getBanner } from "@/sanity/queries";
import Image from "next/image";

import React from "react";

const Banner = async () => {
  const banner = await getBanner();
  console.log(banner);

  return (
    <Container className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-5">
      <div className="w-full lg:col-span-3">
        <Carousel className="relative w-full rounded-md oveerflow-hidden">
          <CarouselContent>
            {banner?.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9]"> 
                {item?.image && (
                    <Image
                      src={urlFor(item?.image).url()}
                      alt={`Banner ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <CarouselPrevious/>
            <CarouselNext/>
          </div>
        </Carousel>
      </div>
    </Container>

  );
};

export default Banner;
