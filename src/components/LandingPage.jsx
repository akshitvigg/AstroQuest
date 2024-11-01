import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import earthlogo from "../assets/worldwide.png";
import "../App.css";

function LandingPage() {
  useEffect(() => {
    const handleLandingMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      document.querySelector(
        ".landing-bg"
      ).style.transform = `translate(${x}px, ${y}px)`;
    };

    // Add event listener for landing section
    const landingSection = document.querySelector(".landing-section");
    landingSection.addEventListener("mousemove", handleLandingMouseMove);

    // Cleanup listener on component unmount
    return () => {
      landingSection.removeEventListener("mousemove", handleLandingMouseMove);
    };
  }, []);

  return (
    <div className="landing-section">
      <div className="landing-bg"></div>
      <div className="title">
        Astr
        <img
          width={50}
          style={{ marginRight: 5 }}
          src={earthlogo}
          alt="Earth Logo"
        />
        Quest
      </div>
      <div className="typewriter">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(50)
              .typeString("Welcome to AstroQuest!")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Explore the Universe!")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Discover new Planets!")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Unravel Cosmic Mysteries!")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
          options={{
            loop: true,
          }}
        />
      </div>
      {/* Comet Image */}
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Comet.png"
        alt="Comet"
        width="150"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 10, // Ensure it appears on top of other elements
        }}
      />
    </div>
  );
}

export default LandingPage;
