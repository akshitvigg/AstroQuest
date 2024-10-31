import React from "react";
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-sm py-4">
      <div
        style={{ display: "flex" }}
        className="flex items-center justify-center gap-6"
      >
        <div className="flex items-center gap-2">
          <span className="text-white text-lg">Created by Akshit</span>
          <div className="flex items-center gap-4 ml-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Github size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Twitter size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
