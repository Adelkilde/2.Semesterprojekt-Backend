import mysql from "mysql2"; // Import mysql2 library
import "dotenv/config"; // Load environment variables
import fs from "fs/promises"; // Import file system promises module

// Database configuration from environment variables
const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  multipleStatements: true, // Allow multiple SQL statements
};

// Check if SSL connection is required
if (process.env.MYSQL_CERT) {
  // Read the SSL certificate file asynchronously
  dbConfig.ssl = { ca: await fs.readFile("DigiCertGlobalRootCA.crt.pem") }; // Specify SSL certificate
}

// Create a connection to the database
const dbConnection = mysql.createConnection(dbConfig);

// Export the database connection
export default dbConnection;

// Running on: https://semesterprojekt2-deployment-with-azure.azurewebsites.net/