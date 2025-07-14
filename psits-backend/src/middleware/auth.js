export const requireLogin = (req, res, next) => {
  if (!req.session?.user) {
    return res.status(401).json({ error: "Unauthorized: Please login" });
  }
  next();
};

export const authorizeAdmin = (req, res, next) => {
  console.log("im in middleware:", req.session);

  if (!req.session?.user?.isAdmin) {
    return res.status(403).json({ error: "Forbidden: Admins only" });
  }

  next();
};
