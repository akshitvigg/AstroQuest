import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 130px)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Ringed%20Planet.png"
        alt="Flying Saucer"
        width="200"
        height="200"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
        }}
      />
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/New%20Moon%20Face.png"
        alt="New Moon Face"
        width="150"
        height="150"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
        }}
      />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          flex: "1",
        }}
      >
        <div
          style={{
            marginTop: "80px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "10px",
              color: "#ffffff",
            }}
          >
            About Us
          </h2>

          <div
            style={{
              width: "150px",
              height: "4px",
              backgroundColor: "#4a90e2",
              margin: "0 auto",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Profile sections */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <span
              style={{
                fontSize: "2rem",
                marginRight: "15px",
              }}
            >
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Technologist%20Light%20Skin%20Tone.png"
                alt="Technologist Light Skin Tone"
                width="70"
                height="70"
              />
            </span>
            <div>
              <h2
                style={{
                  margin: "0",
                  fontSize: "1.2rem",
                  color: "#2d3748",
                }}
              >
                Akshit Vig
              </h2>
              <p
                style={{
                  margin: "5px 0 0 0",
                  color: "#718096",
                }}
              >
                Full Stack Developer
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <span
              style={{
                fontSize: "2rem",
                marginRight: "15px",
              }}
            >
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/E-Mail.png"
                alt="E-Mail"
                width="70"
                height="70"
              />
            </span>
            <div>
              <h2
                style={{
                  margin: "0",
                  fontSize: "1.2rem",
                  color: "#2d3748",
                }}
              >
                Contact
              </h2>
              <p
                style={{
                  margin: "5px 0 0 0",
                  color: "#718096",
                }}
              >
                akshitvig48@gmail.com
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "15px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <span
              style={{
                fontSize: "2rem",
                marginRight: "15px",
              }}
            >
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Globe%20Showing%20Asia-Australia.png"
                alt="Globe Showing Asia-Australia"
                width="70"
                height="70"
              />
            </span>
            <div>
              <h2
                style={{
                  margin: "0",
                  fontSize: "1.2rem",
                  color: "#2d3748",
                }}
              >
                Location
              </h2>
              <p
                style={{
                  margin: "5px 0 0 0",
                  color: "#718096",
                }}
              >
                127.0.0.1
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Flying%20Saucer.png"
          alt="Flying Saucer"
          width="200"
          height="200"
        />
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Full%20Moon%20Face.png"
          alt="Full Moon Face"
          width="150"
          height="150"
        />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div {
            padding: 10px;
          }
          h2 {
            font-size: 1.8rem;
          }
          img {
            width: 100px; /* adjust as needed */
            height: auto; /* maintain aspect ratio */
          }
          .profile-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .profile-section img {
            margin-bottom: 10px;
          }
          .image-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
