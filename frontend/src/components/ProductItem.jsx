// ProductList.js

import React from "react";
import product_16 from "../images/product-16.jpg";
import icon from "../images/icons/icon-heart-01.png";
const ProductItem = () => {
  return (
    <section className="bg0 p-t-23 p-b-130">
      <div className="container">
        <div className="row isotope-grid">
          <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
            <div className="block2">
              <div className="block2-pic hov-img0">
                <img src={product_16} alt="IMG-PRODUCT" />

                <a
                  href="img/image01.html"
                  className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                >
                  Quick View
                </a>
              </div>

              <div className="block2-txt flex-w flex-t p-t-14">
                <div className="block2-txt-child1 flex-col-l ">
                  <a
                    href="product-detail.html"
                    className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                  >
                    Square Neck Back
                  </a>

                  <span className="stext-105 cl3">$29.64</span>
                </div>

                <div className="block2-txt-child2 flex-r p-t-3">
                  <a
                    href="img.html"
                    className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                  >
                    <img
                      className="icon-heart1 dis-block trans-04"
                      src={icon}
                      alt="ICON"
                    />
                    <img
                      className="icon-heart2 dis-block trans-04 ab-t-l"
                      src="images/icons/icon-heart-02.png"
                      alt="ICON"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-c-m flex-w w-full p-t-38">
          <a
            href="#"
            className="flex-c-m how-pagination1 trans-04 m-all-7 active-pagination1"
          >
            1
          </a>

          <a href="#" className="flex-c-m how-pagination1 trans-04 m-all-7">
            2
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
