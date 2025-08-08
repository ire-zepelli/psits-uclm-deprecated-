import { query } from "../db.js";
import { compare } from "bcrypt";

export const login = async (id, password) => {
  const { rows } = await query(
    `SELECT * FROM user_auth WHERE username = ${id}`
  );

  if (rows.length === 0) throw new Error("Invalid user or password");

  const user = rows[0];

  const validPassword = await compare(password, user.password);

  console.log("user:", user);
  console.log("isValid", validPassword);

  if (!validPassword) throw new Error("Invalid user or password");

  return { user: user.username, id: user.id, user_type: user.user_type };
};
