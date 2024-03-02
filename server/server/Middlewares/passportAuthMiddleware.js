const passport = require("passport");

module.exports = function passportAuthMiddleware(req, res, next) {
  passport.authenticate(["jwt"], (err, user, info) => {
    if (err) return res.status(500).json(err);
    if (info)
      return res.status(401).json({
        error: { name: info[0].name, message: info[0].message, ...info[0] },
      });
    if (user) req.user = user;
    return next();
  })(req, res, next);
};
