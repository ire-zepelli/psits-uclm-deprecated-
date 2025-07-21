import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const BlogCarousel = ({ posts }) => {
  console.log(posts);

  return (
    <div className="carousel carousel-center rounded-box w-full h-full space-x-1 p-4">
      {posts.map(
        (post) =>
          post.category === 0 &&
          post.status === 0 && (
            <Link
              to={`/blog/${post.post_id}`}
              className="carousel-item h-50 w-80"
              key={post.post_id}
            >
              <div className="bg-white w-80 h-full flex flex-col items-center overflow-hidden justify-end relative">
                <img
                  src={post.image}
                  alt="image"
                  className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute self-start p-2">
                  <p className="font-black text-white">{post.title}</p>
                  <div className="flex gap-2 text-xs text-gray-300 items-center">
                    <p>Read Post</p>
                    <ArrowForwardIcon />
                  </div>
                </div>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default BlogCarousel;
