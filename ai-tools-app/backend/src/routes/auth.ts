import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

export default router;
