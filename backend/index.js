import express from "express";
import multer from "multer";
import cors from "cors";

import mongoose from "mongoose";

import { registerValidation } from "./validations/auth.js";
import { loginValidation } from "./validations/login.js";

import checkAuth from "./utils/checkAuth.js";
import { register, login, getMe } from "./controllers/userController.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";

mongoose
  .connect(process.env.mongoDB)
  .then(() => {
    console.log("db works");
  })
  .catch((err) => {
    console.log("db error", err);
  });

const app = express();

const storage = multer.diskStorage({
  destination: (_, __, callback) => {
    callback(null, "uploads");
  },
  filename: (_, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());
app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/upload/${req.file.originalname}`,
  });
});

app.post("/auth/login", loginValidation, handleValidationErrors, login);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  register
);
app.get("/auth/me", checkAuth, getMe);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server works");
});
