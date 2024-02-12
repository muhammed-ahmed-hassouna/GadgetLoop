const pool = require('../db/db');

class Contact {
    async add_contact_us(first_name,last_name,email,message) {
        try {
          const result = await pool.query('INSERT INTO public.contact_us(first_name, last_name, email, message) VALUES ( $1, $2, $3, $4);',[first_name,last_name,email,message]);
          return result.rows[0];
        } catch (error) {
          throw error;
        }
      }
      async all_contact_us() {
        try {
          const result = await pool.query('select * from public.contact_us');
          return result.rows;
        } catch (error) {
          throw error;
        }
      }
    }
    

    module.exports = new Contact();