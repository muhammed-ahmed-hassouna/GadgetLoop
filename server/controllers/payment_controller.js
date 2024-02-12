const homeModel = require('../Models/payment');


class paymentModel {
    
  
    async payment(req, res) {
      try {
        const product = await homeModel.payment();
        res.json(product);
      } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
   
  
    
  }
  module.exports = new paymentModel();
  