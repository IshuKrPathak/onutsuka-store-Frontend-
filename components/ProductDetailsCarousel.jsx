import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
        <Carousel
        infiniteLoop = {true}
        showIndicators = {false}
        thumbWidth={60}
        className='productCarousel'
        >
            <img src="/4.webp" />
            <img src="/4.1.webp" />
            <img src="/4.2.webp" />
            <img src="/4.3.webp" />
            <img src="/4.4.webp" />
            <img src="/4.5.webp" />
          

        </Carousel>

    </div>
  )
}

export default ProductDetailsCarousel