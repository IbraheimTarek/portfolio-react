import React from "react";

import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import "./experience.css";

const Experience = (props) => {
  return (
    <div className="experience-container">
      <Helmet>
        <title>Hima</title>
      </Helmet>
      <div className="experience-experience">
        <Navbar />
        <img
          src="/external/ellipse25416-gqqh-1500h.png"
          alt="Ellipse25416"
          className="experience-ellipse2"
        />
        <div className="experience-headers">
          <span className="experience-text10 Subtitledesktop">
            <span>Experience</span>
          </span>
        </div>
        <div className="experience-slider">
          <div className="experience-excard">
            <div className="experience-frame6">
              <img
                src="/external/mentorness1i592-8dn-200h.png"
                alt="mentorness1I592"
                className="experience-mentorness1"
              />
            </div>
            <div className="experience-frame3">
              <span className="experience-text12 Headerfontdesktop">
                <span>Ahmedabad, India</span>
              </span>
            </div>
            <div className="experience-frame4">
              <span className="experience-text14 Headerfontdesktop">
                <span>Machine learning internship.</span>
              </span>
            </div>
          </div>
          <div className="experience-excard1">
            <div className="experience-frame7">
              <img
                src="/external/theheadstarterlogo1i592-73zc-200h.png"
                alt="theheadstarterlogo1I592"
                className="experience-theheadstarterlogo1"
              />
            </div>
            <div className="experience-frame31">
              <span className="experience-text16 Headerfontdesktop">
                <span>Long Island City, NY, USA</span>
              </span>
            </div>
            <div className="experience-frame41">
              <span className="experience-text18 Headerfontdesktop">
                <span>Software engineering fellow</span>
              </span>
            </div>
          </div>
        </div>
        <img
          src="/external/illustrationanimal6251-3ske.svg"
          alt="IllustrationAnimal6251"
          className="experience-illustration-animal"
        />
      </div>
    </div>
  );
};

export default Experience;
