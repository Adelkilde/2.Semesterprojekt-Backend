// Importing necessary modules
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../script/database/database.js"; // The configured Sequelize instance

// Defining the News model
const News = sequelize.define(
  "News",
  {
    news_id: {
      type: DataTypes.INTEGER, // The news_id field is an integer
      primaryKey: true, // It's the primary key
      autoIncrement: true, // It auto increments
    },
    author_id: {
      type: Sequelize.INTEGER, // The author_id field is an integer
      allowNull: false, // It cannot be null
      references: {
        model: "Author", // It references the Author model
        key: "author_id", // The foreign key is author_id
      },
    },
    headline: {
      type: DataTypes.STRING(255), // The headline field is a string with a maximum length of 255 characters
    },
    content: {
      type: DataTypes.TEXT, // The content field is a text
    },
  },
  {
    timestamps: true, // This option enables Sequelize's automatic addition of timestamp fields
  }
);

// Exporting the News model
export default News;
