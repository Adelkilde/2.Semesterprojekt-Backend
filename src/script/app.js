import express from "express";
import authorRoutes from "../routes/authors.js";
import workRoutes from "../routes/works.js";
import ContactMeRoutes from "../routes/contactMe.js";

const app = express();
const port = 3000;

app.use("/author", authorRoutes);
app.use("/works", workRoutes);
app.use("/contact", ContactMeRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
