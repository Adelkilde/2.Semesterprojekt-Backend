import { Reviews } from "../models/associations.js";

async function getAllReviews(req, res) {
  try {
    const reviews = await Reviews.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).send("Error retrieving reviews");
  }
}

async function getReviewById(req, res) {
  try {
    const review = await Reviews.findByPk(req.params.id);
    if (!review) {
      res.status(404).send("Review not found");
      console.log("Review not found");
      return;
    }
    res.json(review);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

async function addNewReview(req, res) {
  try {
    const newReview = await Reviews.create(req.body);
    if (!newReview) {
      res.status(400).send("Invalid review data");
      return;
    }
    res.json(newReview);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

async function updateReview(req, res) {
  try {
    const review = await Reviews.findByPk(req.params.id);
    if (!review) {
      res.status(404).send("Review not found");
      return;
    }
    await review.update(req.body);
    res.json(review);
  } catch (error) {
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

export {
  getAllReviews,
  getReviewById,
  addNewReview,
  updateReview,
  deleteReview,
};
