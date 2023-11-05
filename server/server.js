const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const session = require("express-session");
const passport = require("passport");
const app = express();

app.use(express.json());
var cors = require('cors');
app.use(cors());

const port = 3001;

app.use(bodyParser.json());

// Use the routes defined in the routes/index.js file
app.use('/', routes);
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const userrouter = require('./routes/user_routes');
const OAuthRouter = require('./routes/OAuth_routes');
const cartController = require('./routes/cart_routes');

app.use(userrouter);
app.use(OAuthRouter);
app.use(cartController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
