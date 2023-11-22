import { Sequelize, DataTypes } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  insecureAuth: true,
  logging: console.log,
});

export { sequelize, DataTypes };
