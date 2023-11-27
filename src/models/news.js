import { sequelize, DataTypes } from "../script/database/database.js";
import Author from "./authors.js";

const News = sequelize.define(
  "News",
  {
    news_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    headline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_date: {
      type: DataTypes.DATE,
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

News.belongsTo(Author, { foreignKey: "author_id" });

export default News;
