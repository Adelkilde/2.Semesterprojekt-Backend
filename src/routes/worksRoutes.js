import { Works } from "../models/associations.js";
async function getAllWorks(req, res) {
  try {
    const works = await Works.findAll();
    res.json(works);
  } catch (error) {
    res.status(500).send("Error retrieving works");
  }
}

async function getWorksById(req, res) {
  try {
    const works = await Works.findByPk(req.params.id);
    if (!works) {
      res.status(404).send("Works not found");
      console.log("Works not found");
      return;
    }
    res.json(works);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

async function addNewWork(req, res) {
  try {
    const newWork = await Works.create(req.body);
    if (!newWork) {
      res.status(400).send("Invalid works data");
      return;
    }
    res.json(newWork);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

async function updateWork(req, res) {
  try {
    const works = await Works.findByPk(req.params.id);
    if (!works) {
      res.status(404).send("Works not found");
      console.log("Works not found");
      return;
    }
    await works.update(req.body);
    res.json(works);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

async function deleteWork(req, res) {
  try {
    const works = await Works.findByPk(req.params.id);
    if (!works) {
      res.status(404).send("Works not found");
      console.log("Works not found");
      return;
    }
    await works.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).send("Error deleting works");
  }
}

export { getAllWorks, getWorksById, addNewWork, updateWork, deleteWork };
