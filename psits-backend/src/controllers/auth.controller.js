import { request } from "express";
import * as authService from "../services/auth.services.js";

export const login = async (req, res) => {
  try {
    const { user, password } = req.body;

    console.log(req.sessionID);

    const result = await authService.login(user, password);

    console.log("Login:", result);

    if (result.validPassword) {
      req.session.user = { user, isAdmin: result.isAdmin };
      return res.status(200).json(req.session.user);
    }

    return res.status(401).json({ msg: "Invalid Credentials" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const status = async (req, res) => {
  req.sessionStore.get(req.sessionID, (err, session) => {
    console.log("Session:", session);
  });
  return req.session.user
    ? res.status(200).json(req.session.user)
    : res.status(401).json({ msg: "Not Authenticated" });
};
