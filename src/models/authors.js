import { sequelize, DataTypes } from "../script/database/database.js";

const Author = sequelize.define(
  "Author",
  {
    author_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    biography: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Author;
