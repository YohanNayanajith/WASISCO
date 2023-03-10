import React, { useEffect, useRef, useState } from "react";
import Sample from "./threeJs/Sample";
import MainSection from "./mainSection/MainSection";
import VideoPlayer from "./videoPlayer/VideoPlayer";
import Gallery from "./gallery/Gallery";
import Footer from "./footer/Footer";
import GetInTouch from "./getInTouch/GetInTouch";
import NameCarousel from "./nameCarousel/NameCarousel";
import SecondSection from "./secondSection/SecondSection";
import ServiceHeaderLeft from "./serviceHeaderLeft/ServiceHeaderLeft";
import ServiceHeaderRight from "./serviceHeaderRight/ServiceHeaderRight";
import CardCarousel from "./cardCarousel/CardCarousel";
import RecentWorks from "./recentWorks/RecentWorks";
import FindMoreButton from "./findMoreButton/FindMoreButton";
import HandShake from "./handShake/HandShake";
import About from "./about/About";
import OurTeam from "./ourTeam/OurTeam";
import ContactTitleCarousel from "./contactTitleCarousel.js/ContactTitleCarousel";
import ServiceSecondSection from "./serviceSecondSection/ServiceSecondSection";
import MainSectionHeader from "./mainSectionHeader/MainSectionHeader";
import "./mouseEffect/mouseEffect.css";
import MouseTail from "./mouseTail/MouseTail";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gradientColor, setGradientColor] = useState("red");

  const scrollToDiv = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  const mainSection = useRef();
  const videoPlayer = useRef();
  const timeline = useRef();
  const praposalSubmission = useRef();
  const whatTheySay = useRef();
  const sponsers = useRef();
  const prices = useRef();
  const contact = useRef();
  const secondSection = useRef();

  const getInTouch = useRef();
  const footer = useRef();

  //pop-up

  // const el2 = useRef();

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const [openSuccess, setOpenSuccess] = React.useState(false);
  // const handleOpenSuccess = () => setOpenSuccess(true);
  // const handleCloseSuccess = () => setOpenSuccess(false);

  // useEffect(()=>{
  //   window.addEventListener("mousemove", function (e) {
  //     var to_append = document.getElementsByClassName('loader-container')[0];
  //     var all = document.getElementsByClassName('loader-container');

  //     var parent_div = document.createElement('div');
  //     parent_div.className = "loader-container";
  //     var inner_div = document.createElement('div');
  //     inner_div.className = "loader";
  //     parent_div.appendChild(inner_div)
  //     var d = document.body.appendChild(parent_div);

  //     parent_div.style.left = (e.clientX - 50)+'px';
  //     parent_div.style.top = (e.clientY - 50)+'px';

  //     if(document.getElementsByClassName('loader-container').length > 50) {
  //       document.body.removeChild(to_append)
  //     }
  //   });
  // },[]);

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setMousePosition({ x: event.clientX, y: event.clientY });
  //   };

  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const maxScrollY = document.body.scrollHeight - window.innerHeight;
  //     const percent = scrollY / maxScrollY;
  //     const hue = percent * 360;
  //     setGradientColor(`hsl(${hue}, 100%, 50%)`);
  //   };

  //   document.addEventListener("mousemove", handleMouseMove);
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const mouseEffectFunction = (e) => {
    // window.addEventListener("mousemove", function (e) {
    var to_append = document.getElementsByClassName("loader-container")[0];
    var all = document.getElementsByClassName("loader-container");

    var parent_div = document.createElement("div");
    parent_div.className = "loader-container";
    var inner_div = document.createElement("div");
    inner_div.className = "loader";
    parent_div.appendChild(inner_div);
    var d = document.body.appendChild(parent_div);

    parent_div.style.left = e.clientX - 50 + "px";
    parent_div.style.top = e.clientY - 50 + "px";

    if (document.getElementsByClassName("loader-container").length > 50) {
      document.body.removeChild(to_append);
    }
    // });
  };

  return (
    <div
    // className="mouse-tail"
    // style={{
    //   left: mousePosition.x,
    //   top: mousePosition.y,
    //   background: `radial-gradient(circle, ${gradientColor} 0%, transparent 70%)`,
    // }}
    >
      <MainSection
        reference={mainSection}
        mainSectionClick={() => scrollToDiv(mainSection)}
        videoPlayerClick={() => scrollToDiv(videoPlayer)}
        timelineClick={() => scrollToDiv(timeline)}
        praposalSubmissionClick={() => scrollToDiv(praposalSubmission)}
        whatTheySayClick={() => scrollToDiv(whatTheySay)}
        sponsersClick={() => scrollToDiv(sponsers)}
        pricesClick={() => scrollToDiv(prices)}
        contactClick={() => scrollToDiv(contact)}
      />
      {/* <Sample /> */}
      {/* <MainSectionHeader /> */}
      {/* <VideoPlayer reference={videoPlayer} /> */}

      {/* <Gallery reference={contact}/> */}

      {/* Services */}

      {/* Get In Touch */}
      {/* <GetInTouch reference={getInTouch}/> */}

      {/* <NameCarousel active={true} /> */}

      {/* <Sample /> */}

      <SecondSection reference={secondSection} active={true} />

      <ServiceHeaderLeft header={"SERVICES"} headerNumber={"01"} />
      <Gallery />
      <ServiceSecondSection />
      <CardCarousel />
      <ServiceHeaderRight header={"RECENT WORKS"} headerNumber={"02"} />
      <RecentWorks />
      <FindMoreButton />
      <NameCarousel active={true} />
      <HandShake />
      <ServiceHeaderLeft header={"BLOGS"} headerNumber={"03"} />
      <ServiceHeaderRight header={"ABOUT"} headerNumber={"04"} />
      <About />
      <OurTeam />
      <SecondSection reference={secondSection} active={false} />
      <ServiceHeaderLeft header={"CONTACT"} headerNumber={"05"} />
      <ContactTitleCarousel />
      <GetInTouch />

      {/* Footer */}
      <Footer reference={footer} />
      {/* <MouseTail /> */}
    </div>
  );
};

export default Home;
