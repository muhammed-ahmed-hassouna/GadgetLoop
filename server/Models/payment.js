const pool = require('../db/db');

class payment {
    
      async payment() {
        try {
          const result = await pool.query('select * from public.payment where id =1');
          return result.rows[0];
        } catch (error) {
          throw error;
        }
      }
    }
    

    module.exports = new payment();