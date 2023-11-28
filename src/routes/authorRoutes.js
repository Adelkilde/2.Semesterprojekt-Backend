// Importing the Author model from the authorModel.js file
import Author from "../models/authorModel.js";

// Function to handle requests to get all authors
async function getAllAuthors(req, res) {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).send("Error retrieving authors");
  }
}

// Function to handle requests to get an author by ID
async function getAuthorById(req, res) {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      res.status(404).send("Author not found");
      console.log("Author not found");
      return;
    }
    res.json(author);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

// Function to handle requests to add a new author
async function addNewAuthor(req, res) {
  try {
    const newAuthor = await Author.create(req.body);
    if (!newAuthor) {
      res.status(400).send("Invalid author data");
      return;
    }
    res.json(newAuthor);
  } catch (error) {
    res.status(500).send("Error creating author");
  }
}

async function updateAuthor(req, res) {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      res.status(404).send("Author not found");
      return;
    }
    await author.update(req.body);
    res.json(author);
  } catch (error) {
    res.status(500).send("Error updating author");
  }
}

// Export the route handler functions
export { getAllAuthors, getAuthorById, addNewAuthor, updateAuthor };