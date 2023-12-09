// Importing the Reviews model from the reviewsModel.js file
import { Reviews } from "../models/associations.js";

// Function to handle requests to get all reviews
async function getAllReviews(req, res) {
  try {
    // Use the findAll method on the Reviews model to get all reviews
    const reviews = await Reviews.findAll();
    // Send the reviews as a JSON response
    res.json(reviews);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Error retrieving reviews");
  }
}

// Function to handle requests to get a review by ID
async function getReviewById(req, res) {
  try {
    // Use the findByPk method on the Reviews model to get a review by its primary key (ID)
    const review = await Reviews.findByPk(req.params.id);
    if (!review) {
      // If the review is not found, send a 404 status code and a message
      res.status(404).send("Review not found");
      console.log("Review not found");
      return;
    }
    // Send the review as a JSON response
    res.json(review);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

// Function to handle requests to add a new review
async function addNewReview(req, res) {
  try {
    // Use the create method on the Reviews model to add a new review
    const newReview = await Reviews.create(req.body);
    if (!newReview) {
      // If the new review is null, send a 400 status code and a message
      res.status(400).send("Invalid review data");
      return;
    }
    // Send the new review as a JSON response
    res.json(newReview);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

// Function to handle requests to update a review
async function updateReview(req, res) {
  try {
    // Use the findByPk method on the Reviews model to get a review by its primary key (ID)
    const review = await Reviews.findByPk(req.params.id);
    if (!review) {
      // If the review is not found, send a 404 status code and a message
      res.status(404).send("Review not found");
      return;
    }
    // Use the update method on the review to update the review data
    await review.update(req.body);
    // Send the updated review as a JSON response
    res.json(review);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

async function deleteReview(req, res) {
  try {
    const review = await Reviews.findByPk(req.params.id);
    if (!review) {
      res.status(404).send("Review not found");
      return;
    }
    await review.destroy();
    res.json(review);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

// Export the route handler functions
export {
  getAllReviews,
  getReviewById,
  addNewReview,
  updateReview,
  deleteReview,
};
