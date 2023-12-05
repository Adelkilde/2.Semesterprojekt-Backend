// Importing the News model from the newsModel.js file
import News from "../models/newsModel.js";

// Function to handle requests to get all news
async function getAllNews(req, res) {
  try {
    // Use the findAll method on the News model to get all news
    const news = await News.findAll();
    // Send the news as a JSON response
    res.json(news);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Error retrieving news");
    console.log("Error retrieving news");
  }
}

// Function to handle requests to get news by ID
async function getNewsById(req, res) {
  try {
    // Use the findByPk method on the News model to get news by its primary key (ID)
    const singleNews = await News.findByPk(req.params.id);
    if (!singleNews) {
      // If news is not found, send a 404 status code and a message
      res.status(404).send("News not found");
      console.log("News not found");
      return;
    }
    // Send the news as a JSON response
    res.json(singleNews);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

// Function to handle requests to add a new piece of news
async function addNewNews(req, res) {
  try {
    // Use the create method on the News model to add a new piece of news
    const newNews = await News.create(req.body);
    if (!newNews) {
      // If the new piece of news is null, send a 400 status code and a message
      res.status(400).send("Invalid news data");
      return;
    }
    // Send the new piece of news as a JSON response
    res.json(newNews);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

// Function to handle requests to update news
async function updateNews(req, res) {
  try {
    // Use the findByPk method on the News model to get news by its primary key (ID)
    const singleNews = await News.findByPk(req.params.id);
    if (!singleNews) {
      // If news is not found, send a 404 status code and a message
      res.status(404).send("News not found");
      return;
    }
    // Use the update method on the News model to update news
    await singleNews.update(req.body);
    // Send the updated news as a JSON response
    res.json(singleNews);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

async function deleteNews(req, res) {
  try {
    const singleNews = await News.findByPk(req.params.id);
    if (!singleNews) {
      res.status(404).send("News not found");
      return;
    }
    await singleNews.destroy();
    res.json(singleNews);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

// Export the route handler functions
export { getAllNews, getNewsById, addNewNews, updateNews, deleteNews };
