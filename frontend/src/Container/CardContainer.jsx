import React from "react";
import product_16 from "../images/product-16.jpg";
import ProductItem from "../components/ProductItem";

const CardContainer = () => {
  return (
    <section className="bg0 p-t-23 p-b-130">
      <div className="container">
        <div className="row isotope-grid">
          <ProductItem image={product_16} name={"Jeans"} price="35" />
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
