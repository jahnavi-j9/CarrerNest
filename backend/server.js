const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Thanmai5*',
  database: 'gradious',
});

db.connect((err) => {
  if (err) {
    console.error('❌ DB Connection Error:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// Admin Routes
const adminRoute = require('./routes/adminRoute');
app.use('/admin', adminRoute);

// =======================
// JOB ROUTES
// =======================

// GET all jobs
app.get('/jobs/jobs', (req, res) => {
  db.query('SELECT * FROM jobs ORDER BY created_at DESC', (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
    res.json({ success: true, jobs: results });
  });
});

// POST a new job
app.post('/jobs/jobs', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ success: false, message: 'Missing title or description' });
  }

  db.query(
    'INSERT INTO jobs (title, description) VALUES (?, ?)',
    [title, description],
    (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, error: err.message });
      }
      res.json({ success: true, jobId: result.insertId });
    }
  );
});

// DELETE a job by ID
app.delete('/jobs/jobs/:id', (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM jobs WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('❌ Delete error:', err);
      return res.status(500).json({ success: false, error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    res.json({ success: true, message: 'Job deleted successfully' });
  });
});

// =======================

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
