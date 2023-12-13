import Author from "../models/authorModel.js";

async function getAllAuthors(req, res) {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).send("Error retrieving authors");
    console.log("Error retrieving authors");
  }
}

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
    console.log("Internal Server Error");
  }
}

async function addNewAuthor(req, res) {
  try {
    const newAuthor = await Author.create(req.body);
    if (!newAuthor) {
      res.status(400).send("Invalid author data");
      console.log("Invalid author data");
      return;
    }
    res.json(newAuthor);
  } catch (error) {
    res.status(500).send("Internal Server Error");
    console.log("Internal Server Error");
  }
}

async function updateAuthor(req, res) {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      res.status(404).send("Author not found");
      console.log("Author not found");
      return;
    }
    await author.update(req.body);
    res.json(author);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

async function deleteAuthor(req, res) {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) {
      res.status(404).send("Author not found");
      return;
    }
    await author.destroy();
    res.json(author);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

export { getAllAuthors, getAuthorById, addNewAuthor, updateAuthor, deleteAuthor };
