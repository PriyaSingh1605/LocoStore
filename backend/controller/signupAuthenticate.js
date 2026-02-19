import UserModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../util/SecretToken.js";

const Signup = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (user) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = generateToken(newUser.id);
    console.log("token", token);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res.status(200).json({
      success: true,
      message: "Signup successful",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Signup failed",
    });
  }
};

const Login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "user not registered",
    });
  }

  try {
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(400)
        .json({ success: false, message: "incorrect password" });
    }
    const token = generateToken(user.id);
    console.log("token", token);

    res.cookie("token", token, {
      httpOnly: true, // JS access nahi kar sakta → secure
      secure: false, // true only in HTTPS production
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Login failed",
    });
  }
};

const Logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // true only in https
  });
  return res.json({
    status: true,
    message: "Logged out successfully",
  });
};

export { Signup, Login, Logout };
