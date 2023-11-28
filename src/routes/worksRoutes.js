// Importing the Works model from the worksModel.js file
import Works from "../models/worksModel.js";

// Function to handle requests to get all works
async function getAllWorks(req, res) {
  try {
    // Use the findAll method on the Works model to get all works from the database
    const works = await Works.findAll();
    // Send the works as a JSON response
    res.json(works);
  } catch (error) {
    console.error("Error fetching all works:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle requests to get a work by ID
async function getWorksById(req, res) {
  try {
    // Use the findByPk method on the Works model to get a work by its primary key (ID)
    const works = await Works.findByPk(req.params.id);
    if (works) {
      // If the work is found, send it as a JSON response
      res.json(works);
    } else {
      // If the work is not found, send a 404 status code and a message
      res.status(404).send("Work not found");
    }
  } catch (error) {
    console.error("Error fetching work by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle requests to add a new work
async function addNewWorks(req, res) {
  try {
    // Use the create method on the Works model to create a new work with the data in the request body
    const newWorks = await Works.create(req.body);
    // Send the new work as a JSON response
    res.json(newWorks);
  } catch (error) {
    console.error("Error adding new work:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle requests to update a work
async function updateWorks(req, res) {
  try {
    // Use the findByPk method on the Works model to get a work by its primary key (ID)
    const works = await Works.findByPk(req.params.id);
    if (works) {
      // If the work is found, update it with the data in the request body
      await works.update(req.body);
      // Send the updated work as a JSON response
      res.json(works);
    } else {
      // If the work is not found, send a 404 status code and a message
      res.status(404).send("Work not found");
    }
  } catch (error) {
    console.error("Error updating work:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Export the route handler functions
export { getAllWorks, getWorksById, addNewWorks, updateWorks };
