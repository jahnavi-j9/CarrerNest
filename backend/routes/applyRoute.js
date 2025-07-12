const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path');
const router = express.Router();
const db = require('../db');

// Configure resume file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Submit application
router.post('/submit', upload.single('resume'), (req, res) => {
  const { fullName, email, phone, coverLetter, linkedin, portfolio } = req.body;
  const resumeFilename = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO applications 
    (full_name, email, phone, resume, cover_letter, linkedin, portfolio) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const values = [fullName, email, phone, resumeFilename, coverLetter, linkedin, portfolio];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'DB Error' });
    }
    res.json({ success: true, message: 'Application submitted' });
  });
});

module.exports = router;
