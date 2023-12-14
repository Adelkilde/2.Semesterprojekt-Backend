import express from "express";
import cors from "cors";
import * as authorRoutes from "../routes/authorRoutes.js";
import * as newsRoutes from "../routes/newsRoutes.js";
import * as reviewsRoutes from "../routes/reviewsRoutes.js";
import * as worksRoutes from "../routes/worksRoutes.js";

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());

app.use(cors());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Gyldmark Database");
});

app.get("/author", authorRoutes.getAllAuthors);
app.get("/author/:id", authorRoutes.getAuthorById);
app.post("/author", authorRoutes.addNewAuthor);
app.put("/author/:id", authorRoutes.updateAuthor);
app.delete("/author/:id", authorRoutes.deleteAuthor);

app.get("/news", newsRoutes.getAllNews);
app.get("/news/:id", newsRoutes.getNewsById);
app.post("/news", newsRoutes.addNewNews);
app.put("/news/:id", newsRoutes.updateNews);
app.delete("/news/:id", newsRoutes.deleteNews);

app.get("/reviews", reviewsRoutes.getAllReviews);
app.get("/reviews/:id", reviewsRoutes.getReviewById);
app.post("/reviews", reviewsRoutes.addNewReview);
app.put("/reviews/:id", reviewsRoutes.updateReview);
app.delete("/reviews/:id", reviewsRoutes.deleteReview);

app.get("/works", worksRoutes.getAllWorks);
app.get("/works/:id", worksRoutes.getWorksById);
app.post("/works", worksRoutes.addNewWork);
app.put("/works/:id", worksRoutes.updateWork);
app.delete("/works/:id", worksRoutes.deleteWork);
