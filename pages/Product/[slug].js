import React from "react";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProduct from "@/components/RelatedProduct";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>

          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">
              {" "}
              Street Fighter 6
            </div>

            <div className="text-lg font-semibold mb-5">ENDACTUS</div>

            <div className="text-lg font-semibold">MRP : 10 000.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of all taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also Includes all applicable duties)`}
            </div>

            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center  py-3 font-medium  hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center  py-3 font-medium  hover:border-black cursor-pointer">
                  UK 6.5
                </div>
                <div className="border rounded-md text-center  py-3 font-medium  hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center  py-3 font-medium  hover:border-black cursor-pointer">
                  UK 7.5
                </div>
                <div className="border rounded-md text-center  py-3 font-medium  hover:border-black cursor-pointer">
                  UK{" "}
                </div>
                <div className="border rounded-md text-center py-3 font-medium  hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium  hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium  hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium  hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
              </div>
              <div className="text-red-600 mt-1">
                Size Selection is required
              </div>
            </div>

            {/* cart button */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* cart button end  */}

            {/* whishlist button  */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium  transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist <IoMdHeartEmpty />
            </button>
            {/* whishlist button end */}
           <div>
           <div className="text-lg font-bold mb-5">
              Product Details
            </div>
            <div className="text-md mb-5">
            Brand collaboration shoes commemorating the launch of Street Fighter 6. This special pair of shoes bears an Onitsuka Tiger logo on the left heel and a Street Fighter logo on the right heel. Rugged-looking sole with outsoles separated, square-shaped toe, and the iconic Onitsuka Tiger stripes expressed in the stitching. You’ll enjoy the various details throughout. *These shoes also appear as an item in the Street Fighter 6 game. - Textile and leather upper - Brand collaboration logos on heels - FLYTEFOAM™ in the mid-sole for superior lightweight and cushioning - Rubber for superior grip on heel section of outsole - Shock-absorbing fuzeGEL™ in heel section of sole - Spare laces included - Onitsuka Tiger logo and Street Fighter logo on sockliner - OrthoLite™ X-40 sockliner for superior resilience and comfort wearing - Special brand collaboration shoe box - Made in Vietnam Style No.: 1183B744.020/750 
            </div>
            <div className="text-md mb-5">
            Street Fighter 6 "Street Fighter 6" is the latest entry in the world-class fighting game franchise from Japan, scheduled for release on June 2 2023. It features new fighters alongside the familiar faces of Ryu and Chun-Li, and adds new "World Tour" and "Battle Hub" game modes to its ever-evolving hand-to-hand combat mode, for enjoyment by beginners and experienced gamers alike. It also incorporates new features, like the more intuitive "modern" control scheme and a real-time commentary system that brings any match to life.
Style #: 1183B744.750
UPC #: 197298026697
            </div>
           </div>
          </div>
        </div>
        <RelatedProduct />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
