import session from "express-session";
import { query } from "../db.js";
import bcrypt from "bcrypt";

export const getStudents = async () => {
  const { rows } = await query(
    "SELECT account_id, id, name, level, email FROM students ORDER BY account_id ASC"
  );
  return rows;
};

export const createAuth = async (username, password, created_by) => {
  const { rows } = await query(
    `INSERT INTO user_auth (
  username,
  password,
  created_by
) VALUES (
  $1,
  $2,
  $3
)
RETURNING id`,
    [username, password, created_by]
  );

  return rows[0];
};

export const createStudent = async (studentData, created_by) => {
  const { id, name, password, level, email } = studentData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const { id: user_auth_id } = await createAuth(id, hashedPassword, created_by);

  const { rows } = await query(
    `INSERT INTO profile (
  user_auth_id,
  school_id,
  is_psits_member,
  name,
  email,
  level
) VALUES (
  $1,         
  $2,       
  $3,
  $4,
  $5,
  $6
) RETURNING *`,
    [user_auth_id, id, true, name, email, level]
  );

  return rows[0];
};

export const updateStudent = async (studentData, accountId) => {
  const { id, name, password, level, email } = studentData;
  if (password == undefined) {
    const { rows } = await query(
      `UPDATE students SET id = $1, name = $2, level = $3, email = $4
    WHERE account_id = $5 RETURNING *`,
      [id, name, level, email, accountId]
    );

    return rows[0];
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);

    const { rows } = await query(
      `UPDATE students SET id = $1, name = $2, password = $3, level = $4, email = $5
      WHERE account_id = $6 RETURNING *`,
      [id, name, hashedPassword, level, email, accountId]
    );

    return rows[0];
  }
};

export const deleteStudent = async (accountId) => {
  const { rowCount } = await query(
    `DELETE FROM students WHERE account_id = $1`,
    [accountId]
  );

  return rowCount > 0;
};

export const searchStudent = async (searchTerm) => {
  const { rows } = await query(
    `SELECT * FROM students WHERE name ILIKE $1 OR email ILIKE $1`,
    [`%${searchTerm}%`]
  );

  return rows;
};
