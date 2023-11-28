// Importing the ContactMe model from the contactMeModel.js file
import ContactMe from "../models/contactMeModel.js";
// Function to handle requests to get all contact messages
async function getAllContactMessages(req, res) {
  try {
    const contactMessages = await ContactMe.findAll();
    if (contactMessages.length > 0) {
      res.json(contactMessages);
    } else {
      res.status(404).send("Contact messages not found");
      console.error('Contact messages not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error('Error in getAllContactMessages:', error);
  }
}

// Function to handle requests to get a contact message by ID
async function getContactMessageById(req, res) {
  try {
    const contactMessage = await ContactMe.findByPk(req.params.id);
    if (contactMessage) {
      res.json(contactMessage);
    } else {
      res.status(404).json({ error: 'Contact message not found' });
      console.error('Contact message not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error('Error in getContactMessageById:', error);
  }
}

// Function to handle requests to add a new contact message
async function addNewContactMessage(req, res) {
  try {
    const newContactMessage = await ContactMe.create(req.body);
    res.json(newContactMessage);
  } catch (error) {
    res.status(400).json({ error: error.message || 'Bad request' });
    console.error('Error in addNewContactMessage:', error);
  }
}

// Function to handle requests to update a contact message
async function updateContactMessage(req, res) {
  try {
    const contactMessage = await ContactMe.findByPk(req.params.id);
    if (contactMessage) {
      await contactMessage.update(req.body);
      res.json(contactMessage);
    } else {
      res.status(404).json({ error: 'Contact message not found' });
      console.error('Contact message not found');
    }
  } catch (error) {
    res.status(400).json({ error: error.message || 'Bad request' });
    console.error('Error in updateContactMessage:', error);
  }
}

// Export the route handler functions
export { getAllContactMessages, getContactMessageById, addNewContactMessage, updateContactMessage };
