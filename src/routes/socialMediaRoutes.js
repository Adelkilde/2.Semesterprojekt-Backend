// Importing the SocialMedia model from the socialMediaModel.js file
import SocialMedia from "../models/socialMediaModel.js";

// Function to handle requests to get all social media links
async function getAllSocialMediaLinks(req, res) {
  try {
    // Use the findAll method on the SocialMedia model to get all social media links
    const socialMediaLinks = await SocialMedia.findAll();
    // Send the social media links as a JSON response
    res.json(socialMediaLinks);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Error retrieving social media links");
  }
}

// Function to handle requests to get a social media link by ID
async function getSocialMediaLinkById(req, res) {
  try {
    // Use the findByPk method on the SocialMedia model to get a social media link by its primary key (ID)
    const socialMediaLink = await SocialMedia.findByPk(req.params.id);
    if (!socialMediaLink) {
      // If the social media link is not found, send a 404 status code and a message
      res.status(404).send("Social media link not found");
      console.log("Social media link not found");
      return;
    }
    // Send the social media link as a JSON response
    res.json(socialMediaLink);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

// Function to handle requests to add a new social media link
async function addNewSocialMediaLink(req, res) {
  try {
    // Use the create method on the SocialMedia model to add a new social media link
    const newSocialMediaLink = await SocialMedia.create(req.body);
    if (!newSocialMediaLink) {
      // If the new social media link is null, send a 400 status code and a message
      res.status(400).send("Invalid social media link data");
      return;
    }
    // Send the new social media link as a JSON response
    res.json(newSocialMediaLink);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

// Function to handle requests to update a social media link
async function updateSocialMediaLink(req, res) {
  try {
    // Use the findByPk method on the SocialMedia model to get a social media link by its primary key (ID)
    const socialMediaLink = await SocialMedia.findByPk(req.params.id);
    if (!socialMediaLink) {
      // If the social media link is not found, send a 404 status code and a message
      res.status(404).send("Social media link not found");
      return;
    }
    // Use the update method on the socialMediaLink object to update the social media link
    await socialMediaLink.update(req.body);
    // Send the updated social media link as a JSON response
    res.json(socialMediaLink);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

async function deleteSocialMediaLink(req, res) {
  try {
    const socialMediaLink = await SocialMedia.findByPk(req.params.id);
    if (!socialMediaLink) {
      res.status(404).send("Social media link not found");
      return;
    }
    await socialMediaLink.destroy();
    res.json(socialMediaLink);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

// Export the route handler functions
export {
  getAllSocialMediaLinks,
  getSocialMediaLinkById,
  addNewSocialMediaLink,
  updateSocialMediaLink,
  deleteSocialMediaLink,
};
