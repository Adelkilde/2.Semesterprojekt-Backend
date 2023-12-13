// Importing necessary modules
import { DataTypes } from "sequelize";
import sequelize from "../script/database/database.js"; 
import Author from "./authorModel.js";


const News = sequelize.define(
  "News",
  {
    news_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    author_id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: Author, 
        key: "author_id", 
      },
    },
    headline: {
      type: DataTypes.STRING(255), 
    },
    content: {
      type: DataTypes.TEXT, 
    },
  },
  {
    timestamps: true, 
  }
);

export default News;
