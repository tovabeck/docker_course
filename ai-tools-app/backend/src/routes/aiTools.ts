import express from 'express';
import { authenticateJWT } from '../middleware/auth';
import { pool } from '../db';

const router = express.Router();

router.get('/', authenticateJWT, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM ai_tools');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: 'Database error' });
  }
});

export default router;
