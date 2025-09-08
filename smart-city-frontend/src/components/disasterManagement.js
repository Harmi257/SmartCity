import React, { useState } from "react";
import DisasterIcons from "./DisasterIcons";
import DisasterDetails from "./DisasterDetails";


const Disaster = () => {
  const [showMap, setShowMap] = useState(false); // 👈 New state to toggle map

  const handleToggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Disaster Management Module
      </h1>

      <DisasterIcons />

    

      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <button
          onClick={handleToggleMap}
          style={{
            padding: "10px 20px",
            backgroundColor: "#1d3557",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {showMap ? "Hide" : "Show"} Reported Disasters
        </button>

        {showMap && (
          <>
            <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>
              Reported Disasters
            </h2>
            <DisasterDetails />
          </>
        )}
      </div>
    </div>
  );
};

export default Disaster;
