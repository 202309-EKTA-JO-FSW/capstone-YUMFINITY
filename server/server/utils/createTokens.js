const jwt = require("jsonwebtoken");

function createTokens(user) {
  const accessToken = jwt.sign(
    { username: user.username, userId: user._id, isAdmin: user.isAdmin },
    process.env.SECRET_KEY,
    { expiresIn: "15m" },
  );

  const refreshToken = jwt.sign(
    { userId: user._id },
    process.env.REFRESJH_TOKEN_SECRET_KEY,
    { expiresIn: "15d" },
  );

  return { accessToken, refreshToken };
}

module.exports = createTokens;
