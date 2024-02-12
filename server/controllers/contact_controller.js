const contactModel = require('../Models/contact_us');

class Contact_us_Controller {
  async add_contact_us(req, res) {
    try {
      const { first_name,last_name,email,message} = req.body;
      const contact_us = await contactModel.add_contact_us(first_name,last_name,email,message);
      res.status(200).json(contact_us);
    } catch (error) {
      console.error('Error during product addition:', error);
      res.status(400).json({ error: 'Error' });
    }
  }
  async all_contact_us(req, res) {
    try {
      
      const contact_us = await  contactModel.all_contact_us();
      res.status(200).json(contact_us);
    } catch (error) {
      console.error('Error during product addition:', error);
      res.status(400).json({ error: 'Error' });
    }
  }
}
module.exports = new Contact_us_Controller()
    
  
    
