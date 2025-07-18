import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="p-2 w-screen h-20 bg-[#1f0d1d] text-white flex flex-col items-center justify-center gap-1 font-bold z-50">
      <div className="flex gap-2">
        <a href="https://www.facebook.com/uclmpsitsofficial" target="_blank">
          <FacebookIcon fontSize="small" />
        </a>
        <a href="https://www.github.com/ire-zepelli" target="_blank">
          <GitHubIcon fontSize="small" />
        </a>
        <a href="https://www.github.com/ire-zepelli" target="_blank">
          <EmailIcon fontSize="small" />
        </a>
      </div>
      <div>
        <div className="text-xs">
          Copyright © <span className="text-[#c89900]">PSITS - UCLM</span> | Dev
          Team 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
