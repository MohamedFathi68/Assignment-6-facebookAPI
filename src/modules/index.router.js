import { Router } from "express";
const indexRouter = Router();

import userRoutes from "./users/user.router.js";
import postRoutes from "./posts/post.router.js";
import commentRoutes from "./comments/comment.routes.js";

indexRouter.use("/v1", userRoutes);
indexRouter.use("/v1", postRoutes);
indexRouter.use("/v1", commentRoutes);

export default indexRouter;
