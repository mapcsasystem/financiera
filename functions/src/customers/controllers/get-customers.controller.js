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
    const customersRef = db.collection('customers');
    const snapshot = await customersRef.get();
    let arr = [];
    if (snapshot.empty) {
      res.status(200).json(arr);
    }
    snapshot.forEach(doc => {
      arr.push(doc.data())
    });

    res.status(200).json(
      arr
    )
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: `Internal Server Error`,
      error
    })
  }
};




module.exports = createCustomerController;