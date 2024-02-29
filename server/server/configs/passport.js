const JwtStrategy = require("passport-jwt").Strategy;
const SECRET_KEY = process.env.SECRET_KEY;

const cookieExtractor = function (req) {
  let token;
  if (req && req.cookies) {
    token = req.cookies["accessToken"];
  }
  return token;
};

function passportStratigies(passport) {
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: cookieExtractor,
        secretOrKey: SECRET_KEY,
      },
      (payload, done) => {
        if (payload) return done(null, payload);
        return done(new Error("No Payload"), false);
      },
    ),
  );
}

module.exports = passportStratigies;
