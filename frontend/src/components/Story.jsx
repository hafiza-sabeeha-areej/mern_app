import React from "react";

const Story = (props) => {
  return (
    <div className="row p-b-148">
      <div className="col-md-7 col-lg-8">
        <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
          <h3 className="mtext-111 cl2 p-b-16">{props.name}</h3>

          <p className="stext-113 cl6 p-b-26">{props.content}</p>
        </div>
      </div>

      <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
        <div className="how-bor1 ">
          <div className="hov-img0">
            <img src={props.image} alt="IMG" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
