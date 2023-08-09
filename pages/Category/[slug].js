import React from "react";
import ProductCard from "@/components/ProductCard";

import Wrapper from "@/components/Wrapper";
import { fetchdatafromapi } from "@/utils/api";

const Category = ({ category, product, slug }) => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold">
            {category?.data?.[0]?.attributes?.name}
          </div>
        </div>

        <div className="grid grid-cols-1 md:geid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;

// export async function getStaticPaths() {
//   const category = await fetchdatafromapi("/api/categories?populate=*");

//   const paths = category.data.map((c) => ({
//     params: {
//       slug: c.attributes.slug,
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticPaths() {
  const category = await fetchdatafromapi("/api/categories?populate=*");
  const paths = category?.data?.map((c) => ({
      params: {
          slug: c.attributes.slug,
      },
  }));

  return {
      paths,
      fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const category = await fetchdatafromapi(
      `/api/categories?filters[slug][$eq]=${slug}`
  );
  const products = await fetchdatafromapi(
      `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );

  return {
      props: {
          category,
          products,
          slug,
      },
  };
}