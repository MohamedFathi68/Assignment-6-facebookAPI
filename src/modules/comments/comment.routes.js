import { Router } from "express";
const commentRoutes = Router();
import { updatecomment , createComment, getAllcomments , deleteComment} from "./comment.controller.js";

commentRoutes.post("/comments/:postId",  createComment);
commentRoutes.patch("/comments/:commentId/:postId",  updatecomment);
commentRoutes.get("/comments/:postId",  getAllcomments);
commentRoutes.delete("/comments/:id",  deleteComment);

export default commentRoutes;
