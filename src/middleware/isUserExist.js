import { userModel } from "../database/models/user.model.js";

const isUserExist = async (req, res, next) => {
  const userFounded = await userModel.findOne({
    where: { email: req.body.email },
  });
  if(userFounded) {
    console.log("User found");
    next();
  }else{
    res.status(404).json({message:"email not found 1"});
    return
  }
};

export default isUserExist;
