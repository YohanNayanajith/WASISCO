import React from "react";
import Marquee from "react-fast-marquee";
import GalleryCardComponent from "./GalleryCardComponent";
import { imageData } from "../../data/imagesData";
import "./Gallery.css";

const Gallery = ({ reference }) => {
  return (
    <section ref={reference} className="background-main-color">
      <div className="gallery-container">
        <div>
          <Marquee
            gradient={false}
            speed={100}
            pauseOnHover={false}
            pauseOnClick={false}
            delay={0}
            play={true}
            direction="left"
            loop={0}
            // gradientColor={[25, 255, 25]}
          >
            {imageData.map((image, index) => {
              return <GalleryCardComponent index={index} image={image} />;
            })}
          </Marquee>
        </div>

        <div className="gallery-card-component-content">
          UX Strategy <br />
          UI Design <br />
          Development <br />
          Communication
        </div>
      </div>
    </section>
  );
};

export default Gallery;
