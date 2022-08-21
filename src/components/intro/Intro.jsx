import React from "react";
import "./intro.scss";
import img from "../../images/bg-img-blue.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={img} alt="backgroundImage" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I&apos;m</h2>
          <h1>Giorgos Iliopoulos</h1>
          <h3>Software Engineer</h3>
          <a href="#portfolio">
            <KeyboardArrowDownIcon className="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
