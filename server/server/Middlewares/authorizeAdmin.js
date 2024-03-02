module.exports = function authorizeAdmin(req, res, next) {
  // check if user is signed in
  if (!req.user)
    return res.status(401).send({ message: "User is not signed in" });

  // check if user is admin
  if (!req.user.isAdmin)
    return res.status(403).send({ message: "You are not an administrator" });

  next();
};
