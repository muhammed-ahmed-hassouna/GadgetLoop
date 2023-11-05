const homeModel = require('../Models/home_model');


class HomeModel {
    
  
    async hero(req, res) {
      try {
        const product = await homeModel.hero();
        res.json(product);
      } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
    async top(req, res) {
        try {
          const product = await homeModel.top();
          res.json(product);
        } catch (error) {
          console.error('Error during login:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
   
      async get(req, res) {
        try {
          const product = await homeModel.get();
          res.json(product);
        } catch (error) {
          console.error('Error during login:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
  
    
  }
  module.exports = new HomeModel();
  