const { auth, db } = require('../../../server');
const functions = require('firebase-functions');

const createCustomerController = async (req, res) => {
  try {
    // if (!(req["uid"] && req["rol"] === 'Super Admin')) {
    //   const message = `Denied access to user creation service.`;
    //   functions.logger.debug(message);
    //   res.status(403).json({ ok: false, message });
    //   return;
    // }
    
    // const { formCustomer } = req.body;
    const {
      fullName,
      address,
      age,
      gender,
    } = req.body;
    const customersRef = db.collection('customers').doc();
    await customersRef.set({
      id: customersRef.id,
      fullName,
      address,
      age,
      gender,
    });
    res.status(200).json({
      ok: true,
      message: `Customer create`
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: `Internal Server Error`,
      error
    })
  }
};




module.exports = createCustomerController;