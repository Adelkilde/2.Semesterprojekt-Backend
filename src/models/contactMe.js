// contactMeModel.js

import { sequelize, DataTypes } from "../script/database/database.js";

const ContactMe = sequelize.define(
  "ContactMe",
  {
    contact_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    submitted_date: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

export default ContactMe;
