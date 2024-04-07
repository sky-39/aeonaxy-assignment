import express from "express";
import {
  signup,
  login,
  logout,
  verifyEmail,
  resendVerificationMail,
  roleSelect,
  updateLocation,
  uploadProfilePic
} from "../controllers/auth.controller.js";


const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.get("/verify", verifyEmail);

router.post("/logout", logout);

router.post("/resendVerification", resendVerificationMail);

router.post('/roleSelect', roleSelect);

router.post('/updateLocation', updateLocation);

router.post('/uploadProfilePic', uploadProfilePic);

export default router;
