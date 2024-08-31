import { Router } from "express";
const commentRoutes = Router();
import { updatecomment , createComment, getSpecificComment, getAllcomments , deleteComment} from "./comment.controller.js";

commentRoutes.post("/comments",  createComment);
commentRoutes.patch("/comments/:id",  updatecomment);
commentRoutes.get("/comments/:id",  getSpecificComment);
commentRoutes.get("/comments",  getAllcomments);
commentRoutes.delete("/comments/:id",  deleteComment);

export default commentRoutes;
