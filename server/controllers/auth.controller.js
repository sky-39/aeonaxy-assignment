import generateTokenAndSetCookie from "../utils/generateToken.js";
import User from "./../models/user.model.js";
import bcrypt from "bcryptjs";
import { sendVerificationMail } from "../emailVerification/sendVerificationMail.js";


export const signup = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    let user = await User.findOne({ username: username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      await sendVerificationMail(newUser.fullName, newUser.email, newUser._id);

      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        profile: newUser.profilePic,
        location: newUser.location,
        is_verified: newUser.is_verified,
      });
    } else {
      res.status(400).json("Invalid user data");
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const id = req.query.id;
    const updatedUser = await User.updateOne(
      { _id: id },
      { $set: { is_verified: true } }
    );
    res.status(201).json({ updatedUser });
  } catch (error) {
    console.log("Error in  verifing email", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      res.status(400).json({ error: "Invalid Username or Password" });
    } else {
      generateTokenAndSetCookie(user._id, res);

      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        profilePic: user.profilePic,
        location: user.location,
        is_verified: user.is_verified,
      });
    }
  } catch (err) {
    console.log("Error in login controller.. ", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.log("Error in logout controller.. ", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const resendVerificationMail = async (req, res) => {
  try {
    const id = req.query.id;
    const user = await User.findOne({ _id: id });

    const email = user.email;
    const name = user.fullName;

    await sendVerificationMail(name, email, id);
    return res
      .status(200)
      .json({ message: "Verification mail sent successfully" });
  } catch (error) {
    console.log("Error in resend controller.. ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const roleSelect = async (req, res) => {
  try {
    const id = req.query.id;
    const data = req.body;
    const updatedData = Object.values(data);

    const updated = await User.updateOne(
      { _id: id },
      { $set: { whyOnDribble: updatedData } }
    );
    res.status(200).json({ message: "Role updated", updated: updated });
  } catch (error) {
    console.log("Error in Role updation controller..", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateLocation = async (req, res) => {
  try {
    const id = req.query.id;  
    const {location} = req.body;
    const updated = await User.updateOne({_id : id}, { $set: {location : location}})

    if(updated.modifiedCount===0){
      return  res.status(500).json({error:"Location could not be updated"});
    }
    res.status(200).json({ message: "Location updated successfully"});
  } catch (error) {
    console.log("Error in update profile controller..", error.message); 
    res.status(500).json({error: "Internal server error"});
  }
};


export const uploadProfilePic = async (req, res) => {
  try {
    const {secure_url} = req.body;
    const id = req.query.id;
    const updated = await User.updateOne({_id : id}, {$set: {profilePic: secure_url}})

    if(updated.modifiedCount===0) {
      return res.status(500).json({error:"Profile Picture could not be updated"});
    }

    res.status(200).json({message : "Profile Picture updated successfully"})

  } catch (error) {
    console.log("Error in upload profile pic controller", error.message);
    res.status(500).json({error: "Internal server error"});
  }
}