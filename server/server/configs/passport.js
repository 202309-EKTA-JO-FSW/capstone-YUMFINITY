require("dotenv").config();

const JwtStrategy = require("passport-jwt").Strategy;
const SECRET_KEY = process.env.SECRET_KEY;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../Models/user");
const { server_URL } = require("../utils/URLs");

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

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${server_URL}/v1/google/callback`,
      },
      async function verify(accessToken, refreshToken, profile, cb) {
        const userData = profile._json;
        // check if user exists
        const user = await User.findOne({ email: userData.email });
        if (!user) {
          // create new user if not exist
          return (
            User.create({
              username: userData.given_name,
              email: userData.email,
              password_hash: "signed with google",
              firstName: userData.given_name,
              lastName: userData.family_name || userData.given_name,
              profilePicture: userData.picture,
            })
              // return user to callback route or return error
              .then((newUser) => cb(null, newUser))
              .catch((err) => cb(err, null))
          );
        }
        // if found return user
        return cb(null, user);
      },
    ),
  );
}

module.exports = passportStratigies;
