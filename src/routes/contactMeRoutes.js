// Importing the ContactMe model from the contactMeModel.js file
import ContactMe from "../models/contactMeModel.js";

// Function to handle requests to get all contact messages
async function getAllContactMessages(req, res) {
  // Use the findAll method on the ContactMe model to get all contact messages from the database
  const contactMessages = await ContactMe.findAll();
  // Send the contact messages as a JSON response
  res.json(contactMessages);
}

// Function to handle requests to get a contact message by ID
async function getContactMessageById(req, res) {
  // Use the findByPk method on the ContactMe model to get a contact message by its primary key (ID)
  const contactMessage = await ContactMe.findByPk(req.params.id);
  if (contactMessage) {
    // If the contact message is found, send it as a JSON response
    res.json(contactMessage);
  } else {
    // If the contact message is not found, send a 404 status code and a message
    res.status(404).send("Contact message not found");
  }
}

// Function to handle requests to add a new contact message
async function addNewContactMessage(req, res) {
  // Use the create method on the ContactMe model to create a new contact message with the data in the request body
  const newContactMessage = await ContactMe.create(req.body);
  // Send the new contact message as a JSON response
  res.json(newContactMessage);
}

// Function to handle requests to update a contact message
async function updateContactMessage(req, res) {
  // Use the findByPk method on the ContactMe model to get a contact message by its primary key (ID)
  const contactMessage = await ContactMe.findByPk(req.params.id);
  if (contactMessage) {
    // If the contact message is found, update it with the data in the request body
    await contactMessage.update(req.body);
    // Send the updated contact message as a JSON response
    res.json(contactMessage);
  } else {
    // If the contact message is not found, send a 404 status code and a message
    res.status(404).send("Contact message not found");
  }
}

// Export the route handler functions
export { getAllContactMessages, getContactMessageById, addNewContactMessage, updateContactMessage };
