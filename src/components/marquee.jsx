import React, { useEffect } from "react";
import pic1 from "../assets/poster.avif";
import pic2 from "../assets/poster2.avif";
import pic3 from "../assets/poster3.png";
import pic4 from "../assets/poster4.avif";
import pic5 from "../assets/poster5.png";

const Marquee = () => {
  const images = [pic1, pic2, pic3, pic4, pic5];
  const duplicatedImages = [...images, ...images];

  const urls = [
    "https://pod.link/1529417868",
    "https://podcasts.apple.com/us/podcast/the-space-industry/id1557185803",
    "https://www.nasa.gov/podcasts/small-steps-giant-leaps/",
    "https://pod.link/609365180",
    "https://www.nasa.gov/podcasts/houston-we-have-a-podcast/",
  ];

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
        .marquee-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          height: 200px; /* Adjusted container height for larger images */
          background-color: rgba(61, 61, 61, 0.3);
          border: 1px solid rgba(61, 61, 61, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }
  
        .blur-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(61, 61, 61, 0.1);
          -webkit-backdrop-filter: blur(10px);
        }
  
        .marquee-track {
          position: relative;
          display: inline-flex;
          align-items: center;
          height: 100%;
          width: max-content;
          z-index: 1;
        }
  
        .image-card {
          height: 180px; /* Increased height */
          width: 260px;  /* Increased width for larger images */
          margin: 0 10px;
          flex-shrink: 0;
          position: relative;
          transition: transform 0.3s ease;
        }
  
        .image-card:hover {
          transform: scale(1.05);
        }
  
        .marquee-image {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
  
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
  
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={{ marginTop: 40 }} className="marquee-container mt-16">
      <div className="blur-background"></div>
      <div className="marquee-track animate-marquee">
        {/* First set */}
        {duplicatedImages.map((image, index) => (
          <div key={index} className="image-card">
            <a
              href={urls[index % urls.length]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src={image}
                alt={`Slide ${index}`}
                className="marquee-image"
              />
            </a>
          </div>
        ))}

        {/* Second set */}
        {duplicatedImages.map((image, index) => (
          <div key={`duplicate-${index}`} className="image-card">
            <a
              href={urls[index % urls.length]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="marquee-image"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
