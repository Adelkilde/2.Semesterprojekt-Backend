// Importing the ContactMe model from the contactMeModel.js file
import ContactMe from "../models/contactMeModel.js";

// Function to handle requests to get all contact messages
async function getAllContactMessages(req, res) {
  try {
    // Use the findAll method on the ContactMe model to get all contact messages
    const contactMessages = await ContactMe.findAll();
    // Send the contact messages as a JSON response
    res.json(contactMessages);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Error retrieving contact messages");
  }
}

// Function to handle requests to get a contact message by ID
async function getContactMessageById(req, res) {
  try {
    // Use the findByPk method on the ContactMe model to get a contact message by its primary key (ID)
    const contactMessage = await ContactMe.findByPk(req.params.id);
    if (!contactMessage) {
      // If the contact message is not found, send a 404 status code and a message
      res.status(404).send("Contact message not found");
      console.log("Contact message not found");
      return;
    }
    // Send the contact message as a JSON response
    res.json(contactMessage);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

// Function to handle requests to add a new contact message
async function addNewContactMessage(req, res) {
  try {
    // Use the create method on the ContactMe model to add a new contact message
    const newContactMessage = await ContactMe.create(req.body);
    if (!newContactMessage) {
      // If the new contact message is null, send a 400 status code and a message
      res.status(400).send("Invalid contact message data");
      return;
    }
    // Send the new contact message as a JSON response
    res.json(newContactMessage);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

// Function to handle requests to update a contact message
async function updateContactMessage(req, res) {
  try {
    // Use the findByPk method on the ContactMe model to get a contact message by its primary key (ID)
    const contactMessage = await ContactMe.findByPk(req.params.id);
    if (!contactMessage) {
      // If the contact message is not found, send a 404 status code and a message
      res.status(404).send("Contact message not found");
      return;
    }
    // Use the update method on the contact message to update it
    await contactMessage.update(req.body);
    // Send the updated contact message as a JSON response
    res.json(contactMessage);
  } catch (error) {
    // If there's an error, send a 500 status code and a message
    res.status(500).send("Internal Server Error");
  }
}

async function deleteContactMessage(req, res) {
  try {
    const contactMessage = await ContactMe.findByPk(req.params.id);
    if (!contactMessage) {
      res.status(404).send("Contact message not found");
      return;
    }
    await contactMessage.destroy();
    res.json(contactMessage);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

// Export the route handler functions
export {
  getAllContactMessages,
  getContactMessageById,
  addNewContactMessage,
  updateContactMessage,
  deleteContactMessage,
};
