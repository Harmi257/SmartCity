import React, { useEffect, useState } from "react";
import DisasterIcons from "../components/DisasterIcons";
import DisasterDetails from "../components/DisasterDetails";
import DisasterForm from "../components/DisasterForm";

const Disaster = () => {
  const [loading, setLoading] = useState(true);
  const [showMap, setShowMap] = useState(false); // 👈 New state to toggle map

  useEffect(() => {
    setLoading(false); // Assuming loading is just a check for initialization
  }, []);

  const handleToggleMap = () => {
    setShowMap(!showMap);
  };

  if (loading) {
    return <div style={{ textAlign: "center", padding: "50px" }}>Loading...</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Disaster Management Module
      </h1>

      <DisasterIcons />

      <div style={{ marginTop: "40px" }}>
        {/* Directly show the DisasterForm component */}
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Report a Disaster
        </h2>
        <DisasterForm />
      </div>

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
            cursor: "pointer" 
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
