// Importing the Author model from the authorModel.js file
import Author from "../models/authorModel.js";

// Function to handle requests to get all authors
async function getAllAuthors(req, res) {
  try {
    // Use the findAll method on the Author model to get all authors from the database
    const authors = await Author.findAll();
    // Send the authors as a JSON response
    res.json(authors);
  } catch (error) {
    // If an error occurs, handle it here
    console.error("Error in getAllAuthors:", error);
    // Send an appropriate error response to the client
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle requests to get an author by ID
async function getAuthorById(req, res) {
  try {
    // Use the findByPk method on the Author model to get an author by its primary key (ID)
    const author = await Author.findByPk(req.params.id);

    if (!author) {
      // If the author is not found, send a 404 status code and a message
      res.status(404).send("Author not found");
      console.log("Author not found");
    }

    // If the author is found, send it as a JSON response
    res.json(author);
  } catch (error) {
    // If an error occurs, handle it here
    console.error("Error in getAuthorById:", error);

    // Send an appropriate error response to the client for other types of errors
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle requests to add a new author
async function addNewAuthor(req, res) {
  try {
    // Use the create method on the Author model to create a new author with the data in the request body
    const newAuthor = await Author.create(req.body);
    // Send the new author as a JSON response
    res.json(newAuthor);
  } catch (error) {
    // If an error occurs, handle it here
    console.error("Error in addNewAuthor:", error);

    // Your existing if-statements can go here
    // For example, checking if the error is due to validation failures
    if (error.name === "SequelizeValidationError") {
      res.status(400).json({ error: "Validation Error", details: error.errors });
    } else {
      // Send an appropriate error response to the client for other types of errors
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

async function updateAuthor(req, res) {
  try {
    // Use the findByPk method on the Author model to get an author by its primary key (ID)
    const author = await Author.findByPk(req.params.id);
    // If the author is found, update it with the data in the request body
    await author.update(req.body);
    // Send the updated author as a JSON response
    res.json(author);
  } catch (error) {
    // If the author is not found, send a 404 status code and a message
    if (error.name === "SequelizeEmptyResultError") {
      res.status(404).send("Author not found");
    } else {
      // If there's an error, send a 500 status code and the error message
      res.status(500).send(error.message);
    }
  }
}

// Export the route handler functions
export { getAllAuthors, getAuthorById, addNewAuthor, updateAuthor };
