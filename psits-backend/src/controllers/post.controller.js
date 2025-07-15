import * as postService from "../services/post.services.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    res.status(200).json(posts);
  } catch (err) {
    console.err("Error fetching posts: ", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createPost = async (req, res) => {
  try {
    const postData = req.body;
    const newPostData = await postService.createPost(postData);
    res.status(200).json(newPostData);
  } catch (error) {
    console.err("Error creating post: ", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const postID = req.params.id;
    const postData = req.body;

    const updatedPost = await postService.updatePost(postData, postID);

    if (!updatedPost) {
      return res.status(404).json({ messange: "Post not found." });
    }
    res.status(200).json(updatePost);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postID = req.params.id;
    const deleted = await postService.deletePost(postID);

    if (!deleted) return res.status(404).json({ message: "Post not found." });

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
