const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  //token header
  const token = req.header('x-auth-token');

  // confirm token exists, or if the route is protected
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token found, authorization denied' });
  }

  //There is a token but not valid
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// next set up user object, identifier
// set up login credentials
// identify users logged in to the database
// automatically use web token for each user in DB
