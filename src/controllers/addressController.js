// controllers/addressController.js

const { checkAddressValid } = require('../services/addressverification/address');
const { generateErrorResponse, generateSuccessResponse } = require('../utils/response');

function checkingAddress(req, res) {
  const address = req.query.address;
  
  if (!address) {
    return res.status(400).json(generateErrorResponse('Address is required'));
  }

  checkAddressValid(address, (error, isValid) => {
    if (error) {
      return res.status(500).json(generateErrorResponse('Internal server error', error.message));
    }

    if (isValid) {
      return res.status(200).json(generateSuccessResponse({ valid: true }));
    } else {
      return res.status(200).json(generateSuccessResponse({ valid: false }));
    }
  });
}

module.exports = { checkingAddress };
