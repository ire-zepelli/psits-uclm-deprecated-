import * as authService from "../services/auth.services.js";

export const login = async (req, res) => {
  try {
    const { user, password } = req.body;

    if (!user || !password)
      res.status(400).json({ msg: "Username and password are required." });

    console.log("Session ID:", req.sessionID);

    const result = await authService.login(user, password);

    req.session.user = result;
    console.log("session:", req.session.user);

    return res.status(200).json(req.session.user);
  } catch (err) {
    res.status(500).json({ msg: "Internal Servel Error" });
  }
};

export const status = async (req, res) => {
  req.sessionStore.get(req.sessionID, (err, session) => {
    console.log("Session Status:", session);
  });
  return req.session.user
    ? res.status(200).json(req.session.user)
    : res.status(401).json({ msg: "Not Authenticated" });
};

export const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Logout Error:", err);
      return res.status(500).json({ msg: "Logout failed" });
    }

    res.clearCookie("connect.sid");
    return res.status(200).json({ msg: "Logged out successfully" });
  });
};
