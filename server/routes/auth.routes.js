import express from "express";
import {
  signup,
  login,
  logout,
  verifyEmail,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.get("/verify", verifyEmail);

router.post("/logout", logout);

export default router;
