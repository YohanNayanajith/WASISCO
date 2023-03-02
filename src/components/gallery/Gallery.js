import React from "react";
import Marquee from "react-double-marquee";

const Gallery = ({ reference }) => {
  return (
    <section ref={reference}>
      {/* <div className='main-section-cnt'>
            Gallery
        </div> */}
      <div
        style={{
          width: "200px",
          whiteSpace: "nowrap",
        }}
      >
        <Marquee>Some really really really really really long text</Marquee>
      </div>
    </section>
  );
};

export default Gallery;
