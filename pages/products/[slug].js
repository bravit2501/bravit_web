import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import FooterLine from "../../Components/Footer/FooterLine";
import Navbar from "../../Components/Navbar/Navbar";
import ProductDetail from "../../Components/OurProducts/ProductDetail";
import { client } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ products, product }) => {
  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <>
      <Navbar />
      <ProductDetail
        product={product}
        products={products}
        decQty={decQty}
        incQty={incQty}
        qty={qty}
        onAdd={onAdd}
      />
      <Footer />
      <FooterLine />
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
