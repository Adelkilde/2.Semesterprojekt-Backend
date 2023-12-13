
import { DataTypes } from "sequelize";
import sequelize from "../script/database/database.js";
import { Works } from "./associations.js";


const Reviews = sequelize.define(
  "Reviews",
  {
    review_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    work_id: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: Works,
        key: "work_id",
      },
    },
    name: {
      type: DataTypes.STRING(100), 
    },
    email: {
      type: DataTypes.STRING(255), 
    },
    review_text: {
      type: DataTypes.TEXT, 
    },
    rating: {
      type: DataTypes.INTEGER, 
    },
  },
  {
    timestamps: true, 
  }
);

export default Reviews;
