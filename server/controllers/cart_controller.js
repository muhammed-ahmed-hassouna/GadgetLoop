const db = require('../db/db');

const getCartData = async (req, res) => {
    try {
        const {user_id}=req.body
        const results = await db.query('SELECT cart.product_id,cart.count,product.product_name,product.model,product.price,product.image_url,(product.price * cart.count) AS total FROM cart INNER JOIN product ON cart.product_id = product.id WHERE user_id = $1;',[user_id]);

        const cartItems = results.rows.map((row) => ({
            product_id: row.product_id,
            product_name: row.product_name,
            model: row.model,
            price: row.price,
            count: row.count,
            image_url:row.image_url,
            total: (row.price * row.count)
        }));

        res.json(cartItems);

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

const deleteCartItem = async (req, res) => {
    const  product_id  = req.query.product_id;
    try {
        await db.query('UPDATE cart SET is_deleted = true WHERE product_id = $1' ,[product_id]);
        // await db.query(query, [productId]);
        res.json({ message: 'Product removed from cart' });
    } catch (err) {
        console.error('Error in deleteCartItem:', err);
        res.status(500).send('Internal Server Error');
    }
};
const addCartItem = async (req, res) => {
    const { user_id, product_id } = req.body;

    // Check if the record already exists
    const checkQuery = 'SELECT * FROM public.cart WHERE user_id = $1 AND product_id = $2';
    const checkValues = [user_id, product_id];

    try {
        const checkResult = await db.query(checkQuery, checkValues);

        if (checkResult.rows.length > 0) {
            const insertQuery = 'UPDATE public.cart SET count=count+1 WHERE user_id = $1 AND product_id = $2';
            const insertValues = [user_id, product_id];
            await db.query(insertQuery,insertValues);
  
            res.status(409).json({ message: 'add new item ' });
        } else {
            // The record doesn't exist, proceed to insert
            const insertQuery = 'INSERT INTO public.cart(user_id, product_id) VALUES ($1, $2)';
            const insertValues = [user_id, product_id];

            await db.query(insertQuery, insertValues);
            res.json({ message: 'Item added to the cart successfully' });
        }
    } catch (err) {
        console.error('Error in addCartItem:', err);
        res.status(500).send('Internal Server Error');
    }
};



module.exports = {
    getCartData,
    deleteCartItem,
 addCartItem
    
};
