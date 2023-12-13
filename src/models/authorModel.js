import { DataTypes } from "sequelize"; 
import sequelize from "../script/database/database.js"; 


const Author = sequelize.define(
  "Author",
  {
    author_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    name: {
      type: DataTypes.STRING(100), 
      allowNull: false,
    },
    birth_year: {
      type: DataTypes.INTEGER, 
    },
    biography: {
      type: DataTypes.TEXT, 
    },
    image: {
      type: DataTypes.STRING(255), 
    },
  },
  {
    freezeTableName: true, 
    timestamps: false, 
  }
);

export default Author;
