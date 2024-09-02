import { commentModel } from "../../database/models/comments.model.js";
import { postModel } from "../../database/models/posts.model.js";
import jwt from "jsonwebtoken";
import { userModel } from "../../database/models/user.model.js";

const createComment = async (req, res) => {
  jwt.verify(req.headers.token, "hambozo", async (error, decoded) => {
    if (error) {
      res.status(401).json({ message: "Invalid token" });
    } else {
      req.body.userId = decoded.id;
      console.log(1);
    }
  });
  req.body.postId = req.params.postId;
  console.log(2);

  await commentModel.create(req.body);
  console.log(3);

  res.status(201).json({ message: "success" });
};

const updatecomment = async (req, res) => {
  jwt.verify(req.headers.token, "hambozo", async (error, decoded) => {
    if (error) {
      res.status(401).json({ message: "Invalid token" });
    } else {
      req.body.userId = decoded.id;
      console.log(1);
    }
  });

  req.body.postId = req.params.postId;
  await commentModel.update(req.body, {
    where: { id: req.params.commentId },
  });
  res.status(201).json({ message: "success" });
};


const getAllcomments = async (req, res) => {
  const comment = await commentModel.findAll({
    where:{postId: req.params.postId},
    attributes: { exclude: ["userId"] },
    include: {
      model: userModel,
      attributes: { exclude: ["password", "email"] },
    },
  });
  res.status(200).json({ message: "success", comment });
};
const deleteComment = async (req, res) => {
  jwt.verify(req.headers.token, "hambozo", async (error, decoded) => {
    if (error) {
      res.status(401).json({ message: "Invalid token" });
    } else {
       decoded.id;
       const comment = await commentModel.destroy({
         where: { id: req.params.id , userId: decoded.id},
       });
       res.status(200).json({ message: "comment deleted successfully" });
    }
  });
};

export {
  createComment,
  updatecomment,
  getAllcomments,
  deleteComment,
};
