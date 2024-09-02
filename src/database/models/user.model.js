import { DataTypes } from "sequelize";
import connection from "../dbConnection.js";

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
