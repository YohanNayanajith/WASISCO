import React from "react";
import "../Common.css";
import "./SecondSection.css";

const SecondSection = ({ reference }) => {
  return (
    <section ref={reference} className="background-main-color">
      <div className="container second-section-header">
        <div className="justify-content-center second-section-container-second">
          Every project made by wasisco team is created at the intersection
          between design and technology, making the future — today
        </div>
      </div>
      <div className="container second-section-container">
        <div className="col-12 col-sm-3 align-items-center second-section-container-image">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1677783910/WASISCO/secondSection/ellipseWithArrow_xhqwkl.png"
            alt="Eclipse"
          />
        </div>
        <div className="col-12 offset-sm-1 col-sm-8">
          <div className="row justify-content-center second-section-container-content">
            <div className="row second-section-second-container-second-content">
              With a background in design, We work closely with design focused
              teams to build websites and micro-sites for companies and
              individuals. we have years of experience working and collaborating
              on freelance works and managing all kind of projects.
            </div>
            <div className="row">
              With our experience in Product Designing, we solve product
              problems and build appealing usable web experiences.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
