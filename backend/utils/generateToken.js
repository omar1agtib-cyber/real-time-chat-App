import Jwt from 'jsonwebtoken';

const generateToken = (userId, res) => {
  const token = Jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: '15d',
  });
  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //  15 days in milliseconds
    httpOnly: true, // prevent client access to the cookie
    sameSite: 'strict', // Protect against cross-site scripting attacks
    secure: process.env.NODE_ENV !== 'development'
  });
};

export default generateToken;
