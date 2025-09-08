import React from "react";
import { useParams } from "react-router-dom";
import "./DisasterContent.css";

// Content map including the image paths
const contentMap = {
  "heavy-rain": {
    title: "🌧️ Heavy Rain Alerts",
    content: [
      "🔔 Stay indoors and avoid unnecessary travel.",
      "⚡ Disconnect electrical appliances during lightning.",
      "🚫 Avoid low-lying flood-prone areas.",
      "🧰 Keep emergency kits and torches ready.",
      "📱 Follow local government instructions via radio/TV."
    ]
  },
  tsunami: {
    title: "🌊 Tsunami Awareness",
    content: [
      "📢 Move to higher ground immediately after strong coastal shaking.",
      "🚨 Don't wait for official warnings if you see the water receding.",
      "🗺️ Know the evacuation routes near your beach/town.",
      "📱 Subscribe to early warning systems and SMS alerts."
    ]
  },
  earthquake: {
    title: "🌍 Earthquake Safety Tips",
    image: require("../assets/earthquake.png"), // Ensure path is correct
    content: (
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px", backgroundColor: "#000", color: "#fff" }}>
        <thead>
          <tr style={{ backgroundColor: "#333", textAlign: "left" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Attribute</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Magnitude (Preferred)</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>9.2 M (Great)</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Network Magnitude(s)</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>9.2 (M)</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Depth</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>10 km</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Date</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>04 Oct 2011</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Origin Time</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>1830 IST</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Latitude</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>3.3 N</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Longitude</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>95.96 E</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Location</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>NORTHERN SUMATRA, INDONESIA</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Land/Ocean</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Ocean part</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>Water Level Depth (if Ocean)</td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>1309 m</td>
          </tr>
        </tbody>
      </table>
    )
  },
  "govt-plans": {
    title: "🏛️ Local Govt Disaster Management Plans",
    content: [
      "📍 Pre-disaster mock drills and resource mapping",
      "🚑 Emergency shelters and medical units",
      "🚒 Fire stations and flood control centers",
      "🚁 Rescue and relief operation centers",
      "📲 Official helpline: 1077 (District Emergency)"
    ]
  },
  "fisherman-advice": {
    title: "🚤 Fisherman Safety & Tsunami Advisory",
    content: [
      "📡 Stay tuned to INCOIS (Indian National Centre for Ocean Info Services).",
      "🛑 Do NOT venture into the sea during tsunami alerts or cyclonic warnings.",
      "📱 Enable satellite alerts on mobile apps like *Sagar Vani*.",
      "🧭 Carry GPS trackers and signal buoys during deep-sea fishing.",
      "🏖️ Help spread awareness to fellow coastal residents and crew.",
      "📞 Emergency Fisheries Helpline: 1554"
    ]
  }
};

const DisasterContent = () => {
  const { type } = useParams();
  const data = contentMap[type];

  if (!data) return <h2 style={{ textAlign: "center" }}>🚫 Page Not Found</h2>;

  return (
    <div className="disaster-page">
      <h2>{data.title}</h2>
      {data.image && (
        <div className="disaster-image-wrapper">
          <img src={data.image} alt={type} className="disaster-image" />
        </div>
      )}
      {Array.isArray(data.content) ? (
        <ul>
          {data.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <div>{data.content}</div>
      )}
    </div>
  );
};

export default DisasterContent;
