import React, { useEffect } from "react";
import StudentLayout from "./StudentLayout";
import AnnouncementCard from "../../components/AnnouncementCard";
import PostCard from "../../components/PostCard";
import { useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/posts`);
      console.log(response.data);
      setPosts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <StudentLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="flex items-center justify-center flex-col">
          <section className="pt-30 text-white w-[50vw]">
            <div className="block">
              <h1 className="text-xl font-bold mb-10">📢 Announcements</h1>
              <div className="flex gap-4">
                {posts.map(
                  (post) =>
                    post.category === 0 && (
                      <Link
                        key={post.post_id}
                        to={`http://localhost:5173/announcement/${post.post_id}`}
                      >
                        <AnnouncementCard
                          title={post.title}
                          image={post.image}
                        />
                      </Link>
                    )
                )}
              </div>
            </div>
          </section>
          <section className="mt-20 w-[50vw] flex flex-col gap-6">
            {posts.map(
              (post) =>
                post.category === 2 && (
                  <PostCard
                    key={post.post_id}
                    title={post.title}
                    date={post.date}
                    category={post.category}
                    author={post.author}
                    content={post.content}
                    image={post.image}
                  />
                )
            )}
            {posts.map(
              (post) =>
                post.category === 1 && (
                  <PostCard
                    key={post.post_id}
                    title={post.title}
                    date={post.date}
                    category={post.category}
                    author={post.author}
                    content={post.content}
                    image={post.image}
                  />
                )
            )}
          </section>
        </main>
      )}
    </StudentLayout>
  );
}
