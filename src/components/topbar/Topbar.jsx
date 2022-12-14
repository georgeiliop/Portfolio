import React from "react";
import "./topbar.scss";
import logoDark from "../../images/Giliop_3_b.png";
import logoLight from "../../images/Giliop_3_w.png";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Topbar = ({ showMenu, setShowMenu }) => {
  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className={showMenu ? "topbar active" : "topbar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro">
            <img
              src={showMenu ? logoLight : logoDark}
              alt="logo"
              className="logo"
            />
          </a>
          <div className="itemContainer">
            <LocalPhoneIcon className="icon" />
            <span>6907067881</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>giliopp@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/georgeiliop">
              <GitHubIcon className="icon git" />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/giorgos-iliopoulos-389704193/">
              <LinkedInIcon className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="burgerMenu" onClick={handleClick}>
            <span className="Line1"></span>
            <span className="Line2"></span>
            <span className="Line2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
