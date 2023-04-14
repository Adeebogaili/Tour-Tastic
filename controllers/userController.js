const User = require('../models/User.js');
// create a user
exports.createUser = async (req, res, next) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: 'Successful',
      data: savedUser,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

//  update user
exports.updateUser = async (req, res, next) => {
  const id = req.params.userId;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: 'Successful',
      data: updateUser,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

//  delete user
exports.deleteUser = async (req, res, next) => {
  const id = req.params.userId;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: `Successfully deleted ${deletedUser.title} user`,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

//  get user by id
exports.getOneUser = async (req, res, next) => {
  const id = req.params.userId;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: 'Successful',
      data: user,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};

//  get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      message: 'Successful',
      data: users,
    });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};
