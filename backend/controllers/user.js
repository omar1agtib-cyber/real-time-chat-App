import User from '../models/user.js';

export const getUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    // all users without the logged user
    const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select('-password');

    res.status(201).send(allUsers)


  } catch (error) {
    console.log('error in getUsers', error.message);
    res.status(500).json({ error: 'server error' });
  }
};
