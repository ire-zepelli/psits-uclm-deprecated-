import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoute.js";
import authRoutes from "./routes/authRoute.js";
import eventRoutes from "./routes/eventRoute.js";
import session from "express-session";

const app = express();
const port = 3000;

app.use(
  session({
    secret: "some secret",
    cookie: { maxAge: 30000 },
    saveUninitialized: false,
  })
);
app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

app.listen(port, () => {
  console.log("Listening on port 3000");
});
