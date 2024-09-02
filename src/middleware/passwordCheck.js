import bcrypt from "bcrypt";
import { userModel } from "../database/models/user.model.js";

const passwordCheck = async (req, res, next) => {
  let user = await userModel.findOne({ where: { email: req.body.email } });
  console.log(user);
  let match = bcrypt.compareSync(req.body.password, user.dataValues.password);
  if (match) {
    console.log("Password match");
    next();
  } else {
    res.status(403).json({ message: "Incorrect password 2" });
  }
};

export default passwordCheck;
