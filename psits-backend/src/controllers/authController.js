import * as authService from "../services/authServices.js";

export const login = async (req, res) => {
  try {
    const { user, password } = req.body;

    console.log(req.sessionID);

    const result = await authService.login(user, password);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error on login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
