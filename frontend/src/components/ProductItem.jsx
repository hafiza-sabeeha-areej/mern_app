import React from "react";

const ProductItem = () => {
  return (
    <div className="product-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 text-center">
            <div className="single-product-item">
              <div className="product-image">
                <a href="single-product.html">
                  <img src="../ssets/img/products/product-img-1.jpg" alt="" />
                </a>
              </div>
              <h3>Strawberry</h3>
              <p className="product-price">
                <span>Per Kg</span> 85$
              </p>
              <a href="cart.html" className="cart-btn">
                <i className="fas fa-shopping-cart"></i> Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
