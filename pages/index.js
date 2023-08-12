import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import ProductDetails from "./Product/[slug]";
import { useEffect, useState } from "react";
import { fetchdatafromapi } from "@/utils/api";

export default function Home({products}) {
  //data fetching
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   const { data } = await fetchdatafromapi("/api/products");
  //   setData(data);
  // };

  return (
    <main>
      <HeroBanner />
      {/* <h1>{products?.data?.[0]?.attributes?.name}</h1> */}
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            MAKING A MASTERPIECE
          </div>
          <div className="text-md md:text-xl">
            Produced on the Tottori Prefecture coast in Japan, this premium line
            shoe then ships to Osaka where the tireless, hand customisation
            process begins. It’s here that craftsmen’s hands spin the timeless
            beauty, soon to be appreciated the whole world over. Born in 1949,
            the history of Onitsuka Tiger is the history of athletic shoes - and
            the story of Japan’s sporting culture. Open the very latest chapter,
            with the Nippon Made.
          </div>
        </div>

        <div className="grid grid-cols-1 md:geid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product)=>(
            <ProductCard key={product?.id} data={product}/>
          ))}
           {/* <ProductCard /> 
           <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />  */}

        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps(){
  const products = await fetchdatafromapi("/api/products?populate=*");

  return {
    props:{products}
  }
}


