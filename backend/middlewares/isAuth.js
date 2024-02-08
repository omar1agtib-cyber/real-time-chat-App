import jwt from 'jsonwebtoken';
import User from '../models/user.js';
const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token)
      return res.status(401).json({ error: 'Unauthorized -No Token Provided' });

    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decode) {
      return res.status(401).json({ error: 'Unauthorized - Token Invalid' });
    }

    const user = await User.findById(decode.userId).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });

    req.user = user;

    next()
  } catch (error) {
    console.log('Error in isAuth middleware', error.message);
    res.status(5000).json({ error: 'Server Error' });
  }
};

export default isAuth;