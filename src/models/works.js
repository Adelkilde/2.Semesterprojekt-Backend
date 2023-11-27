import { sequelize, DataTypes } from "../script/database/database.js";
import Author from "./authors.js";

const Work = sequelize.define(
  "Work",
  {
    work_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publication_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    publisher: {
      type: DataTypes.STRING,
    },
    average_rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
    purchase_link: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
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

Work.belongsTo(Author, { foreignKey: "author_id" });

export default Work;
