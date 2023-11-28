// Importing necessary modules
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../script/database/database.js"; // The configured Sequelize instance

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
      type: DataTypes.INTEGER, // The work_id field is an integer
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
    timestamps: true, // This option disables Sequelize's automatic addition of timestamp fields
  }
);

// Exporting the Reviews model
export default Reviews;
