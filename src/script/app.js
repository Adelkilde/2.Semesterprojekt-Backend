import express from "express";
import authorRoutes from "../routes/authors.js";
import contactMeRoutes from "../routes/contactMe.js";
import newsRoutes from "../routes/news.js";
import reviewsRoutes from "../routes/reviews.js";
import socialMediaRoutes from "../routes/socialMedia.js";
import worksRoutes from "../routes/works.js";

const app = express();
const port = 3000;

app.use("/author", authorRoutes);
app.use("/contact", contactMeRoutes);
app.use("/news", newsRoutes);
app.use("/reviews", reviewsRoutes);
app.use("/socialmedia", socialMediaRoutes);
app.use("/works", worksRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
