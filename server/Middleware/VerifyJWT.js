require("dotenv").config();
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) return res.sendStatus(401);

    jwt.verify(
        token,
        process.env.SECRET_KEY,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded;
            next();
        }
    );
}
module.exports = verifyJWT