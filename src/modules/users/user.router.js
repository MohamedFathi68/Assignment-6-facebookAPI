import { Router } from "express";
import {
  getAllUsers,
  getSpecificUser,
  updateUser,
  userlogin,
  userRegister,
} from "./user.controller.js";
import isEmailExist from "../../middleware/isEmailExist.js";
import passwordEncryption from "../../middleware/passwordEncryption.js";
import passwordCheck from "../../middleware/passwordCheck.js";
import isUserExist from "../../middleware/isUserExist.js";
const userRoutes = Router();

userRoutes.get("/users", getAllUsers);
userRoutes.get("/users/:id", getSpecificUser).patch("/users/:id", updateUser);
userRoutes.post("/users/register", isEmailExist, passwordEncryption , userRegister);
userRoutes.post("/users/login", isUserExist, passwordCheck , userlogin);

export default userRoutes;
