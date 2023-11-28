// Importing the News model from the newsModel.js file
import News from "../models/newsModel.js";

// Function to handle requests to get all news
async function getAllNews(req, res) {
  try {
    // Use the findAll method on the News model to get all news from the database
    const news = await News.findAll();
    // Send the news as a JSON response
    res.json(news);
  } catch (error) {
    console.error("Error fetching all news:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle requests to get news by ID
async function getNewsById(req, res) {
  try {
    // Use the findByPk method on the News model to get news by its primary key (ID)
    const singleNews = await News.findByPk(req.params.id);
    if (singleNews) {
      // If news is found, send it as a JSON response
      res.json(singleNews);
    } else {
      // If news is not found, send a 404 status code and a message
      res.status(404).send("News not found");
    }
  } catch (error) {
    console.error("Error fetching news by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle requests to add a new piece of news
async function addNewNews(req, res) {
  try {
    // Use the create method on the News model to create a new piece of news with the data in the request body
    const newNews = await News.create(req.body);
    // Send the new piece of news as a JSON response
    res.json(newNews);
  } catch (error) {
    console.error("Error adding new news:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle requests to update news
async function updateNews(req, res) {
  try {
    // Use the findByPk method on the News model to get news by its primary key (ID)
    const singleNews = await News.findByPk(req.params.id);
    if (singleNews) {
      // If news is found, update it with the data in the request body
      await singleNews.update(req.body);
      // Send the updated news as a JSON response
      res.json(singleNews);
    } else {
      // If news is not found, send a 404 status code and a message
      res.status(404).send("News not found");
    }
  } catch (error) {
    console.error("Error updating news:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Export the route handler functions
export { getAllNews, getNewsById, addNewNews, updateNews };
