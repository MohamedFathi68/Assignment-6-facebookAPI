import { DataTypes } from "sequelize";
import connection from "../dbConnection.js";
import { postModel } from "./posts.model.js";
import { commentModel } from "./comments.model.js";

export const userModel = connection.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false },
  { indexes: [{ unique: true, fields: ["email"] }] }
);
