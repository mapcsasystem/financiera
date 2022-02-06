const express = require('express');
const cors = require('cors');
// const getUserCredentialsMiddleware = require('../auth.middleware');
const customers = express();

// Automatically allow cross-origin requests
customers.use(cors({ origin: true }));
customers.use(express.json());
// users.use(getUserCredentialsMiddleware);


customers.use('/', require('./customers.routes'));
// Expose Express API as a single Cloud Function:
module.exports = customers;