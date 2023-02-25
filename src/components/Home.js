import React, { useRef } from "react";
import Sample from "./threeJs/Sample";
import MainSection from "./mainSection/MainSection";
import WasiscoImageSection from "./wasiscoImageSection/WasiscoImageSection";
import Gallery from "./gallery/Gallery";

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
      <WasiscoImageSection reference={wasiscoImageSection}/>
      <Gallery reference={contact}/>
    </div>
  );
};

export default Home;
