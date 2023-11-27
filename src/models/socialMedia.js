import { sequelize, DataTypes } from "../script/database/database.js";
import Author from "./authors.js";

const SocialMedia = sequelize.define(
  "SocialMedia",
  {
    soMe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

SocialMedia.belongsTo(Author, { foreignKey: "author_id" });
