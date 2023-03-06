import React from "react";
import Marquee from "react-fast-marquee";
import CardCarouselComponent from "./CardCarouselComponent";

const CardCarousel = () => {
  return (
    <div>
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        pauseOnClick={false}
        delay={0}
        play={true}
        direction="left"
        loop={0}
        // gradientColor={[25, 255, 25]}
      >
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"CLIENTS"} number={"2600+"} />
        <CardCarouselComponent header={"EXP"} number={"10+ Years"} />
        <CardCarouselComponent header={"RATE"} number={"5.0(1244)"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"CLIENTS"} number={"2600+"} />
        <CardCarouselComponent header={"EXP"} number={"10+ Years"} />
        <CardCarouselComponent header={"RATE"} number={"5.0(1244)"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"CLIENTS"} number={"2600+"} />
        <CardCarouselComponent header={"EXP"} number={"10+ Years"} />
        <CardCarouselComponent header={"RATE"} number={"5.0(1244)"} />
      </Marquee>
    </div>
  );
};

export default CardCarousel;
