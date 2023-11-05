const db = require("../db/db");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const bcrypt = require('bcrypt');
const Joi = require('joi');

const registerUser = async (req, res) => {
    // TLD " Top-Level-Domain Like org,gov,edu,maul"
    const { first_name, last_name, email, password, confirm_password, phone_number } = req.body;
    try {
        const schema = Joi.object({
            first_name: Joi.string().min(3).max(25).required(),
            last_name: Joi.string().min(3).max(25).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            phone_number: Joi.string().pattern(new RegExp('^[\\+]?\\d{1,4}[-.\\s]?\\(?(\\d{1,4})\\)?[-.\\s]?\\d{1,9}[-.\\s]?\\d{1,9}$')).min(10).max(12).required(),
            password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&!])[A-Za-z\\d@#$%^&!]{8,12}$')).required(),
            confirm_password: Joi.any().equal(Joi.ref('password')).required()
        });
        const validate = schema.validate({ first_name, last_name, email, password, confirm_password, phone_number });
        if (validate.error) {
            res.status(400).json({ error: validate.error.details })
        } else {
            const checkEmailQuery = "SELECT id FROM users WHERE email = $1";
            const emailCheck = await db.query(checkEmailQuery, [email]);

            const role_id = 1;

            if (emailCheck.rows.length > 0) {
                res.status(400).json({ error: "Email already exists" });
            }
            const hashedPassword = await bcrypt.hash(password, 10);

            const query = `INSERT into users (first_name, last_name, email, password, phone_number,role_id)
         values ($1, $2, $3, $4, $5, $6)
         RETURNING id`;

            const values = [first_name, last_name, email, hashedPassword, phone_number, role_id];
            const user = await db.query(query, values);


            const payload = {
                first_name: values[0],
                last_name: values[1],
                email: values[2],
                user_id: user.rows[0].id,
                role: values[5]
            }
            // console.log(payload);
            // console.log(user);

            const secretKey = process.env.SECRET_KEY;
            const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });

            res.status(200).json({
                validate,
                message: "User added successfully",
                token: token,
                role: role_id
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to add");
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        });

        const validate = schema.validate({ email });
        if (validate.error) {
            res.status(400).json({ error: validate.error.details })
        } else {
            const getUserQuery = "SELECT * FROM users WHERE email = $1";
            const userData = await db.query(getUserQuery, [email]);

            if (userData.rows.length === 0) {
                res.status(400).json({ message: "Email or password is invalid" });
                return;
            }

            const storedHashedPassword = userData.rows[0].password;

            const passwordMatch = await bcrypt.compare(password, storedHashedPassword);

            if (!passwordMatch) {
                res.status(400).json({ message: "Email or password is invalid" });
                return;
            }

            const payload = {
                first_name: userData.rows[0].first_name,
                last_name: userData.rows[0].last_name,
                user_id: userData.rows[0].id,
                email: userData.rows[0].email,
                role: userData.rows[0].role_id
            }
            // console.log(userData);
            // console.log(payload);
            const secretKey = process.env.SECRET_KEY;
            const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });

            res.status(200).json({
                validate,
                message: "Successfully Login",
                token: token,
                role: userData.rows[0].role_id,
                user_id: userData.rows[0].id
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to Authenticate");
    }
};

const updatepassword = async (req, res) => {
    const newPassword = req.body.newPassword;
    const email = req.body.email;
    const confirm_password = req.body.confirm_password;
    const checkEmailQuery = "SELECT id, password FROM users WHERE email = $1";
    const updateQuery = 'UPDATE users SET password = $1 WHERE email = $2';

    try {
        const schema = Joi.object({
            newPassword: Joi.string()
                .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&!])[A-Za-z\\d@#$%^&!]{8,12}$'))
                .required(),
            confirm_password: Joi.any().equal(Joi.ref('newPassword')).required()
        });

        const validate = schema.validate({ newPassword,confirm_password });
        if (validate.error) {
            res.status(400).json({ error: validate.error.details });
        } else {
            const emailCheck = await db.query(checkEmailQuery, [email]);
            if (emailCheck.rows.length > 0) {
                const existingPassword = emailCheck.rows[0].password;
                const passwordMatch = await bcrypt.compare(newPassword, existingPassword);
                if (passwordMatch) {
                    res.status(400).json({
                        message: "You entered the same password as the current one",
                    });
                    // console.log(existingPassword);
                    // console.log(newPassword);
                    // console.log(passwordMatch);
                } else {
                    const hashedPassword = await bcrypt.hash(newPassword, 10);
                    const result = await db.query(updateQuery, [hashedPassword, email]);
                    res.status(200).json({
                        message: 'Password updated successfully',
                    });
                }
            } else {
                res.status(400).json({
                    message: "Email not found",
                });
            }
        }
    } catch (err) {
        console.error('Error updating password:', err);
        res.status(500).json({ error: 'An error occurred while updating the password' });
    }
};

const getUserData = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};



module.exports = {
    registerUser,
    loginUser,
    updatepassword,
    getUserData,
};