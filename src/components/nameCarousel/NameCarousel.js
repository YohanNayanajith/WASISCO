import React from "react";
import Marquee from "react-fast-marquee";
import { namesData } from "../../data/nameData";
import "./NameCarousel.css";

const NameCarousel = ({ active }) => {
  return (
    <div>
      {active ? (
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
            {namesData.map((name, id) => (
              <h1 key={id} className="name-carousel">
                &nbsp;{"— " + name}&nbsp;
              </h1>
            ))}
          </Marquee>
        </section>
      ) : (
        <section>
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
            {namesData.map((name, id) => (
              <h1 key={id} className="name-carousel">
                &nbsp;{"— " + name}&nbsp;
              </h1>
            ))}
          </Marquee>
        </section>
      )}
    </div>
  );
};

export default NameCarousel;
