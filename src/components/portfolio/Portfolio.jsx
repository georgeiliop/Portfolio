import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolio list/PortfolioList";
import { webPortfolio, otherPortfolio } from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("1");
  const [data, setData] = useState([]);
  const list = [
    { id: "1", title: "Web Apps" },
    { id: "2", title: "Other Apps" },
  ];

  useEffect(() => {
    switch (selected) {
      case "1":
        setData(webPortfolio);
        break;
      case "2":
        setData(otherPortfolio);
        break;
      default:
        setData(webPortfolio);
        break;
    }
    console.log(selected);
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} key={d.id}>
            <div className="item">
              <img src={d.img} alt="portfolio project image" />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
