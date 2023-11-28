// Importing the Author model from the authorModel.js file
import Author from "../models/authorModel.js";

// Function to handle requests to get all authors
async function getAllAuthors(req, res) {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error('Error in getAllAuthors:', error);
  }
}

// Function to handle requests to get an author by ID
async function getAuthorById(req, res) {
  try {
    const author = await Author.findByPk(req.params.id);
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error('Error in getAuthorById:', error);
  }
}

// Function to handle requests to add a new author
async function addNewAuthor(req, res) {
  try {
    const newAuthor = await Author.create(req.body);
    res.json(newAuthor);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error('Error in addNewAuthor:', error);
  }
}

// Function to handle requests to update an author
async function updateAuthor(req, res) {
  try {
    const author = await Author.findByPk(req.params.id);
    await author.update(req.body);
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error('Error in updateAuthor:', error);
  }
}


// Export the route handler functions
export { getAllAuthors, getAuthorById, addNewAuthor, updateAuthor };
