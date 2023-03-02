import React from "react";
import "../Common.css";
import "./SecondSection.css";

const SecondSection = ({ reference }) => {
  return (
    <section ref={reference} className="background-main-color">
      <div className="second-section-header">
        <div className="second-section-container-first">
          {/* Every project made by wasisco team is created at the intersection */}
        </div>
        <div className="second-section-container-second">
          Every project made by wasisco team is created at the intersection
          between design and technology, making the future — today
        </div>
        <div className="second-section-container-third">
          {/* Every project made by wasisco team is created at the intersection */}
        </div>
      </div>
      <div className="second-section-container">
        <div className="second-section-container-first">
          {/* Every project made by wasisco team is created at the intersection */}
        </div>
        <div className="second-section-second-container-first">
          <img src="https://res.cloudinary.com/midefulness/image/upload/v1677783910/WASISCO/secondSection/ellipseWithArrow_xhqwkl.png" alt="Eclipse" />
        </div>
        <div className="second-section-second-container-second">
          <div className="second-section-second-container-second-content">
            With a background in design, We work closely with design focused
            teams to build websites and micro-sites for companies and
            individuals. we have years of experience working and collaborating
            on freelance works and managing all kind of projects.
          </div>
          <div className="second-section-second-container-second-content">
            With our experience in Product Designing, we solve product problems
            and build appealing usable web experiences.
          </div>
          <div className="second-section-second-container-second-line"></div>
        </div>
        <div className="second-section-container-third">
          {/* Every project made by wasisco team is created at the intersection */}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
