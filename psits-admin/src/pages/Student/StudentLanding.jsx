import StudentLayout from "./StudentLayout";
import promo_video from "/landing_promo.mp4";

const StudentLanding = () => {
  return (
    <div className="w-full h-full bg-gray-200 absolute top-0">
      <video
        className="w-full h-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={promo_video} type="video/mp4" />
      </video>
    </div>
  );
};

export default StudentLanding;
