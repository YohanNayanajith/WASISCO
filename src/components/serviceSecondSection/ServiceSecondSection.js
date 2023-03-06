import React from "react";
import "./serviceSecondSection.css";
import SecondSection from "../secondSection/SecondSection";

const ServiceSecondSection = () => {
  return (
    <section className="background-main-color">
      <div className="service-second-section-container">
        <div className="service-second-section-container">
          We believe that the power of design, creativity, and emotion helps
          large and middle businesses to involve people in their products and
          services, multiplying their consumer characteristics
        </div>
        <div className="service-second-section-arrow-image">
          <SecondSection active={false} />
        </div>
      </div>
    </section>
  );
};

export default ServiceSecondSection;
