// src/services/addressverification/address.js
const db = require('../../db');

function checkAddressValid(address, callback) {
    const query = 'SELECT * FROM wm_address WHERE address = ?';

    db.query(query, [address], (error, results) => {
      if (error) {
        return callback(error, null);
      }

      if (results.length > 0) {
        return callback(null, true);
      } else {
        return callback(null, false);
      }
    });
}

module.exports = { checkAddressValid };