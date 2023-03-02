import React from "react";
import Marquee from "react-fast-marquee";
import { namesData } from "../../data/nameData";

const NameCarousel = () => {
  return (
    <div>
      <Marquee
        gradient={true}
        speed={100}
        pauseOnHover={false}
        pauseOnClick={false}
        delay={0}
        play={true}
        direction="left"
        loop={0}
        // gradientColor={[25, 255, 25]}
      >
        {/* {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))} */}
                        {/* <div class="node-marquee__el" style="position: absolute; top: 0px; left: 0px; display: inline-block; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 990.5, 0, 0, 1);">&nbsp;Let’s talk — Contact us — </div> */}
        {/* <h1>&nbsp;WASISCO -</h1>
        <h1>&nbsp;WASISCO -</h1>
        <h1>&nbsp;WASISCO -</h1> */}
        {namesData.map((name,id)=>(
          <h1>&nbsp;{"-"+name+"-"}&nbsp;</h1>
        ))}
        {/* <h1>----</h1> */}
      </Marquee>
    </div>
  );
};

export default NameCarousel;
