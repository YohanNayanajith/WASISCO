import React from "react";
import Marquee from "react-fast-marquee";
import { contactHeaderData } from "../../data/nameData";
import './ContactTitleCarousel.css' 

const ContactTitleCarousel = () => {
  return (
    <section className="background-main-color">
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
        {contactHeaderData.map((title, id) => (
          <h1 key={id} className="contact-title-carousel">
            &nbsp;{"— " + title}&nbsp;
          </h1>
        ))}
      </Marquee>
    </section>
  );
};

export default ContactTitleCarousel;
