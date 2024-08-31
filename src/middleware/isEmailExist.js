import { userModel } from "../database/models/user.model.js";

const isEmailExist = async (req, res, next) => {
  const emailFounded = await userModel.findOne({
    where: { email: req.body.email },
  });
  if(emailFounded){
    res.status(401).json({message:"email already registerd"})
  }else{
    next();
  }
};

export default isEmailExist;
