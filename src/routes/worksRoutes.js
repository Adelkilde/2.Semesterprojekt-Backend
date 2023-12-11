// Importing the Works model from the worksModel.js file
import { Works } from "../models/associations.js";
// Function to handle requests to get all works
async function getAllWorks(req, res) {
  try {
    // Use the findAll method on the Works model to get all works
    const works = await Works.findAll();
    // Send the works as a JSON response
    res.json(works);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Error retrieving works");
  }
}

// Function to handle requests to get a work by ID
async function getWorksById(req, res) {
  try {
    // Use the findByPk method on the Works model to get a work by its primary key (ID)
    const works = await Works.findByPk(req.params.id);
    if (!works) {
      // If the work is not found, send a 404 status code and a message
      res.status(404).send("Works not found");
      console.log("Works not found");
      return;
    }
    // Send the work as a JSON response
    res.json(works);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

// Function to handle requests to add a new work
async function addNewWork(req, res) {
  try {
    // Use the create method on the Works model to add a new work
    const newWork = await Works.create(req.body);
    if (!newWork) {
      // If the new work is null, send a 400 status code and a message
      res.status(400).send("Invalid works data");
      return;
    }
    // Send the new work as a JSON response
    res.json(newWork);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

// Function to handle requests to update a work
async function updateWork(req, res) {
  try {
    // Use the findByPk method on the Works model to get a work by its primary key (ID)
    const works = await Works.findByPk(req.params.id);
    if (!works) {
      // If the work is not found, send a 404 status code and a message
      res.status(404).send("Works not found");
      console.log("Works not found");
      return;
    }
    // Use the update method on the Works model to update a work
    await works.update(req.body);
    // Send the updated work as a JSON response
    res.json(works);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

async function deleteWork(req, res) {
  try {
    // Use the findByPk method on the Works model to get a work by its primary key (ID)
    const works = await Works.findByPk(req.params.id);
    if (!works) {
      // If the work is not found, send a 404 status code and a message
      res.status(404).send("Works not found");
      console.log("Works not found");
      return;
    }
    // Use the destroy method on the Works model to delete a work
    await works.destroy();
    // Send a 204 status code
    res.status(204).end();
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Error deleting works");
  }
}

// Export the route handler functions
export { getAllWorks, getWorksById, addNewWork, updateWork, deleteWork };
