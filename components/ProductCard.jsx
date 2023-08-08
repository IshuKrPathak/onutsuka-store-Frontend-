import Link from "next/link";
import React from "react";
import Image from "next/image";
const ProductCard = ({data:{attributes: p,id}}) => {
  return (
    <Link href={`/products/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
      {/* <img className="w-full" src="/1.jpg" alt="product image " /> */}
      <Image 
      width={500}
      height={500}
      src={p.thumbnail.data.attributes.url}
      alt={p.Name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium ">{p.name}</h2>
        {/* <h2 className="text-lg font-medium ">Product name </h2> */}
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;{p.Price}</p>

          {p.originalprice && (
            <>
              <p className="text-base font-medium line-through">&#8377;{p.originalprice}</p>
              <p className="ml-auto text-base font-medium text-green-500">
                30%off
              </p>
            </>
          )}
              {/* <p className="mr-2 text-lg font-semibold">INR 10000.00</p>
          <p className="text-base font-medium line-through">INR 20000.00</p>
          <p className="ml-auto text-base font-medium text-green-500">50% off</p> */}

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
