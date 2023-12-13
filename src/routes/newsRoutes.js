import News from "../models/newsModel.js";

async function getAllNews(req, res) {
  try {
    const news = await News.findAll();
    res.json(news);
  } catch (error) {
    res.status(500).send("Error retrieving news");
    console.log("Error retrieving news");
  }
}

async function getNewsById(req, res) {
  try {
    const singleNews = await News.findByPk(req.params.id);
    if (!singleNews) {
      res.status(404).send("News not found");
      console.log("News not found");
      return;
    }
    res.json(singleNews);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

async function addNewNews(req, res) {
  try {
    const newNews = await News.create(req.body);
    if (!newNews) {
      res.status(400).send("Invalid news data");
      return;
    }
    res.json(newNews);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

async function updateNews(req, res) {
  try {
    const singleNews = await News.findByPk(req.params.id);
    if (!singleNews) {
      res.status(404).send("News not found");
      return;
    }
    await singleNews.update(req.body);
    res.json(singleNews);
  } catch (error) {
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
export { getAllNews, getNewsById, addNewNews, updateNews, deleteNews };
