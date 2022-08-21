import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import React from "react";
import "./works.scss";
import { useState } from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import codeImg from "../../images/codeImg.png";
import gitImg from "../../images/gitImg.png";
import designImg from "../../images/designImg.png";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: <CodeIcon className="slideIcon" />,
      title: "React.js",
      desc: "Focusing on writing clean code using React.js",
      img: codeImg,
    },
    {
      id: "2",
      icon: <GitHubIcon className="slideIcon" />,
      title: "Version Control",
      desc: "Experienced with version control systems such as Git and Plastic SCM",
      img: gitImg,
    },
    {
      id: "3",
      icon: <DesignServicesIcon className="slideIcon" />,
      title: "Design",
      desc: "An eye for design, UX and UI",
      img: designImg,
    },
  ];

  const handleClick = (dir) => {
    dir === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  {d.icon}
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <NavigateBefore
        className="navArrow left"
        onClick={() => handleClick("left")}
      />
      <NavigateNext className="navArrow right" onClick={() => handleClick()} />
    </div>
  );
};

export default Works;
