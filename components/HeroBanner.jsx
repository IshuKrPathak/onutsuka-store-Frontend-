import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";
const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto ">
      <Carousel>
        <div>
          <img src="/1.webp" className="aspect-[16/10] md:aspect-[27/10] object-contain"/>
          <div className="px-[15px] md:px-[40px] py-[10px]md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black
          /[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"> Shop Now 
          </div>
          </div>

          <div>
          <img src="/2.webp" className="aspect-[16/10] md:aspect-[27/10] object-contain"/>
          <div className="px-[15px] md:px-[40px] py-[10px]md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black
          /[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"> Shop Now 
          </div>
          </div>

          <div>
          <img src="/3.jpg" className="aspect-[16/10] md:aspect-[27/10] object-contain"/>
          <div className="px-[15px] md:px-[40px] py-[10px]md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black
          /[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"> Shop Now 
          </div>
          </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
