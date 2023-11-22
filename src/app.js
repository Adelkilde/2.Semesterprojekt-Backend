import express from "express";
import authorRoutes from "./routes/authors.js";
import workRoutes from "./routes/works.js";

const app = express();
const port = 3000;

app.use("/authors", authorRoutes);
app.use("/works", workRoutes);

app.listen(port, () => {
  console.log(`Serveren kører på http://localhost:${port}`);
});
