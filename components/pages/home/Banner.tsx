import Container from "@/components/common/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getBanner } from "@/sanity/queries/indext";
import React from "react";

const Banner = async () => {
  const banner = await getBanner();

  return (
    <Container className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-5">
      <div className="w-full lg:col-span-3">
        <Carousel>
          <CarouselContent>
            {banner?.map((item, index) => (
              <CarouselItem key={index}>
                <div>
                  <p>hello</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  );
};

export default Banner;
