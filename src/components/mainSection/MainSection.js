import React, { useRef, useState } from "react";
import "./MainSection.css";
import Typewriter from "typewriter-effect";
import NavBar from "../navbar/Navbar";
import Logo from "../../images/logo/wasisco.png";
import MainSectionHeader from "../mainSectionHeader/MainSectionHeader";

const MainSection = ({
  reference,
  mainSectionClick,
  wasiscoImageSectionClick,
  timelineClick,
  praposalSubmissionClick,
  whatTheySayClick,
  sponsersClick,
  pricesClick,
  contactClick,
}) => {
  const [display, setdisplay] = useState(false);

  const displayNavBar = () => {
    if (window.scrollY > 0) {
      setdisplay(true);
    } else if (window.scrollY <= 0) {
      setdisplay(false);
    }
  };

  window.addEventListener("scroll", displayNavBar);

  return (
    <div ref={reference}>
      <div className="main-section-cnt">
        <NavBar
          mainSectionClick={mainSectionClick}
          wasiscoImageSectionClick={wasiscoImageSectionClick}
          timelineClick={timelineClick}
          praposalSubmissionClick={praposalSubmissionClick}
          whatTheySayClick={whatTheySayClick}
          sponsersClick={sponsersClick}
          pricesClick={pricesClick}
          display={display}
          contactClick={contactClick}
        />
        {/* <div className="main-section-content">
          <div className="clock-cnt">
            <div className="clock-text">
              <Typewriter
                options={{ autoStart: true, loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("WASISCO Site Coming Soon . . . ")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
              />
            </div>
            <Clock />
          </div>
        </div> */}
        <MainSectionHeader />
      </div>
    </div>
  );
};

export default MainSection;
