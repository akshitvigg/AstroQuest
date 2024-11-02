import React, { useEffect, useRef } from "react";

const StarfieldBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const numStars = 1000; 
    const maxSpeed = 0.25; 

  
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

  
    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width - canvas.width / 2;
        this.y = Math.random() * canvas.height - canvas.height / 2;
        this.z = Math.random() * canvas.width;
        this.size = Math.random() * 1.5 + 0.5;
        this.speed = Math.random() * maxSpeed + 0.1; 
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 0) this.reset();
      }

      draw() {
        const x = (this.x / this.z) * canvas.width + canvas.width / 2;
        const y = (this.y / this.z) * canvas.height + canvas.height / 2;
        const size = (1 - this.z / canvas.width) * this.size;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      }
    }

    
    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };
    initStars();

    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        opacity: 0.6,
      }}
    />
  );
};

export default StarfieldBackground;
