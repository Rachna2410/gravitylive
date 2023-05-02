import express from "express";
import cors from "cors";
// import { readdirSync } from "fs";
import mongoose from "mongoose";
// import csrf from "csurf";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

// create express app
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://localhost:3000", // frontend URI (ReactJS)
};

// db
mongoose
  .connect(process.env.MongoDB_URI, {})
  .then(() => console.log("**DB CONNECTED**"))
  .catch((err) => console.log("DB CONNECTION ERR => ", err));

// apply middlewares
app.use(cors(corsOptions));
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

// route
app.use("/api/user", userRoutes);
app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.get("/", (req, res) => {
  res.status(201).json({ message: "Connected to Backend!" });
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
