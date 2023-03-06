import React, { useRef } from "react";
import Sample from "./threeJs/Sample";
import MainSection from "./mainSection/MainSection";
import WasiscoImageSection from "./wasiscoImageSection/WasiscoImageSection";
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

const Home = () => {
  const scrollToDiv = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
  const mainSection = useRef();
  const wasiscoImageSection = useRef();
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
  return (
    <div>
      <MainSection
        reference={mainSection}
        mainSectionClick={() => scrollToDiv(mainSection)}
        wasiscoImageSectionClick={() => scrollToDiv(wasiscoImageSection)}
        timelineClick={() => scrollToDiv(timeline)}
        praposalSubmissionClick={() => scrollToDiv(praposalSubmission)}
        whatTheySayClick={() => scrollToDiv(whatTheySay)}
        sponsersClick={() => scrollToDiv(sponsers)}
        pricesClick={() => scrollToDiv(prices)}
        contactClick={() => scrollToDiv(contact)}
      />
      {/* <Sample /> */}
      {/* <WasiscoImageSection reference={wasiscoImageSection}/> */}
      {/* <Gallery reference={contact}/> */}

      {/* Services */}

      {/* Get In Touch */}
      {/* <GetInTouch reference={getInTouch}/> */}

      

      <NameCarousel />

      {/* <Sample /> */}

      <SecondSection reference={secondSection} active={true}/>

      <ServiceHeaderLeft header={"SERVICES"} headerNumber={"01"} />
      <CardCarousel />
      <ServiceHeaderRight header={"RECENT WORKS"} headerNumber={"02"} />
      <RecentWorks />
      <FindMoreButton />
      <NameCarousel />
      <HandShake />
      <ServiceHeaderLeft header={"BLOGS"} headerNumber={"03"} />
      <ServiceHeaderRight header={"ABOUT"} headerNumber={"04"} />
      <About />
      <OurTeam />
      <SecondSection reference={secondSection} active={false}/>
      <ServiceHeaderLeft header={"CONTACT"} headerNumber={"05"} />
      <ContactTitleCarousel />

      {/* Footer */}
      <Footer reference={footer}/>
      
    </div>
  );
};

export default Home;
