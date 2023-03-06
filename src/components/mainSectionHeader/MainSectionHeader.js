import React from "react";
import "./MainSectionHeader.css";

const MainSectionHeader = () => {
  return (
    <section className="background-main-color-with-height">
      <div className="main-section-header-container">
        <div className="main-section-header">
          Advanced Team ®<br/> Digital Design <br/>Boutique with Focus <br/>on Aesthetics
        </div>
        <div className="main-section-header-button">
            <a href="#">Learn More</a>
        </div>
        <div className="main-section-header-description">
          <div className="main-section-header-content">
            With many years of experience in digital product development, we
            understand how to create user-friendly and memorable interfaces for
            the leading world companies. Properly and harmoniously, we integrate
            modern technologies into the classical graphic design aesthetics.
          </div>
          <div className="main-section-header-image">
            <img
              src="https://res.cloudinary.com/midefulness/image/upload/v1678112507/WASISCO/mainSection/image_21_dtqt2l.png"
              alt="ball"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSectionHeader;
