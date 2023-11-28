import { Sequelize } from "sequelize"; // Import Sequelize and DataTypes
import "dotenv/config"; // Load environment variables

// Create a Sequelize instance
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// Export the Sequelize instance
export default sequelize;

// Running on: https://semesterprojekt2-deployment-with-azure.azurewebsites.net/
