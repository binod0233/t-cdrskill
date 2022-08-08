import React from "react";
import "./Social.css";

const TakeMeToTop = ({ scrollToTop }) => {
  return (
    <div className="position-fixed takeMeToTopContainer" onClick={scrollToTop}>
      <div className=" bg-white px-2 py-1" style={{ color: "#5B2397" }}>
        <i className="fa-solid fa-chevron-up"></i>
      </div>
    </div>
  );
};

export default TakeMeToTop;
