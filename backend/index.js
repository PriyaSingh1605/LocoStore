import "dotenv/config";

import express from "express";
import mongoose from "mongoose";
import AuthRoute from "./routes/AuthRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(cookieParser());

const uri = process.env.MONGODB_URL;
const port = process.env.PORT;

const mongoConnection = async () => {
  try {
    await mongoose.connect(uri);
    console.log("mongodb connected");
  } catch (e) {
    console.log(e);
  }
};

app.use("/", AuthRoute);

app.listen(port, () => {
  console.log("App started");
  mongoConnection();
});
