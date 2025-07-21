import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import president from "/team/MAPANO.png";
import vp_ex from "/team/OMPAD.png";
import vp_in from "/team/CAVAN.png";
import secretary from "/team/BORGUETA.png";

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
        {/*  */}
        <div className="px-2">
          <div className="w-[300px] h-[400px] mx-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
            <img
              src={president}
              alt="president"
              className="h-full w-full object-contain object-cover"
            />
          </div>
        </div>
        {/*  */}
        <div className="px-2">
          <div className="w-[300px] h-[400px] mx-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
            <img
              src={vp_ex}
              alt="president"
              className="h-full w-full object-contain object-cover"
            />
          </div>
        </div>
        {/*  */}
        <div className="px-2">
          <div className="w-[300px] h-[400px] mx-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
            <img
              src={vp_in}
              alt="president"
              className="h-full w-full object-contain object-cover"
            />
          </div>
        </div>
        {/*  */}
        <div className="px-2">
          <div className="w-[300px] h-[400px] mx-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
            <img
              src={secretary}
              alt="president"
              className="h-full w-full object-contain object-cover"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
