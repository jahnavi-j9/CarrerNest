const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",             // ✅ Your MySQL username
  password: "Thanmai5*", // ✅ Your MySQL password
  database: "gradious"       // ✅ The DB name you're using
});

db.connect((err) => {
  if (err) {
    console.error("❌ DB Connection Error:", err);
  } else {
    console.log("✅ DB Connected Successfully");
  }
});

module.exports = db;
