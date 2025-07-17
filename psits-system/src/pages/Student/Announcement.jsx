import React, { useEffect, useState } from "react";
import StudentLayout from "./StudentLayout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Announcement() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const formatCategory = (category) => {
    switch (category) {
      case 0:
        return "Announcements";
      case 1:
        return "Blog";
      case 2:
        return "Featured";

      default:
        return null;
    }
  };

  const formatDate = (date) => {
    const formatted = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return formatted;
  };

  const fetchEvent = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/posts/${id}`);

      if (response.data.length == 0) {
        navigate("/posts");
      }

      setPost(response.data);

      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvent(id);
  }, [id]);

  return isLoading ? (
    <Loading />
  ) : (
    <StudentLayout>
      <main className="py-30 px-20 flex justify-center flex-col items-center gap-8">
        <button
          className="btn btn-warning text-center self-start text-white"
          onClick={handleBack}
        >
          <ArrowBackIosIcon fontSize="small" />
          Back
        </button>
        <p className="font-bold border-b text-4xl border-[#C89900] text-[#C89900]">
          Announcement
        </p>
        <h1 className="text-white text-6xl font-bold">"{post.title}"</h1>
        <div className="flex gap-4 text-white">
          <div className="flex items-center gap-2">
            <CalendarMonthIcon fontSize="medium" />
            <p>{formatDate(new Date(post.date))}</p>
          </div>
          <div className="flex items-center gap-2">
            <LocationOnIcon fontSize="medium" />
            <p>{post.author}</p>
          </div>
        </div>
        <div className="w-fit px-4 py-1 rounded-full bg-[#C89900] text-white font-bold">
          <p className="">{formatCategory(post.category)}</p>
        </div>
        <div className="bg-white w-full h-[30rem] overflow-hidden rounded-4xl">
          <img
            src={post.image}
            alt={"image"}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="">
          <p className="text-wrap whitespace-pre-wrap text-white text-xl first-letter:text-7xl text-start first-letter:float-left first-letter:font-extrabold first-letter:text-[#C89900]">
            {post.content}
          </p>
        </div>
      </main>
    </StudentLayout>
  );
}
