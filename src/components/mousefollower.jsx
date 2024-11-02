import React, { useEffect, useRef } from "react";

const MouseFollowerCircle = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseMove = (e) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      requestAnimationFrame(updateCirclePosition);
    };

    const updateCirclePosition = () => {
      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${lastMouseX}px, ${lastMouseY}px) translate(-50%, -50%)`;
      }
    };

 
    window.addEventListener("mousemove", handleMouseMove);

    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      style={{
        position: "fixed",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "rgba(173, 216, 230, 0.5)", 
        pointerEvents: "none", 
        zIndex: 9999,
        border: "2px solid rgba(106, 90, 205, 0.7)", 
        boxShadow: "0 0 10px 3px rgba(173,216,230,0.3)",
        transition: "transform 0.1s ease-out", 
      }}
    />
  );
};

export default MouseFollowerCircle;
