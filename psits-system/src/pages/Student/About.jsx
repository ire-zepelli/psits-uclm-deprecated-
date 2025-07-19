import React from "react";
import StudentLayout from "./StudentLayout";
import image from "/hero_image.JPG";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const About = () => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <h1 className="text-center text-3xl font-bold">About Us</h1>

      {/* Mission */}
      <div className="w-full h-50 bg-[#1F0D1D] border border-[#C89900] overflow-hidden flex gap-4">
        <div className="w-[50%] h-full">
          <img
            src={image}
            alt="image"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="text-white w-[50%] flex flex-col justify-center p-2">
          <h1 className="text-xs font-bold text-[#C89900] pb-2">
            AIMS AND OBJECTIVES
          </h1>
          <p className="text-xs text-start">
            The organization shall develop a harmonious relationship and unity
            among the members through conferences and other activities with
            deals of creating a close inter-school environment.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="w-full h-50 bg-[#1F0D1D] border border-[#C89900] overflow-hidden flex gap-4">
        <div className="text-white w-[50%] flex flex-col justify-center p-2 text-end">
          <h1 className="text-xs font-bold text-[#C89900] pb-2">
            AIMS AND OBJECTIVES
          </h1>
          <p className="text-xs">
            We should uphold the pursuit of knowledge designed to develop in the
            student’s awareness of competence and responsibility of Information
            Technology.
          </p>
        </div>
        <div className="w-[50%] h-full">
          <img
            src={image}
            alt="image"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <h1 className="text-xs font-bold text-[#C89900] pb-1 text-center">
        UCLM - PSITS Dev Team 2025
      </h1>
      <div className="w-full flex gap-4 mb-5">
        <div className="flex flex-col text-center">
          {/* DEveloper */}
          <div className="bg-white h-25 w-25 rounded-full overflow-hidden">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h1 className="text-xs font-bold">Benedict Avenido</h1>
          <p className="text-[10px] text-[#C89900]">Chief Developer</p>
          <div>
            <div className="flex justify-center gap-2">
              <a
                href="https://www.facebook.com/uclmpsitsofficial"
                target="_blank"
              >
                <FacebookIcon fontSize="small" />
              </a>
              <a href="https://www.github.com/ire-zepelli" target="_blank">
                <GitHubIcon fontSize="small" />
              </a>
              <a href="https://www.github.com/ire-zepelli" target="_blank">
                <EmailIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        {/* dev */}
        <div className="flex flex-col text-center">
          {/* DEveloper */}
          <div className="bg-white h-25 w-25 rounded-full overflow-hidden">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h1 className="text-xs font-bold">Benedict Avenido</h1>
          <p className="text-[10px] text-[#C89900]">Chief Developer</p>
          <div>
            <div className="flex justify-center gap-2">
              <a
                href="https://www.facebook.com/uclmpsitsofficial"
                target="_blank"
              >
                <FacebookIcon fontSize="small" />
              </a>
              <a href="https://www.github.com/ire-zepelli" target="_blank">
                <GitHubIcon fontSize="small" />
              </a>
              <a href="https://www.github.com/ire-zepelli" target="_blank">
                <EmailIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        {/* dev */}
        <div className="flex flex-col text-center">
          {/* DEveloper */}
          <div className="bg-white h-25 w-25 rounded-full overflow-hidden">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h1 className="text-xs font-bold">Benedict Avenido</h1>
          <p className="text-[10px] text-[#C89900]">Chief Developer</p>
          <div>
            <div className="flex justify-center gap-2">
              <a
                href="https://www.facebook.com/uclmpsitsofficial"
                target="_blank"
              >
                <FacebookIcon fontSize="small" />
              </a>
              <a href="https://www.github.com/ire-zepelli" target="_blank">
                <GitHubIcon fontSize="small" />
              </a>
              <a href="https://www.github.com/ire-zepelli" target="_blank">
                <EmailIcon fontSize="small" />
              </a>
            </div>
          </div>
        </div>

        {/*  */}
      </div>

      {/* Motto */}
      <p className="text-xs text-center text-gray-200">
        “Innovating technology through creative minds and selfless service in
        Information Technology.”
      </p>
    </div>
  );
};

export default About;
