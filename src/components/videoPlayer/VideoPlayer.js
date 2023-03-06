import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";
import NameCarousel from "../nameCarousel/NameCarousel";

const VideoPlayer = ({ reference }) => {
  return (
    <section ref={reference} className="background-main-color-with-height">
      <div className="video-player-container">
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            volume={0}
            muted={true}
            playbackRate={2}
            onReady={() => {
              return true;
            }}
            height={"80vh"}
            width={"80vw"}
            // light={true}
          />
        </div>
        <div className="video-player-name-carousel">
          <NameCarousel active={false} />
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
