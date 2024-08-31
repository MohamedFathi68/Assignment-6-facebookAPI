import bcrypt from "bcrypt";

const passwordEncryption =  (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  next();
};

export default passwordEncryption;
