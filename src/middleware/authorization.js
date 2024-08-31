import jwt from "jsonwebtoken";
import { userModel } from "../database/models/user.model.js";

const authenticatedToken = async (req, res, next) => {
  const token = req.headers.token;
  let decoded = jwt.verify(token, "hambozo");
  let user = await userModel.findOne({ where: { email: decoded.id } });
  if (decoded) {
    req.user= user
    next();
  } else {
    return res.status(403).json({ message: "Unauthorized 1" });
  }
};

export default authenticatedToken;
