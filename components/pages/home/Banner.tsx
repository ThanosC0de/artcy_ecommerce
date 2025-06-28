import Container from '@/components/common/Container'
import { Carousel, CarouselContent } from '@/components/ui/carousel'
import React from 'react'

const Banner = () => {
  return (
    <Container className='grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-5'>
        <div className='w-full lg:col-span-3'>
            <Carousel>
                <CarouselContent>
                    
                </CarouselContent>
            </Carousel>
        </div>
    </Container>
  )
}

export default Banner