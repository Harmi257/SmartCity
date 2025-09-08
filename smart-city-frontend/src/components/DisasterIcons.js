// src/components/DisasterIcons.js
import React from "react";
import "./DisasterIcons.css";

const icons = [
  { name: "Heavy Rain", route: "/disaster/heavy-rain", img: "icon1.png" },
  { name: "Tsunami", route: "/disaster/tsunami", img: "icon2.png" },
  { name: "Earthquake", route: "/disaster/earthquake", img: "icon3.png" },
  { name: "Local Govt DM Plans", route: "/disaster/govt-plans", img: "icon4.png" },
  { name: "Fisherman Advices", route: "/disaster/fisherman-advice", img: "icon5.png" }, // NEW ENTRY
];

const DisasterIcons = () => {
  return (
    <div className="icon-grid">
      {icons.map((icon, index) => (
        <div key={index} className="icon-card" onClick={() => window.location.href = icon.route}>
          <div className="icon-circle">
            <img src={require(`../assets/${icon.img}`)} alt={icon.name} />
          </div>
          <p>{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DisasterIcons;
