import React, { useRef, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Headers from "./components/headers";
import Planets from "./components/planets";
import Footer from "./components/footer";
import mercury from "./assets/mercury.gif";
import venus from "./assets/venus.gif";
import earth from "./assets/earth.gif";
import mars from "./assets/mars.gif";
import jupiter from "./assets/jupiter.gif";
import saturn from "./assets/saturn.png";
import uranus from "./assets/uranus.gif";
import neptune from "./assets/neptune.gif";
import SolarSystem from "./components/solarSystem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StarfieldBackground from "./components/starfield";
import rocket from "./assets/rocket.gif";
import Marquee from "./components/marquee";
import podpng from "./assets/podcast.png";

import MouseFollowerCircle from "./components/mousefollower";

function App() {
  const landingRef = useRef(null);
  const planetsRef = useRef(null);

  const scrollToLanding = () => {
    landingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPlanets = () => {
    planetsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const planets = [
    {
      name: "Mercury",
      image: mercury,
      dist: "68.8M km",
      temp: "430°C",
      moons: "0",
      funfact: "Mercury is the closest planet to the Sun",
    },
    {
      name: "Venus",
      image: venus,
      dist: "108.9M km",
      temp: "465°C",
      moons: "0",
      funfact: "Venus is the hottest planet in the Solar System.",
    },
    {
      name: "Earth",
      image: earth,
      dist: "149.6M km",
      temp: "-88 to 58°C",
      moons: "1 (The Moon)",
      funfacts:
        "Earth is the only known planet with liquid water on its surface.",
    },
    {
      name: "Mars",
      image: mars,
      dist: "227.9M km",
      temp: "-63°C",
      moons: "2 (Phobos, Deimos)",
      funfact:
        "Mars is home to Olympus Mons, the largest volcano in the solar system.",
    },
    {
      name: "Jupiter",
      image: jupiter,
      dist: "778.3M km",
      temp: "-108°C",
      moons: "79 (largest: Ganymede)",
      funfact:
        "Jupiter is the largest planet, with a storm known as the Great Red Spot that’s been active for centuries.",
    },
    {
      name: "Saturn",
      image: saturn,
      dist: "1.43B km",
      temp: "-139°C",
      moons: "83 (largest: Titan)",
      funfact:
        "Saturn is famous for its complex ring system made of ice and rock particles.",
    },
    {
      name: "Uranus",
      image: uranus,
      dist: "2.87B km",
      temp: "-195°C",
      moons: "27 (largest: Titania)",
      funfact: "Uranus rotates on its side, making its axis nearly horizontal.",
    },
    {
      name: "Neptune",
      image: neptune,
      dist: "4.5B km",
      temp: "-201°C",
      moons: "14 (largest: Triton)",
      funfact:
        "Neptune has supersonic winds reaching up to 2,100 km/h, the fastest in the solar system.",
    },
  ];

  const HomeContent = () => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            } else {
              entry.target.classList.remove("in-view");
            }
          });
        },
        { threshold: 0.1 } // Adjust as needed
      );

      if (planetsRef.current) {
        observer.observe(planetsRef.current);
      }

      return () => {
        if (planetsRef.current) {
          observer.unobserve(planetsRef.current);
        }
      };
    }, []);

    return (
      <div>
        <MouseFollowerCircle />
        <div ref={landingRef} className="landing-section">
          <LandingPage />
        </div>
        <StarfieldBackground />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="pod">Podcasts</div>
          <div>
            <img className="podpng" width={60} src={podpng} alt="" />
          </div>
        </div>
        <Marquee />
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
        >
          <img width={100} src={rocket} alt="Rocket" />
        </div>
        <div ref={planetsRef} className="planet-section">
          <div className="planet-card-container">
            {planets.map((planet, index) => (
              <Planets
                key={index}
                name={planet.name}
                image={planet.image}
                distance={planet.dist}
                temperature={planet.temp}
                moons={planet.moons}
                funfact={planet.funfact}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Headers
          onScrolltoHome={scrollToLanding}
          onScrolltoPlanets={scrollToPlanets}
        />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/solar-system" element={<SolarSystem />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
