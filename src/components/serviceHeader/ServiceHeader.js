import React from "react";
import "./ServiceHeader.css";

const ServiceHeader = (props) => {
  return (
    <section className="background-main-color">
      
      <div className="service-header-main">
      <div className="service-header-offset"></div>
        <div className="service-header-main-number">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1677867835/WASISCO/serviceHeader/Ellipse_22_1_xc66or.png"
            alt="white-eclipse"
          />
          <div>{props.headerNumber}</div>
        </div>
        <div className="service-header-main-content">{props.header}</div>
      </div>
    </section>
  );
};

export default ServiceHeader;
