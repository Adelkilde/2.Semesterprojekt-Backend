import express from "express";
import ContactMe from "../models/contactMe.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("GET-ruten blev ramt");
    const ContactMes = await ContactMe.findAll();
    console.log("Data fra databasen:", ContactMes);
    res.json(ContactMes);
  } catch (error) {
    console.error("Fejl ved hentning af forfattere:", error);
    res.status(500).send("Der opstod en fejl ved hentning af forfattere.");
  }
});

export default router;
