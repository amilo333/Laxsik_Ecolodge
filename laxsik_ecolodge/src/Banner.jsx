import React from "react";
import "./banner.css";
import banner1 from "../src/assets/images/slider2.png"

export default function Banner() {
  return (
    <div>
      <div className="container">
        <div className="banner">
            <img className="img-banner" src={banner1} alt="" />        
        </div>
      </div>
    </div>
  );
}
