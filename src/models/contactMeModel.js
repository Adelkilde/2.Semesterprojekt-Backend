// Importing necessary modules
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../script/database/database.js"; // The configured Sequelize instance

// Defining the ContactMe model
const ContactMe = sequelize.define(
  "ContactMe",
  {
    contact_id: {
      type: DataTypes.INTEGER, // The contact_id field is an integer
      primaryKey: true, // It's the primary key
      autoIncrement: true, // It auto increments
    },
    name: {
      type: DataTypes.STRING(100), // The name field is a string with a maximum length of 100 characters
    },
    email: {
      type: DataTypes.STRING(255), // The email field is a string with a maximum length of 255 characters
    },
    message: {
      type: DataTypes.TEXT, // The message field is a text
    },
  },
  {
    freezeTableName: true, // This option disables Sequelize's automatic table name pluralization
    timestamps: true, // This option enables Sequelize's automatic addition of timestamp fields
  }
);

// ContactMe.sync()
//   .then((data) => {
//     console.log("ContactMe table created"); // Logging to the console a message that the ContactMe table has been created
//   })
//   .catch((err) => {
//     console.log("ContactMe table could not be created"); // Logging to the console a message that the ContactMe table could not be created
//   }); // Syncing the model with the database

// Exporting the ContactMe model
export default ContactMe;
