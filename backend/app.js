const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
dotenv.config();
const app = express();
mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(process.env.PORT || 8800) && console.log('Connected to DB and listening'))
.catch((err) => console.log(err));

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('common'));
//routes
const userRoute = require("./route/users")
const authRoute = require("./route/auth");
const postRoute = require("./route/posts")
app.use(("/api/auth"), authRoute);
app.use(("/api/users"), userRoute);
app.use(("/api/posts"), postRoute);
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});