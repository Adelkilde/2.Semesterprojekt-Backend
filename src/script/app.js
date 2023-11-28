// Importing necessary modules
import express from "express"; // Express.js for building the server
import cors from "cors"; // CORS for handling cross-origin requests
import * as authorRoutes from "../routes/authorRoutes.js"; // Routes for handling author-related requests
import * as worksRoutes from "../routes/worksRoutes.js"; // Routes for handling works-related requests
import * as reviewsRoutes from "../routes/reviewsRoutes.js"; // Routes for handling reviews-related requests
import * as contactMeRoutes from "../routes/contactMeRoutes.js"; // Routes for handling contactMe-related requests
import * as newsRoutes from "../routes/newsRoutes.js"; // Routes for handling news-related requests
import * as socialMediaRoutes from "../routes/socialMediaRoutes.js"; // Routes for handling socialMedia-related requests
// import Syncing from "./TableUpdate.js";

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

// Syncing();

// All Author Routes
app.get("/author", authorRoutes.getAllAuthors);
app.get("/author/:id", authorRoutes.getAuthorById);
app.post("/author", authorRoutes.addNewAuthor);
app.put("/author/:id", authorRoutes.updateAuthor);

// All Works Routes
app.get("/works", worksRoutes.getAllWorks);
app.get("/works/:id", worksRoutes.getWorksById);
app.post("/works", worksRoutes.addNewWorks);
app.put("/works/:id", worksRoutes.updateWorks);

// All Reviews Routes
app.get("/reviews", reviewsRoutes.getAllReviews);
app.get("/reviews/:id", reviewsRoutes.getReviewById);
app.post("/reviews", reviewsRoutes.addNewReview);
app.put("/reviews/:id", reviewsRoutes.updateReview);

// All ContactMe Routes
app.get("/contactme", contactMeRoutes.getAllContactMessages);
app.get("/contactme/:id", contactMeRoutes.getContactMessageById);
app.post("/contactme", contactMeRoutes.addNewContactMessage);
app.put("/contactme/:id", contactMeRoutes.updateContactMessage);

// All News Routes
app.get("/news", newsRoutes.getAllNews);
app.get("/news/:id", newsRoutes.getNewsById);
app.post("/news", newsRoutes.addNewNews);
app.put("/news/:id", newsRoutes.updateNews);

// All SocialMedia Routes
app.get("/socialmedia", socialMediaRoutes.getAllSocialMediaLinks);
app.get("/socialmedia/:id", socialMediaRoutes.getSocialMediaLinkById);
app.post("/socialmedia", socialMediaRoutes.addNewSocialMediaLink);
app.put("/socialmedia/:id", socialMediaRoutes.updateSocialMediaLink);

