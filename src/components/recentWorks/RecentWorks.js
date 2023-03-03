import React from "react";
import "./RecentWorks.css";

const RecentWorks = () => {
  return (
    <section className="background-main-color">
      <div className="recent-work-container">
        <div className="recent-work-left">
          <div className="recent-work-left-image">
            <img
              src="https://res.cloudinary.com/midefulness/image/upload/v1677872925/WASISCO/recentWork/Rectangle_6_m52vhl.png"
              alt="recent-work"
            />
          </div>
        </div>
        <div className="recent-work-right">
          <div className="recent-work-right-header">MESSANGER FOR ZASTA</div>
          <div className="recent-work-right-content">
            I’m With a background in design, I work closely with design focused
            teams to build websites and microsites for
          </div>
          <div className="recent-work-tag">
            <div className="recent-work-tag-tag1">Mobile App</div>
            <div className="recent-work-tag-tag1">Mobile App</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
