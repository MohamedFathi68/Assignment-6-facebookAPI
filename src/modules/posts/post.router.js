import { Router } from "express";
import { createPost, getAllPosts, getSpecificPost, updatePost , deletePost} from "./post.controller.js";
import authenticatedToken from "../../middleware/authorization.js";
const postRoutes = Router();

postRoutes.use("/posts", authenticatedToken)  

postRoutes.post("/posts",  createPost);
postRoutes.patch("/posts/:id",  updatePost);
postRoutes.get("/posts/:id",  getSpecificPost);
postRoutes.get("/posts",  getAllPosts);
postRoutes.delete("/posts/:id",  deletePost);

export default postRoutes;
