import React from "react";
import "./menu.scss";

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={showMenu ? "menu active" : "menu"}>
      <ul>
        <li onClick={() => setShowMenu(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <a href="#works">Skills & Tools</a>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setShowMenu(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
