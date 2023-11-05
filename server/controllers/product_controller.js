const productModel = require('../Models/product_model');

class ProductController {
  async add(req, res) {
    try {
      const { product_name, descreption, model,  count, rating ,price,catalog_id} = req.body;

    
      
       
      const image_url = req.files['image'][0].filename;
      
  
      const image_url2 = req.files['image'][1].filename;
      
  
      const image_url3 = req.files['image'][2].filename;
      
  
      const image_url4 = req.files['image'][3].filename;
      
    
  
      
  

      const product = await productModel.add(product_name, descreption,  model,  count, rating,image_url ,image_url2,image_url3,image_url4,price,catalog_id);
      res.status(200).json(product);
    } catch (error) {
      console.error('Error during product addition:', error);
      res.status(400).json({ error: 'Error' });
    }
  }

  async getall(req, res) {
    try {
      const product = await productModel.getall();
      res.json(product);
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getid(req, res) {
    try {
      const id = req.query.id;
      const product = await productModel.getid(id);
      res.json(product);
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}  
async update(req, res) {
  try {
    const id = req.query.id;
    const { product_name, descreption, model,  count, rating } = req.body;

    const product = await productModel.update(id, product_name, descreption, model,  count, rating);
    
    res.json(product);
  } catch (error) {
    console.error('Error during update:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async screen(req, res) {
  try {
    const product = await productModel.screen();
    res.json(product);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async laptop(req, res) {
  try {
    const product = await productModel.laptop();
    res.json(product);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async watch(req, res) {
  try {
    const product = await productModel.whatch();
    res.json(product);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
async mobile(req, res) {
  try {
    const product = await productModel.mobile();
    res.json(product);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
  
}

module.exports = new ProductController();
