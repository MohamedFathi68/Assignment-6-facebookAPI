import { userModel } from "../database/models/user.model.js";

const isUserExist = async (req, res, next) => {
  const userFounded = await userModel.findOne({
    where: { email: req.body.email },
  });
  if(userFounded!=null) {
    console.log("User found");
    next();
  }else{
    res.status(404).json({message:"email not found"});
    return
  }
};

export default isUserExist;
