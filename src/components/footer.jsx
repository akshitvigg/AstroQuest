import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000000",
        color: "white",
        padding: "15px 0",
        textAlign: "center",
        width: "100%",
        position: "relative",
        bottom: 0,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          letterSpacing: "1px",
          display: "inline-flex",
          alignItems: "center",
          color: "#565677",
        }}
      >
        Developed in
        <img
          style={{ marginLeft: 10, marginRight: 10 }}
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sun.png"
          alt="Sun"
          width="30"
          height="30"
        />
        by{" "}
        <span
          style={{
            color: "white",
            marginLeft: 10,
            fontSize: 16,
            fontWeight: "bold",
            marginRight: 10,
          }}
        >
          Akshit
        </span>
        follow me on
        <a
          target="_blank"
          style={{
            marginLeft: 10,
            color: "white",
            fontSize: 16,
            marginRight: 10,
          }}
          href="https://github.com/akshitvigg"
        >
          <b>Github</b>
        </a>
        &
        <a
          target="_blank"
          style={{
            marginLeft: 10,
            color: "white",
            fontSize: 16,
            marginRight: 10,
          }}
          href="https://x.com/AkshitVig4"
        >
          <b>X</b>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
