import express from "express";
import cors from "cors";
import studentRoutes from "./routes/student.route.js";
import authRoutes from "./routes/auth.route.js";
import eventRoutes from "./routes/event.route.js";
import postRoutes from "./routes/post.route.js";
import session from "express-session";

const app = express();
const port = 3000;
app.set("trust proxy", 1); // trust first proxy
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);

app.use(
  session({
    name: "qid",
    cookie: {
      maxAge: 1000 * 60 * 20,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
    saveUninitialized: false,
    secret: "default secret",
    resave: false,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
  console.log(req.session);
  console.log("Session ID:", req.session.id);
  req.session.visited = true;
  res.status(201).send({ msg: "Hello" });
});
