// Importing necessary modules
import express from "express"; // Express.js for building the server
import cors from "cors"; // CORS for handling cross-origin requests
import * as authorRoutes from "../routes/authorRoutes.js"; // Routes for handling author-related requests
import * as newsRoutes from "../routes/newsRoutes.js"; // Routes for handling news-related requests
import * as reviewsRoutes from "../routes/reviewsRoutes.js"; // Routes for handling reviews-related requests
import * as worksRoutes from "../routes/worksRoutes.js"; // Routes for handling works-related requests

// Creating an Express.js application
const app = express();
// Setting the port for the server
const port = process.env.PORT || 3333;

// Middleware for parsing JSON bodies from HTTP requests
app.use(express.json());
// Middleware for handling CORS
app.use(cors());

// Starting the server
app.listen(port, () => {
  console.log("Bingus bongus, we're running on plonkus 🍔");
});

// Route for the root of the application
app.get("/", (req, res) => {
  res.send("Semesterprojekt Database API");
});

// All Author Routes
app.get("/author", authorRoutes.getAllAuthors);
app.get("/author/:id", authorRoutes.getAuthorById);
app.post("/author", authorRoutes.addNewAuthor);
app.put("/author/:id", authorRoutes.updateAuthor);
app.delete("/author/:id", authorRoutes.deleteAuthor);

// All News Routes
app.get("/news", newsRoutes.getAllNews);
app.get("/news/:id", newsRoutes.getNewsById);
app.post("/news", newsRoutes.addNewNews);
app.put("/news/:id", newsRoutes.updateNews);
app.delete("/news/:id", newsRoutes.deleteNews);

// All Reviews Routes
app.get("/reviews", reviewsRoutes.getAllReviews);
app.get("/reviews/:id", reviewsRoutes.getReviewById);
app.post("/reviews", reviewsRoutes.addNewReview);
app.put("/reviews/:id", reviewsRoutes.updateReview);
app.delete("/reviews/:id", reviewsRoutes.deleteReview);

// All Works Routes
app.get("/works", worksRoutes.getAllWorks);
app.get("/works/:id", worksRoutes.getWorksById);
app.post("/works", worksRoutes.addNewWork);
app.put("/works/:id", worksRoutes.updateWork);
app.delete("/works/:id", worksRoutes.deleteWork);
