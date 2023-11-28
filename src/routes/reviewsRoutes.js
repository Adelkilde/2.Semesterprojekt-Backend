// Importing the Reviews model from the reviewsModel.js file
import Reviews from "../models/reviewsModel.js";

// Function to handle requests to get all reviews
async function getAllReviews(req, res) {
  // Use the findAll method on the Reviews model to get all reviews from the database
  const reviews = await Reviews.findAll();
  // Send the reviews as a JSON response
  res.json(reviews);
}

// Function to handle requests to get a review by ID
async function getReviewById(req, res) {
  // Use the findByPk method on the Reviews model to get a review by its primary key (ID)
  const review = await Reviews.findByPk(req.params.id);
  if (review) {
    // If the review is found, send it as a JSON response
    res.json(review);
  } else {
    // If the review is not found, send a 404 status code and a message
    res.status(404).send("Review not found");
  }
}

// Function to handle requests to add a new review
async function addNewReview(req, res) {
  // Use the create method on the Reviews model to create a new review with the data in the request body
  const newReview = await Reviews.create(req.body);
  // Send the new review as a JSON response
  res.json(newReview);
}

// Function to handle requests to update a review
async function updateReview(req, res) {
  // Use the findByPk method on the Reviews model to get a review by its primary key (ID)
  const review = await Reviews.findByPk(req.params.id);
  if (review) {
    // If the review is found, update it with the data in the request body
    await review.update(req.body);
    // Send the updated review as a JSON response
    res.json(review);
  } else {
    // If the review is not found, send a 404 status code and a message
    res.status(404).send("Review not found");
  }
}

// Export the route handler functions
export { getAllReviews, getReviewById, addNewReview, updateReview };
