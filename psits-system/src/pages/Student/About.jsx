import React from "react";
import StudentLayout from "./StudentLayout";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import bepo1 from "/bepo_jumping.png";
import bepo2 from "/bepo_proud.png";
import image from "/hero_image.JPG";
import image1 from "/about_image1.png";
import image2 from "/about_image.png";
import OfficersCarousel from "../../components/Student/OfficersCarousel";

const About = () => {
  return (
    <div className="flex flex-col p-4 gap-7 overflow-hidden">
      <div className="flex flex-col items-center justify-center relative">
        <h1 className="text-sm font-black text-[#C89900] pb-1 text-center border-b-2 mb-2">
          The Team
        </h1>
        <OfficersCarousel />
        <img
          src={bepo1}
          alt="bepo jumping"
          className="absolute -bottom-5 -right-0 h-32 z-50"
        />
      </div>

      {/* Mission */}
      <div className="w-full h-50 bg-[#1F0D1D] border border-[#C89900] relative flex gap-4 overflow-visible mb-7">
        {/* Left Image */}
        <div className="w-1/2 h-full">
          <img
            src={image2}
            alt="image"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Content */}
        <div className="text-white w-1/2 flex flex-col justify-center py-4 pr-6">
          <h1 className="text-xs font-bold text-[#C89900] pb-2">
            AIMS AND OBJECTIVES
          </h1>
          <p className="text-[10px] text-start leading-relaxed">
            The organization shall develop a harmonious relationship and unity
            among the members through conferences and other activities with
            deals of creating a close inter-school environment.
          </p>
        </div>

        {/* Floating Bepo Image */}
        <img
          src={bepo1}
          alt="bepo jumping"
          className="absolute -bottom-20 -right-5 h-32 z-50"
        />
      </div>

      {/* Vision */}
      <div className="w-full h-50 bg-[#1F0D1D] border border-[#C89900] flex gap-4 relative mb-7">
        {/* Text */}
        <div className="text-white w-[50%] flex flex-col justify-center py-4 pl-1 text-end">
          <h1 className="text-xs font-bold text-[#C89900] pb-2">
            AIMS AND OBJECTIVES
          </h1>
          <p className="text-[10px] text-end leading-relaxed">
            We should uphold the pursuit of knowledge designed to develop in the
            student’s awareness of competence and responsibility of Information
            Technology.
          </p>
        </div>

        {/* Image */}
        <div className="w-1/2 h-full">
          <img
            src={image1}
            alt="image"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Bepo - Bottom Left */}
        <img
          src={bepo2}
          alt="bepo bottom left"
          className="absolute -bottom-17 -left-5 h-32"
        />
      </div>

      <h1 className="text-sm border-b-1 font-bold text-[#C89900] pb-1 text-center">
        UCLM - PSITS Dev Team
      </h1>
      <div className="w-full flex justify-center gap-4 mb-5">
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
        <div className="flex flex-col text-center overflow-scroll">
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
