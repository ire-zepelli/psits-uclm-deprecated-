import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Announcement() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getEvent = () => {
    return axios
      .get(`http://localhost:3000/api/posts/${id}`)
      .then((res) => res.data);
  };

  const {
    status,
    error,
    data: post,
  } = useQuery({ queryKey: ["post"], queryFn: getEvent });

  const handleBack = () => {
    navigate(-1);
  };

  function formatDate(isoString) {
    const date = new Date(isoString);

    return date.toLocaleString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function formatStatus(status) {
    switch (status) {
      case 0:
        return "Published";
      case 1:
        return "Draft";
      case 2:
        return "Archived";
      default:
        return "Unknown";
    }
  }

  function formatCategory(category) {
    switch (category) {
      case 0:
        return "Announcement";
      case 1:
        return "Blog";
      case 2:
        return "Academic";
      case 3:
        return "Featured";
      default:
        return "Unknown";
    }
  }

  console.log(post);

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (!post || !post.title) return <h1>Post not found.</h1>;

  return (
    <div className="p-4">
      <button
        className="btn btn-[#C89900] text-xs p-2 bg-[#C89900] text-white border-none"
        onClick={handleBack}
      >{`<- Back`}</button>

      <div className="flex flex-col justify-center items-center gap-2 mb-4">
        <p className="border-b text-[#C89900] font-bold">Post</p>
        <h1 className="text-2xl">{post.title}</h1>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <CalendarTodayIcon fontSize="small" />
          <h1>{formatDate(post.date)}</h1>
          |
          <LocationOnIcon fontSize="small" />
          <h1>{post.author}</h1>
        </div>
        <span className="bg-[#C89900] px-2 text-xs rounded-xl">
          {formatCategory(post.category)}
        </span>
      </div>

      <div className="w-full h-full flex flex-col">
        <div className="w-full h-50 overflow-hidden">
          <img
            src={post.image}
            alt="hero"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {post.content.split(/\n+/).map((para, index) => (
          <p
            key={index}
            className={`text-justify text-sm leading-relaxed p-4 ${
              index === 0
                ? "first-letter:text-4xl first-letter:font-bold first-letter:text-[#C89900] first-letter:mr-2 first-letter:float-left"
                : ""
            }`}
          >
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
