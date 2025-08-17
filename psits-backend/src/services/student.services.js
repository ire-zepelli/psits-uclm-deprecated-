import session from "express-session";
import { query } from "../db.js";
import bcrypt from "bcrypt";

export const getStudents = async () => {
  const { rows } = await query(
    "SELECT id, school_id, name, level, email, is_psits_member, user_auth_id, available_prints FROM profile ORDER BY id ASC"
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
  const { id, name, password, level, email, is_psits_member } = studentData;

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
    [user_auth_id, id, is_psits_member, name, email, level]
  );

  return rows[0];
};

export const updateStudent = async (studentData, profile_id) => {
  const {
    student_id: school_id,
    name,
    password,
    level,
    email,
    is_psits_member,
  } = studentData;

  console.log(studentData);
  console.log(profile_id);

  if (password == null || password.trim() === "") {
    const { rows } = await query(
      `UPDATE profile 
   SET school_id = $1, name = $2, is_psits_member = $3, email = $4, level = $5
   WHERE id = $6 RETURNING *`,
      [school_id, name, is_psits_member, email, level, profile_id]
    );
    return rows[0];
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);

    const { rows } = await query(
      `UPDATE profile 
   SET school_id = $1, name = $2, is_psits_member = $3, email = $4, level = $5
   WHERE id = $6 RETURNING user_auth_id`,
      [school_id, name, is_psits_member, email, level, profile_id]
    );

    const auth_id = rows[0].user_auth_id;

    const { rows: AuthRows } = await query(
      `UPDATE user_auth SET username = $1, password = $2, updated_at = NOW() WHERE id = $3 RETURNING *`,
      [school_id, password, auth_id]
    );

    return AuthRows[0];
  }
};

export const deleteStudent = async (profile_id) => {
  const { rows } = await query(
    `SELECT user_auth_id FROM profile WHERE id = $1`,
    [profile_id]
  );

  if (rows.length == 0) {
    return false;
  }

  const user_auth_id = rows[0].user_auth_id;

  await query(`DELETE FROM profile WHERE id = $1`, [profile_id]);
  await query(`DELETE FROM user_auth WHERE id = $1`, [user_auth_id]);

  return true;
};

export const searchStudent = async (searchTerm) => {
  const { rows } = await query(
    `SELECT * FROM students WHERE name ILIKE $1 OR email ILIKE $1`,
    [`%${searchTerm}%`]
  );

  return rows;
};
