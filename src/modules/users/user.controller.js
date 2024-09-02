import { postModel } from "../../database/models/posts.model.js";
import { userModel } from "../../database/models/user.model.js";
import jwt from "jsonwebtoken";

const getAllUsers = async (req, res) => {
  const users = await userModel.findAll({
    attributes: { exclude: ["password"] },
    include: {
      model: postModel,
      attributes: { exclude: ["userId"] },
    },
  });
  res.status(200).json({ message: "Success", users });
};

const getSpecificUser = async (req, res) => {
  const user = await userModel.findByPk(req.params.id, {
    attributes: { exclude: ["password"] },
    include: {
      model: postModel,
      attributes: { exclude: ["userId"] },
    },
  });
  if (user) {
    res.status(200).json({ message: "Success", user });
  } else {
    res.status(404).json({ message: "error 404 , user not found" });
  }
};

const updateUser = async (req, res) => {
  const user = await userModel.update(
    { userName: req.body.userName, password: req.body.password },
    { where: { id: req.params.id } }
  );
  res.status(201).json({ message: "Updated succesfully" });
};

const userRegister = async (req, res) => {
  await userModel.create(req.body);
  res.status(201).json({ message: "Account created successfully." });
};

const userlogin = async (req, res) => {
  const user = await userModel.findOne({ where: { email: req.body.email } });
  console.log(user);
  
  jwt.sign( user.dataValues , "hambozo", (err, token) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "internal server error 3" , Error: err });
    } else {
      res.status(201).json({ message: "Loged in successfully", token });
    }
  });
};

export { userRegister, getAllUsers, getSpecificUser, updateUser, userlogin };
