const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const isAuth = this.authService.getIsAuth();
  const isAdmin = this.authService.getIsAdmin();
  if (isAuth && isAdmin){
    next();
  } else {
    (error) => {
      res.status(401).json({ message: 'Not authorised'});
    }
  }
};

// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   if (!req.user.isAdmin){
//     return res.status(403).json({ message: 'Not authorised'});

//   }
//    next();
// };
