import express from "express";
import contactMe from "../models/contactMe.js";
import { sequelize } from "../script/database/database.js";

const router = express.Router();
const app = express();
const PORT = process.env.PORT || 3306;

router.get("/", async (req, res) => {
  try {
    const contactMes = await contactMe.findAll();
    res.json(contactMes);
  } catch (error) {
    console.error("Error fetching authors:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synchronized.");
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

export default router;
