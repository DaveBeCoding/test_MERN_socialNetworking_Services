const jwt = require('jsonwebtokem');
const config = require('config');

module.exports = function (req, res, next) {
  //token header
  const token = req.header('x-auth-token');

  // confirm token exists
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token found, authorization denied' });
  }
};
