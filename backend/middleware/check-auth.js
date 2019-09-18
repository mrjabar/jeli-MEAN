const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    req.appUserData = {
      email: decodedToken.email,
      userId: decodedToken.userId,
      fullName: decodedToken.fullName,
      username: decodedToken.username,
      contact: decodedToken.contact,
      isAdmin: decodedToken.isAdmin
    };
    next();
  } catch (error) {
    res.status(401).json({ message: 'You are not authenticated, auth failed!'});
  }
};
