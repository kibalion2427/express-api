
  const dotenv = require('dotenv');

  dotenv.config();
  
  const express = require('express');
  
  const app = express();
  
  const cors = require('cors');
  const bodyParser = require('body-parser');
  const helmet = require('helmet');
  
  const status = require('./status/routes');
  const error = require('./error');
  
  
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use('/status', status);

  app.use(() => {
    error.routeNotFound();
  });
  app.use((err, req, res, next) => {
    error.handleError(err, res, next);
  });
  
  const PORT = process.env.PORT || 8080;
  
  app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
    console.log('Environment variables: ', process.env);
  });
  
  module.exports = app;
  