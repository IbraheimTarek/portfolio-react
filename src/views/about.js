import React from "react";

import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import "./about.css";

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="about-about">
        <Navbar />
        <img
          src="/external/ellipse24814-s53-1500h.png"
          alt="Ellipse24814"
          className="about-ellipse2"
        />
        <div className="about-about1">
          <div className="about-frame1">
            <span className="about-text10 Subtitledesktop">
              <span>About me</span>
            </span>
          </div>
          <div className="about-frame2">
            <span className="about-text12 Paragraphfontdesktop">
              <span>
                Born in 2002, I was raised in Sharqia in a small village called
                Shibatqash. I then moved to Cairo for a better education in a
                private school. Two years later, my family and I moved to Giza,
                where I finished my secondary school education with a 98.7%
                grade. I then went to Cairo University to study computer
                engineering in the Faculty of Engineering, where I achieved a
                very good cumulative grade.
              </span>
              <br></br>
              <span>
                My main focus now is to become a better machine learning
                engineer.
              </span>
            </span>
          </div>
        </div>
        <div className="about-illustration-bored">
          <img
            src="/external/combinedshape5414-n968.svg"
            alt="CombinedShape5414"
            className="about-combined-shape"
          />
          <img
            src="/external/combinedshape5415-7ucv.svg"
            alt="CombinedShape5415"
            className="about-combined-shape1"
          />
          <img
            src="/external/combinedshape5415-3p4m.svg"
            alt="CombinedShape5415"
            className="about-combined-shape2"
          />
          <img
            src="/external/path5415-jm5h.svg"
            alt="Path5415"
            className="about-path"
          />
          <img
            src="/external/path5415-y9y.svg"
            alt="Path5415"
            className="about-path1"
          />
          <img
            src="/external/path5415-2qa.svg"
            alt="Path5415"
            className="about-path2"
          />
          <img
            src="/external/path5415-73mx.svg"
            alt="Path5415"
            className="about-path3"
          />
          <img
            src="/external/path5415-may1.svg"
            alt="Path5415"
            className="about-path4"
          />
          <img
            src="/external/path5415-u9p.svg"
            alt="Path5415"
            className="about-path5"
          />
          <img
            src="/external/path5415-feqk.svg"
            alt="Path5415"
            className="about-path6"
          />
          <img
            src="/external/path5415-g0d.svg"
            alt="Path5415"
            className="about-path7"
          />
          <img
            src="/external/shape5416-hcii.svg"
            alt="Shape5416"
            className="about-shape"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
