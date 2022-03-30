const asyncHandler = require('express-async-handler');
const errorHandler = require('../middleware/error-handler.middleware.js ');
const citiesController = require('../cities/cities.controller');
const express = require("express");
const app = express();

app.use('/cities', citiesController);

app.use((err, req, res) => {
    res.status(500).send(err.message);
})

app.listen(3000, () => {
  console.log("Server is running(port 3000))");
});

app.use(errorHandler)
