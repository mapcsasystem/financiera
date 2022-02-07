const functions = require("firebase-functions");
const customers = require('./src/customers/customers');
exports.customers = functions.https.onRequest(customers);
