import React from "react";
import "./testimonials.scss";
import lola from "../../images/lola.jpg";
import mom from "../../images/mom.jpg";
import jake from "../../images/jake.jpg";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Mom",
      title: "My mom",
      img: mom,
      desc: "He is absolutely amazing, I knew he was talented the moment I saw him",
    },
    {
      id: 2,
      name: "Lola",
      title: "Friend",
      img: lola,
      desc: "Oh my god, are you kidding me? I heard he has a phone service business and he's NOT getting paid",
      featured: true,
    },
    {
      id: 3,
      name: "Jake",
      title: "Friend (joking, I don't have any)",
      img: jake,
      icon: "assets/linkedin.png",
      desc: "He made my pillow dating website, Lola was not happy",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img src={d.img} alt="userPic" className="user" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
