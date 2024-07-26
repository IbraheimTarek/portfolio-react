import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar"; 
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-home">
        <Navbar />
        <img
          src="/external/ellipse24814-28xh-1500h.png"
          alt="Ellipse24814"
          className="home-ellipse2"
        />
        <img
          src="/external/ellipse14814-qk2j-400h.png"
          alt="Ellipse14814"
          className="home-ellipse1"
        />
        <div className="home-intro">
          <div className="home-title">
            <span className="home-text10 Subtitledesktop">
              <span>Hey guys!</span>
            </span>
            <span className="home-text12 Subtitledesktop">
              <span>
                This is Ibrahim Tarek
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </span>
          </div>
          <span className="home-text14 Paragraphfontdesktop">
            <span>
              I’m a highly skilled Software and Machine Learning Engineer, MLOps
              specialist, and Data Scientist.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
