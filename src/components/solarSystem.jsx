import React from "react";
import audiofile from "../assets/spacesound.mp3";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SolarSystem = () => {
  const location = useLocation();
  let audio;

  useEffect(() => {
    audio = new Audio(audiofile);
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [location.pathname]);
  const styles = {
    pageContainer: {
      width: "100%",
      height: "100%",
      backgroundColor: "#0a0d1c",
      backgroundImage:
        "radial-gradient(circle at center, #1a1e3c 0%, #0a0d1c 100%)",
      padding: "20px",
      overflow: "auto",
      minHeight: "100vh",
    },
    container: {
      width: "1200px",
      height: "800px",
      position: "relative",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    sun: {
      width: "80px",
      height: "80px",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "50%",
      background:
        "radial-gradient(circle at 30% 30%, #fff8de 0%, #ffd700 30%, #ffa200 100%)",
      boxShadow: "0 0 80px 8px rgba(255,165,0,0.4)",
      zIndex: 10,
      animation: "glow 4s ease-in-out infinite",
    },
    orbitContainer: (size) => ({
      width: size,
      height: size,
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "50%",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    }),
    orbit: (duration) => ({
      width: "100%",
      height: "100%",
      position: "absolute",
      animation: `orbit ${duration}s linear infinite`,
    }),
    planet: (size, gradient) => ({
      width: size,
      height: size,
      position: "absolute",
      top: "0",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "50%",
      background: gradient,
      boxShadow: "0 0 10px rgba(255,255,255,0.2)",
    }),
    legend: {
      position: "fixed",
      top: "20px",
      left: "20px",
      color: "white",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "rgba(10, 13, 28, 0.8)",
      padding: "20px",
      borderRadius: "15px",
      backdropFilter: "blur(5px)",
      border: "1px solid rgba(255,255,255,0.1)",
      zIndex: 20,
    },
    legendTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#ffd700",
    },
    legendItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      fontSize: "14px",
    },
    legendDot: (gradient) => ({
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      marginRight: "10px",
      background: gradient,
      boxShadow: "0 0 5px rgba(255,255,255,0.2)",
    }),
  };

  const planets = [
    {
      name: "Mercury",
      size: "12px",
      orbitSize: "160px",
      duration: 4,
      gradient: "radial-gradient(circle at 30% 30%, #e5e5e5 0%, #a0522d 100%)",
    },
    {
      name: "Venus",
      size: "18px",
      orbitSize: "220px",
      duration: 6,
      gradient: "radial-gradient(circle at 30% 30%, #ffd700 0%, #deb887 100%)",
    },
    {
      name: "Earth",
      size: "20px",
      orbitSize: "300px",
      duration: 8,
      gradient: "radial-gradient(circle at 30% 30%, #4f84c4 0%, #1e3d59 100%)",
    },
    {
      name: "Mars",
      size: "16px",
      orbitSize: "380px",
      duration: 10,
      gradient: "radial-gradient(circle at 30% 30%, #ff6b6b 0%, #cd5c5c 100%)",
    },
    {
      name: "Jupiter",
      size: "40px",
      orbitSize: "480px",
      duration: 12,
      gradient: "radial-gradient(circle at 30% 30%, #ffdab9 0%, #daa520 100%)",
    },
    {
      name: "Saturn",
      size: "36px",
      orbitSize: "580px",
      duration: 14,
      gradient: "radial-gradient(circle at 30% 30%, #fff8dc 0%, #ffa500 100%)",
    },
    {
      name: "Uranus",
      size: "26px",
      orbitSize: "660px",
      duration: 16,
      gradient: "radial-gradient(circle at 30% 30%, #b0e0e6 0%, #40e0d0 100%)",
    },
    {
      name: "Neptune",
      size: "24px",
      orbitSize: "740px",
      duration: 18,
      gradient: "radial-gradient(circle at 30% 30%, #87ceeb 0%, #4169e1 100%)",
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes glow {
            0% { box-shadow: 0 0 80px 8px rgba(255,165,0,0.4); }
            50% { box-shadow: 0 0 100px 12px rgba(255,165,0,0.6); }
            100% { box-shadow: 0 0 80px 8px rgba(255,165,0,0.4); }
          }
          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.1);
            border-radius: 5px;
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.2);
            border-radius: 5px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(255,255,255,0.3);
          }
        `}
      </style>
      <div style={styles.pageContainer}>
        <div style={styles.container}>
          {/* Sun */}
          <div style={styles.sun} />

          {/* Planets and Orbits */}
          {planets.map((planet, index) => (
            <div key={index} style={styles.orbitContainer(planet.orbitSize)}>
              <div style={styles.orbit(planet.duration)}>
                <div style={styles.planet(planet.size, planet.gradient)} />
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={styles.legend}>
          <div style={styles.legendTitle}>Solar System</div>
          <div style={styles.legendItem}>
            <div
              style={{
                ...styles.legendDot(
                  "radial-gradient(circle at 30% 30%, #fff8de 0%, #ffd700 100%)"
                ),
                boxShadow: "0 0 10px rgba(255,165,0,0.4)",
              }}
            />
            <span>Sun</span>
          </div>
          {planets.map((planet, index) => (
            <div key={index} style={styles.legendItem}>
              <div style={styles.legendDot(planet.gradient)} />
              <span>{planet.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SolarSystem;
