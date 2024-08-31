import bcrypt from "bcrypt";
import { userModel } from "../database/models/user.model.js";

const passwordCheck = async (req, res, next) => {
  try {
    let user = await userModel.findOne({ where: { email: req.body.email } });
    console.log(user);
    let match = bcrypt.compareSync(req.body.password, user.dataValues.password);
    if (match) {
      console.log("Password match");
      req.userId = user.dataValues.id;
      next();
    } else {
      res.status(403).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default passwordCheck;
