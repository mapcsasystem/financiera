const { Router } = require('express');
const createCustomersController = require('./controllers/create-customers.controller');
const getCustomersController = require('./controllers/get-customers.controller');

const router = Router();
router.get('/', getCustomersController);
router.post('/', createCustomersController);

module.exports = router;