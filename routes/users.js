const express = require('express');
const {
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
} = require('../controllers/userController.js');
const { verifyAdmin, verifyUser } = require('../utils/verifyToken.js');

const router = express.Router();


// @route   PUT api/users/:userId
// @des     Update a user
// @access  Private
router.put('/:userId', verifyUser, updateUser);

// @route   DELETE api/users/:userId
// @des     Delete a user
// @access  Private
router.delete('/:userId', verifyUser, deleteUser);

// @route   GET api/users/:userId
// @des     Get one user by ID
// @access  Private
router.get('/:userId', verifyUser, getOneUser);

// @route   GET api/users
// @des     Get all users
// @access  Private
router.get('/', verifyAdmin, getAllUsers);

module.exports = router;
