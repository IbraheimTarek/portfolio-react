import React from "react";

import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import "./projects.css";

const Projects = (props) => {
  return (
    <div className="projects-container">
      <Helmet>
        <title>Hima</title>
      </Helmet>
      <Navbar />
      <div className="projects-projects">
        <img
          src="/external/ellipse25931-8d8m-800h.png"
          alt="Ellipse25931"
          className="projects-ellipse2"
        />
        <div className="projects-headers">
          <span className="projects-text10 Subtitledesktop">
            <span>Projects</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
