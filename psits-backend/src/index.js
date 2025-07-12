import express from "express";
import cors from "cors";
import studentRoutes from "./routes/student.route.js";
import authRoutes from "./routes/auth.route.js";
import eventRoutes from "./routes/event.route.js";
import session from "express-session";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use(
  session({
    secret: "some secret",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 60000 * 60 },
  })
);

app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

app.listen(port, () => {
  console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
  console.log(req.session);
  console.log("Session ID:", req.session.id);
  req.session.visited = true;
  res.status(201).send({ msg: "Hello" });
});
