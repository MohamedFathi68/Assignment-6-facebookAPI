import { commentModel } from "../../database/models/comments.model.js";
import { postModel } from "../../database/models/posts.model.js";

const createComment = async (req, res) => {
  await commentModel.create(req.body);
  res.status(201).json({ message: "success" });
};

const updatecomment = async (req, res) => {
  await commentModel.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(201).json({ message: "success" });
};

const getSpecificComment = async (req, res) => {
  const comment = await commentModel.findByPk(req.params.id, {
    include: postModel,
  });
  res.status(200).json({ message: "success" , comment});
};

const getAllcomments = async (req, res) => {
  const comment = await commentModel.findAll();
  res.status(200).json({ message: "success" , comment});
};
const deleteComment = async (req, res) => {
  const comment = await commentModel.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({ message: "success" , comment});
};



export { createComment , updatecomment , getSpecificComment , getAllcomments , deleteComment};
