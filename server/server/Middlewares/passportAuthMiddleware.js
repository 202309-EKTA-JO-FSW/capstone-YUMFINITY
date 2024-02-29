const passport = require("passport");

module.exports = function passportAuthMiddleware(req, res, next) {
  passport.authenticate(["jwt"], (err, user, info) => {
    if (err) return res.status(500).json(err);
    if (info) return res.status(401).json(info);
    if (user) req.user = user;
    return next();
  })(req, res, next);
};
