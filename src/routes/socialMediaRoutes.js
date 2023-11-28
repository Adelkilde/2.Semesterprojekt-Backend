// Importing the SocialMedia model from the socialMediaModel.js file
import SocialMedia from "../models/socialMediaModel.js";

// Function to handle requests to get all social media links
async function getAllSocialMediaLinks(req, res) {
  try {
    // Use the findAll method on the SocialMedia model to get all social media links from the database
    const socialMediaLinks = await SocialMedia.findAll();
    // Send the social media links as a JSON response
    res.json(socialMediaLinks);
  } catch (error) {
    console.error("Error fetching all social media links:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle requests to get a social media link by ID
async function getSocialMediaLinkById(req, res) {
  try {
    // Use the findByPk method on the SocialMedia model to get a social media link by its primary key (ID)
    const socialMediaLink = await SocialMedia.findByPk(req.params.id);
    if (socialMediaLink) {
      // If the social media link is found, send it as a JSON response
      res.json(socialMediaLink);
    } else {
      // If the social media link is not found, send a 404 status code and a message
      res.status(404).send("Social media link not found");
    }
  } catch (error) {
    console.error("Error fetching social media link by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle requests to add a new social media link
async function addNewSocialMediaLink(req, res) {
  try {
    // Use the create method on the SocialMedia model to create a new social media link with the data in the request body
    const newSocialMediaLink = await SocialMedia.create(req.body);
    // Send the new social media link as a JSON response
    res.json(newSocialMediaLink);
  } catch (error) {
    console.error("Error adding new social media link:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Function to handle requests to update a social media link
async function updateSocialMediaLink(req, res) {
  try {
    // Use the findByPk method on the SocialMedia model to get a social media link by its primary key (ID)
    const socialMediaLink = await SocialMedia.findByPk(req.params.id);
    if (socialMediaLink) {
      // If the social media link is found, update it with the data in the request body
      await socialMediaLink.update(req.body);
      // Send the updated social media link as a JSON response
      res.json(socialMediaLink);
    } else {
      // If the social media link is not found, send a 404 status code and a message
      res.status(404).send("Social media link not found");
    }
  } catch (error) {
    console.error("Error updating social media link:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Export the route handler functions
export {
  getAllSocialMediaLinks,
  getSocialMediaLinkById,
  addNewSocialMediaLink,
  updateSocialMediaLink,
};
