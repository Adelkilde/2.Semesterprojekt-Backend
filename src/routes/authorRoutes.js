// Importing the Author model from the authorModel.js file
import Author from "../models/authorModel.js";

// Function to handle requests to get all authors
async function getAllAuthors(req, res) {
  // Use the findAll method on the Author model to get all authors from the database
  const authors = await Author.findAll();
  // Send the authors as a JSON response
  res.json(authors);
}

// Function to handle requests to get an author by ID
async function getAuthorById(req, res) {
  // Use the findByPk method on the Author model to get an author by its primary key (ID)
  const author = await Author.findByPk(req.params.id);
  if (author) {
    // If the author is found, send it as a JSON response
    res.json(author);
  } else {
    // If the author is not found, send a 404 status code and a message
    res.status(404).send("Author not found");
  }
}

// Function to handle requests to add a new author
async function addNewAuthor(req, res) {
  // Use the create method on the Author model to create a new author with the data in the request body
  const newAuthor = await Author.create(req.body);
  // Send the new author as a JSON response
  res.json(newAuthor);
}

// Function to handle requests to update an author
async function updateAuthor(req, res) {
  // Use the findByPk method on the Author model to get an author by its primary key (ID)
  const author = await Author.findByPk(req.params.id);
  if (author) {
    // If the author is found, update it with the data in the request body
    await author.update(req.body);
    // Send the updated author as a JSON response
    res.json(author);
  } else {
    // If the author is not found, send a 404 status code and a message
    res.status(404).send("Author not found");
  }
}

// Export the route handler functions
export { getAllAuthors, getAuthorById, addNewAuthor, updateAuthor };