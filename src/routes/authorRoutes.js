// Importing the Author model from the authorModel.js file
import Author from "../models/authorModel.js";

// Function to handle requests to get all authors
async function getAllAuthors(req, res) {
  try {
    // Use the findAll method on the Author model to find all authors
    const authors = await Author.findAll();
    // Send the authors as a JSON response
    res.json(authors);
  } catch (error) {
    // If there is an error, send the error as a JSON response
    res.json({ error: error.message });
  }
}

// Function to handle requests to get an author by ID
async function getAuthorById(req, res) {
  try {
    // Use the findByPk method on the Author model to find an author by its primary key (ID)
    const author = await Author.findByPk(req.params.id);
    // If an author is found, send it as a JSON response
    if (author) {
      res.json(author);
    } else {
      // If no author is found, send a 404 status code and a message
      res.status(404).send("Author not found");
    }
  } catch (error) {
    // If there is an error, send the error as a JSON response
    res.json({ error: error.message });
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
