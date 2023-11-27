import { sequelize, DataTypes } from "../script/database/database.js";

const Author = sequelize.define(
  "Author",
  {
    author_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    biography: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

export default Author;
