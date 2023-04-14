const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    res.status(401);
    return next(err);
  }

  //   Verify token
  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) {
      res.status(401);
      return next(err);
    }

    req.user = user;
    next(); // don't forget to call next
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === 'admin') {
      next();
    } else {
      res.status(401);
      return next(err);
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === 'admin') {
      next();
    } else {
      res.status(401);
      return next(err);
    }
  });
};
