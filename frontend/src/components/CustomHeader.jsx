import React from "react";
import backImage from "../images/bg-01.jpg";
const CustomHeader = (props) => {
  return (
    <div>
      <section
        className="bg-img1 txt-center p-lr-15 p-tb-92"
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <h2 className="ltext-105 cl0 txt-center">{props.name}</h2>
      </section>
    </div>
  );
};

export default CustomHeader;
