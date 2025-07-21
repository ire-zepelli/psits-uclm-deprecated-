import { query } from "../db.js";

export const getPosts = async () => {
  const { rows } = await query("SELECT * from posts ORDER BY post_id DESC");

  return rows;
};

export const getPost = async (postID) => {
  const { rows } = await query(`SELECT * from posts WHERE post_id = $1`, [
    postID,
  ]);

  return rows[0];
};

export const createPost = async (postData) => {
  const { title, author, content, category, status, image, date } = postData;

  const { rows } = await query(
    `INSERT INTO posts (title, author, content, category, status, image, date ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [title, author, content, category, status, image, date]
  );
  return rows[0];
};

export const updatePost = async (postData, postID) => {
  const { title, author, content, category, status, image, date } = postData;

  if (image == undefined) {
    const { rows } = await query(
      `UPDATE posts SET title = $1, author = $2, content = $3, category = $4, status = $5, date = $6 WHERE post_id = $7 RETURNING *`,
      [title, author, content, category, status, date, postID]
    );
    return rows[0];
  } else {
    const { rows } = await query(
      `UPDATE posts SET title = $1, author = $2, content = $3, category = $4, status = $5, image = $6, date = $7 WHERE post_id = $8 RETURNING *`,
      [title, author, content, category, status, image, date, postID]
    );
    return rows[0];
  }
};

export const deletePost = async (postID) => {
  const { rowCount } = await query(`DELETE from posts WHERE post_id = $1`, [
    postID,
  ]);

  return rowCount > 0;
};
