import express from "express";
import { Sequelize, DataTypes } from "sequelize";

const app = express();
const port = 3000; // Du kan ændre dette til den ønskede port

console.log(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, process.env.MYSQL_HOST);

// Opret forbindelse til databasen
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: "mysql",
});

// Definer en model
const Author = sequelize.define("Author", {
  id: {
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
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synkronisér modellen med databasen (opretter tabellen)
Author.sync()
  .then(() => {
    console.log("Author-modellen er klar");
  })
  .catch((error) => {
    console.error("Fejl ved synkronisering af Author-modellen:", error);
  });

// Opret en GET-rute for at hente alle forfattere
app.get("/authors", async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    console.error("Fejl ved hentning af forfattere:", error);
    res.status(500).send("Der opstod en fejl ved hentning af forfattere.");
  }
});

// Start serveren
app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});
