import { Router } from "express";
import { createPost, getAllPosts, getSpecificPost, updatePost , deletePost} from "./post.controller.js";
import postAuthorized from "../../middleware/authorization.js";
const postRoutes = Router();


postRoutes.post("/posts",  createPost);
postRoutes.patch("/posts/:id",postAuthorized, updatePost);
postRoutes.get("/posts/:id",  getSpecificPost);
postRoutes.get("/posts",  getAllPosts);
postRoutes.delete("/posts/:id", postAuthorized , deletePost);

export default postRoutes;
