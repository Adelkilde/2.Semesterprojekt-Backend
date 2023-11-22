import { sequelize, DataTypes } from "../database.js";

const Work = sequelize.define(
  "Work",
  {
    work_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    average_rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
    purchase_link: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Work;
