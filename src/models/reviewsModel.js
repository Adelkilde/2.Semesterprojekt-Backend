// Importing necessary modules
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../script/database/database.js"; // The configured Sequelize instance
import Works from "./worksModel.js";

// Defining the Reviews model
const Reviews = sequelize.define(
  "Reviews",
  {
    review_id: {
      type: DataTypes.INTEGER, // The review_id field is an integer
      primaryKey: true, // It's the primary key
      autoIncrement: true, // It auto increments
    },
    work_id: {
      type: Sequelize.INTEGER, // The work_id field is an integer
      allowNull: false, // It cannot be null
      references: {
        model: Works, // It references the Works model
        key: "work_id", // The foreign key is work_id
      },
    },
    name: {
      type: DataTypes.STRING(100), // The name field is a string with a maximum length of 100 characters
    },
    email: {
      type: DataTypes.STRING(255), // The email field is a string with a maximum length of 255 characters
    },
    review_text: {
      type: DataTypes.TEXT, // The review_text field is a text
    },
    rating: {
      type: DataTypes.INTEGER, // The rating field is an integer
    },
  },
  {
    timestamps: true, // This option enables Sequelize's automatic addition of timestamp fields
  }
);

// Exporting the Reviews model
export default Reviews;
