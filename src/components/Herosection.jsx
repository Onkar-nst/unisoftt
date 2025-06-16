import React from "react";
import video from "../assets/video.mp4";
import Navbar from "./Navbar";
import "./Herosection.css";

function Herosection() {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <video className="videos" src={video} autoPlay muted loop />

        <div className="overlay"></div>

        <div className="text-container">
          <h1>Empowering Tech Careers</h1>
          <h1>Unisoft Technologies Nagpur</h1>
          <div className="btn-container">
            <button className="btn" id="btn1">
              Explore Courses
            </button>
            <button className="btn" id="btn2">
              Who we are
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;

