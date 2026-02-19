import User from "../model/userModel.js";
import jwt from "jsonwebtoken";

const UserVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token; 
    if (!token)
      return res.status(401).json({ status: false, message: "No token" });

    const data = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(data.id);
    if (!user)
      return res.status(404).json({ status: false, message: "User not found" });

    req.userId = user._id.toString(); 
    next();
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(403).json({ status: false, message: "Forbidden" });
  }
};

export default UserVerification;
