const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET all jobs
router.get('/jobs', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM jobs ORDER BY created_at DESC');
    res.status(200).json({ success: true, jobs: rows });
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// POST a new job
router.post('/jobs', async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ success: false, message: 'Missing title or description' });
  }

  try {
    await db.query('INSERT INTO jobs (title, description) VALUES (?, ?)', [title, description]);
    res.status(201).json({ success: true, message: 'Job added successfully' });
  } catch (err) {
    console.error('Error adding job:', err);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
