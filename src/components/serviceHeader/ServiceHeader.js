import React from "react";
import "./ServiceHeader.css";

const ServiceHeader = (props) => {
  return (
    <section className="background-main-color">
      <div className="row service-header-main">
        <div className="col-1 offset-1 service-header-main-number">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1677867835/WASISCO/serviceHeader/Ellipse_22_1_xc66or.png"
            alt="white-eclipse"
          />
          <div>{props.headerNumber}</div>
          
        </div>
        <div className="col-3 service-header-main-content">{props.header}</div>
        <div className="col-8"></div>
      </div>
    </section>
  );
};

export default ServiceHeader;
