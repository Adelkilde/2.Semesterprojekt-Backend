// Importing necessary modules
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../script/database/database.js"; // The configured Sequelize instance

// Defining the SocialMedia model
const SocialMedia = sequelize.define(
  "SocialMedia",
  {
    soMe_id: {
      type: DataTypes.INTEGER, // The soMe_id field is an integer
      primaryKey: true, // It's the primary key
      autoIncrement: true, // It auto increments
    },
    author_id: {
      type: DataTypes.INTEGER, // The author_id field is an integer
    },
    platform: {
      type: DataTypes.STRING(255), // The platform field is a string with a maximum length of 255 characters
    },
    link: {
      type: DataTypes.STRING(255), // The link field is a string with a maximum length of 255 characters
    },
  },
  {
    freezeTableName: true, // This option disables Sequelize's automatic table name pluralization
    timestamps: false, // This option disables Sequelize's automatic addition of timestamp fields
  }
);

// Exporting the SocialMedia model
export default SocialMedia;
