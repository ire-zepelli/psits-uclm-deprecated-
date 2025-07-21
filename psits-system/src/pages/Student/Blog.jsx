import React from "react";
import StudentLayout from "./StudentLayout";
import psits_logo from "/psits logo.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BlogCarousel from "../../components/Student/BlogCarousel";

const Blog = () => {
  const getPosts = () => {
    return axios.get("http://localhost:3000/api/posts").then((res) => res.data);
  };
  const {
    status,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (!Array.isArray(posts) || posts.length === 0)
    return <h1>No posts found.</h1>;

  function formatDate(isoString) {
    const date = new Date(isoString);

    return date.toLocaleString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="flex flex-col justify-center items-start w-full p-5 py-2 text-black gap-4">
      <h1 className="text-white text-start">📢 Announcements</h1>

      <section className="w-full overflow-hidden">
        <BlogCarousel posts={posts} />
      </section>

      {/* Items */}

      {posts.map(
        (post) =>
          post.category >= 1 &&
          post.status === 0 && (
            <div
              key={post.post_id}
              className="bg-white w-full rounded-xl flex flex-col items-start py-4"
            >
              <section className="flex items-center gap-2 px-4 pb-2">
                <div className="w-10 h-10 rounded-full bg-black overflow-hidden">
                  <img
                    src={psits_logo}
                    alt="pfp"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="font-black">{post.author}</h1>
                  <p className="text-xs text-gray-500">
                    {formatDate(post.date)}
                  </p>
                </div>
              </section>
              <h1 className="p-2 font-black text-sm">{post.title}</h1>
              <div className="bg-black w-full h-60">
                <img
                  src={post.image}
                  alt="pfp"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="py-2 px-2">
                <p className="text-xs line-clamp-3">
                  <span className="font-black">{post.author + " "}</span>
                  {post.content}
                </p>
              </div>
            </div>
          )
      )}
    </div>
  );
};
export default Blog;
