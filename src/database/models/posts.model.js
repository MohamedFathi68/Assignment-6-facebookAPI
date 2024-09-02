import { DataTypes } from "sequelize";
import connection from "../dbConnection.js";
import { userModel } from "./user.model.js";
import { commentModel } from "./comments.model.js";

export const postModel = connection.define(
  "posts",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

userModel.hasMany(postModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
postModel.belongsTo(userModel);

postModel.hasMany(commentModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
commentModel.belongsTo(postModel);

userModel.hasMany(commentModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
commentModel.belongsTo(userModel);
