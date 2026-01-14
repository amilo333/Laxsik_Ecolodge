import React from "react";
import "./banner.css";
import banner1 from "../src/assets/images/slider2.png"

export default function Banner({banner}) {
  return (
    <div>
      <div className="container">
        <div className="banner">
            <img className="img-banner" src={banner} alt="" />        
        </div>
      </div>
    </div>
  );
}
