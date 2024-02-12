
const pool = require('../db/db');
  
class BlogModel {
  async add (product_name, descreption,model ,count,rating ,image_url,image_url2,image_url3,image_url4,price,catalog_id) {
    try {
      const result = await pool.query(
        'INSERT INTO Product (product_name, descreption, model ,count,rating,image_url,image_url2,image_url3,image_url4 ,price,catalog_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *',
        [product_name, descreption,  model ,count,rating,image_url,image_url2,image_url3,image_url4,price,catalog_id ]
      );

      
      return result.rows[0];
      
    } catch (error) {
      throw error;
    }
  }

  async getall() {
    try {
      const result = await pool.query('SELECT * FROM public.product;');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
  async search(searchParam) {
    try {
      const searchResults = await search('your_search_term');
console.log(searchResults);

      const result = await pool.query('SELECT * FROM public.product WHERE product_name LIKE $1;', [`%${searchParam}%`]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
  


  async getid(id) {
    try {
      const result = await pool.query(' SELECT * FROM public.product  where id = $1;',[id]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async update(id,product_name, descreption,  model ,count,rating ) {
    try {
      const result = await pool.query(' UPDATE public.product SET  product_name=$2, descreption=$3 , model=$4, rating=$5, count=$6  WHERE id=$1',[id ,product_name, descreption,  model ,count,rating ]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
  async watch() {
    try {
      const result = await pool.query(' SELECT *  FROM public.product  where catalog_id = 4;');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
  async screen() {
    try {
      const result = await pool.query(' SELECT *  FROM public.product  where catalog_id = 3;');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
  async laptop() {
    try {
      const result = await pool.query(' SELECT *  FROM public.product  where catalog_id = 2;');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
  async mobile() {
    try {
      const result = await pool.query(' SELECT *  FROM public.product  where catalog_id = 1;');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new BlogModel();
