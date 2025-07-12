const express = require('express');
const router = express.Router();
const db = require('../db');

// Admin login (static credentials)
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin123') {
    res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// View applications
router.get('/applications', (req, res) => {
  const query = 'SELECT * FROM applications ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.status(200).json({ success: true, data: results });
  });
});

module.exports = router;
