import jwt from "jsonwebtoken";
import { userModel } from "../database/models/user.model.js";
import { postModel } from "../database/models/posts.model.js";

const postAuthorized = async (req, res, next) => {
  const token = req.headers.token;
  jwt.verify(token, "hambozo",async (error, decoded)=>{
    if (error) {
      res.status(401).json({message: 'Invalid token'})
    } else {
      let {id} = decoded;
      let allowed = await postModel.findOne({ where: { userId: id } });
      if (allowed) {
        next();
      } else {
        res.status(403).json({message: "Not allowed to do actions on this post"})
      }
    }
  });
};

export default postAuthorized;
