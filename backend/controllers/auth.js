import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';

export const signUp = async (req, res) => {
  try {
    const {
      fullName,
      username,
      password,
      confirmPassword,
      gender,
      profilePic,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    //Hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      //generate token
      generateToken(newUser._id, res);

      //  Save the new user to the database
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Couldn't create the account" });
    }
  } catch (error) {
    console.log('Error in SignUp', error.message);
    res.status(500).sjjon({ error: 'Server Error' });
  }
};

export const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({ error: 'Invalid username or password' });

    const validPassowrd = await bcrypt.compare(password, user.password);
    if (!validPassowrd)
      return res.status(400).json({ error: 'Invalid username or password' });

    // Generate a token and send it back with the response
    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
    console.log('first')
  } catch (error) {
    console.log('Error in Login', error.message);
    res.status(500).sjjon({ error: 'Server Error' });
  }
};

export const logOut = (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logged out successfully!' });
  } catch (error) {
    console.log('Error in Logout', error.message);
    res.status(500).sjjon({ error: 'Server Error' });
  }
};
