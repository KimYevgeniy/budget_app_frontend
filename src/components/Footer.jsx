import React from "react";
import logoGitHub from "../assets/github-mark.png"

const Footer = () => {
  return (
    <>
      <footer className="pr-8 pl-8 ml-12 mr-12 border-t-2 border-gray-400">
        <div className="flex justify-between items-center mt-4">
          <div className="text-base">© 2023 By Yevgeniy Kim</div>
          <a href="https://github.com/KimYevgeniy" title="GitHub: @KimYevgeniy">
            <img src={logoGitHub} alt="GitHub: @KimYevgeniy" className="h-12 w-12" />
          </a>
          <a href="https://ko-fi.com/E1E12V7LS">
            <img
              className="h-12 border-0 "
              src="https://storage.ko-fi.com/cdn/kofi4.png?v=3"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
