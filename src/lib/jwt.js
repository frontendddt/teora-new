 
import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET || (() => {
  throw new Error('JWT_SECRET is not defined in environment variables');
})();

export function signToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '24h' });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    return null;
  }
  
}
