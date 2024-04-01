const { client_URL } = require("../utils/URLs");
const createTokens = require("../utils/createTokens");

const googleController = {
  signWithGoogle: (req, res) => {
    const user = req.user;
    if (user) {
      const { accessToken, refreshToken } = createTokens(user);
      res.cookie("accessToken", accessToken, {
        // httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 1000 * 10,
      });
      res.cookie("refreshToken", refreshToken, {
        // httpOnly: true,
        secure: true,
        maxAge: 1000 * 10,
        sameSite: "None",
      });
      res.cookie("user", JSON.stringify(user), {
        maxAge: 1000 * 10,
        secure: true,
        sameSite: "None",
      });
      res.redirect(`${client_URL}/auth-user`);
    }
  },

  setCookiesForGoogle: (req, res) => {
    const user = JSON.parse(req.cookies.user);
    const { accessToken, refreshToken } = req.cookies;
    return res.json({ user, accessToken, refreshToken });
  },
};

module.exports = googleController;
