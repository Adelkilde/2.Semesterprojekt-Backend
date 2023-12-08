// Importing necessary modules
import { DataTypes } from "sequelize"; // Sequelize for handling SQL database operations
import sequelize from "../script/database/database.js"; // The configured Sequelize instance
import Author from "./authorModel.js"; // The Author model
import Reviews from "./reviewsModel.js";

// Defining the Works model
const Works = sequelize.define(
  "Works",
  {
    work_id: {
      type: DataTypes.INTEGER, // The work_id field is an integer
      primaryKey: true, // It's the primary key
      autoIncrement: true, // It auto increments
    },
    author_id: {
      type: DataTypes.INTEGER, // The author_id field is an integer
      allowNull: false, // It cannot be null
      references: {
        model: Author, // It references the Author model
        key: "author_id", // The foreign key is author_id
      },
    },
    title: {
      type: DataTypes.STRING, // The title field is a string
      allowNull: false, // It cannot be null
    },
    publication_date: {
      type: DataTypes.DATE, // The publication_date field is a date
      allowNull: false, // It cannot be null
    },
    publisher: {
      type: DataTypes.STRING, // The publisher field is a string
      allowNull: false, // It cannot be null
    },
    description: {
      type: DataTypes.TEXT, // The description field is a text
      allowNull: false, // It cannot be null
    },
    image: {
      type: DataTypes.STRING, // The image field is a string
      allowNull: false, // It cannot be null
    },
  },
  {
    timestamps: false, // This option disables Sequelize's automatic addition of timestamp fields
  }
);
Works.hasMany(Reviews, {
  foreignKey: "work_id",
  onDelete: "CASCADE",
});

// Exporting the Works model
export default Works;
