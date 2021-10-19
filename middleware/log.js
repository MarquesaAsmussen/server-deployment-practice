'use strict';

// used for middleware
// every time any route is hit, run the specified function
module.exports = function (req, res, next) {
  console.log(req.method);
  // middleware needs to be called.
  next();
};
