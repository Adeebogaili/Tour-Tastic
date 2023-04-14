const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// register
exports.register = async (req, res, next) => {
  try {
    // hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();

    res.status(200).json({
      sucess: true,
      message: 'Successfully created',
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

// login
exports.login = async (req, res, next) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });

    // if user doesn't exist
    if (!user) {
      res.status(403);
      return next(new Error('Username or Password are incorrect'));
    }

    // if user exist. Check password
    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // if pwassword is incorrect
    if (!checkPassword) {
      res.status(403);
      return next(new Error('Username or Password are incorrect'));
    }

    const { password, role, ...rest } = user._doc;

    // create jwt token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.SECRET,
      { expiresIn: '15d' }
    );

    // set token in the browser cookies and send the response to the client
    res
      .cookie('accessToken', token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        token,
        data: {
          ...rest,
          role
        },
      });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};
