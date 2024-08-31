import { DataTypes } from "sequelize";
import connection from "../dbConnection.js";

export const commentModel = connection.define("comments", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
