const express = require('express');

const router = express.Router();

const controller = require('./controller');

router.get('/', controller.healthcheck);

module.exports = router;
