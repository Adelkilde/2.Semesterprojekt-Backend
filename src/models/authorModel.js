// Importing necessary modules
import { Sequelize, DataTypes } from "sequelize"; // Sequelize for handling SQL database operations
import sequelize from "../script/database/database.js"; // The configured Sequelize instance

// Defining the Author model
const Author = sequelize.define(
  "Author",
  {
    author_id: {
      type: DataTypes.INTEGER, // The author_id field is an integer
      primaryKey: true, // It's the primary key
      autoIncrement: true, // It auto increments
    },
    image: {
      type: DataTypes.STRING(255), // The image field is a string with a maximum length of 255 characters
    },
    name: {
      type: DataTypes.STRING(100), // The name field is a string with a maximum length of 100 characters
      allowNull: false, // It cannot be null
    },
    birth_year: {
      type: DataTypes.INTEGER, // The birth_year field is an integer
    },
    biography: {
      type: DataTypes.TEXT, // The biography field is a text
    },
  },
  {
    freezeTableName: true, // This option disables Sequelize's automatic table name pluralization
    timestamps: false, // This option disables Sequelize's automatic addition of timestamp fields
  }
);

// Exporting the Author model
export default Author;
