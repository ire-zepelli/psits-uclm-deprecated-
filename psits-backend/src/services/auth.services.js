import { query } from "../db.js";
import { compare } from "bcrypt";

export const login = async (id, password) => {
  const { rows } = await query(`SELECT * FROM students WHERE id = ${id}`);

  if (rows.length === 0) throw new Error("Invalid user or password");

  const user = rows[0];

  const validPassword = await compare(password, user.password);

  console.log("user:", user);

  return { validPassword, isAdmin: user.is_admin };
};

//to be revised tomorrow
