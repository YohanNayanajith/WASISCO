import React from 'react'
import Marquee from "react-fast-marquee";
import CardCarouselComponent from './CardCarouselComponent';

const CardCarousel = () => {
  return (
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
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
        <CardCarouselComponent header={"PROJECTS"} number={"2600+"} />
      </Marquee>
    </div>
  )
}

export default CardCarousel