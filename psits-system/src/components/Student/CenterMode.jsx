import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import president from "/team/MAPANO.png"; // Make sure this path is correct

function CenterMode() {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="px-2">
            <div className="w-[300px] h-[400px] mx-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
              <img
                src={president}
                alt={`president ${idx + 1}`}
                className="h-full w-full object-contain object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
