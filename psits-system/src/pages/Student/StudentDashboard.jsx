import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import hero from "/hero_image.JPG";
import { Carousel } from "antd";
import { useRef, useState } from "react";
import EventsOverview from "./EventsOverview";
import Footer from "../../components/Footer";
import StudentLayout from "./StudentLayout";

export default function StudentDashboard() {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const onChange = (index) => {
    console.log("changing to:", index);
    setCurrentSlide(index);
  };

  const goToSlide = (index) => {
    console.log("going to:", index);
    carouselRef.current.goTo(index);
    setCurrentSlide(index);
  };

  return (
    <StudentLayout>
      <div className="relative overflow-hidden w-full h-screen">
        <Carousel
          afterChange={onChange}
          ref={carouselRef}
          dots={false}
          autoplay
        >
          <div>
            <img src={hero} className="w-full h-full object-cover  " />
          </div>
          <div>
            <img src={hero} className="w-full h-full object-cover" />
          </div>
          <div>
            <img src={hero} className="w-full h-full object-cover" />
          </div>
        </Carousel>
        {/* Floating text */}
        <div className="absolute inset-0 justify-self-center flex flex-col items-start justify-end px-10 pb-35 text-white z-10">
          <p className="text-[2rem] tracking-[1rem]">HEADLINES</p>
          <h1 className="text-[5rem] font-bold ">
            <span className="text-[#C89900]">CESAFI 2025: </span>
            Computer Quiz Bowl
          </h1>
          <div className="flex justify-center items-center w-full gap-4 ">
            {[0, 1, 2].map((slide) => (
              <button key={slide} onClick={() => goToSlide(slide.toString())}>
                <span
                  className={`w-[20px] h-[5px] inline-block rounded-full transition-transform duration-300 ease-in-out hover:scale-200 ${
                    currentSlide === slide ? "bg-[#C89900]" : "bg-white"
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1f0d1d]/100 to-transparent" />
      {/* <EventsOverview />
      <h1 className="text-center text-white">
        More to come in the forseeable future heh........
      </h1> */}
    </StudentLayout>
  );
}
