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
  res.status(201).json({ message: "userName updated succesfully" });
};

const userRegister = async (req, res) => {
  await userModel.create(req.body);
  res.status(201).json({ message: "Success" });
};

const userlogin = async (req, res) => {
  jwt.sign(req.body.email, "hambozo", (err, token) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "internal server error" });
      return;
    } else {
      res.status(201).json({ message: "Success", token });
    }
  });
  // const {id} = await userModel.findOne({ where: { email: req.body.email } });
  // return id;
};

export { userRegister, getAllUsers, getSpecificUser, updateUser, userlogin };
