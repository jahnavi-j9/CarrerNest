
# FSN Hackathon Project – Careers Portal

## 🚀 Project Overview

A job application portal built for companies to post job listings and for applicants to apply online with resume uploads. The system is built with a full-stack architecture using HTML, CSS, JavaScript (Frontend), Node.js and Express (Backend), and MySQL (Database).

---

## ✅ Features Implemented

- 📝 Job Application Form with resume upload
- 📩 Form data (Full Name, Email, Phone, LinkedIn, Portfolio, Resume, etc.)
- 💾 Resume uploads stored on the server
- 📦 Form submissions saved in MySQL database
- 🔐 Roles supported: Applicant
- 📃 Validation and server-side handling of `multipart/form-data` using `multer`

---

## 🔧 Tech Stack

**Frontend:**
- HTML5  
- CSS3  
- JavaScript  

**Backend:**
- Node.js  
- Express.js  
- Multer (for file uploads)  

**Database:**
- MySQL

---

## 🛠 How to Run the Project Locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/fsn-careers-portal.git
cd fsn-careers-portal
````

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Create MySQL Database

Login to MySQL and run:

```sql
CREATE DATABASE gradious_db;
USE gradious_db;

CREATE TABLE applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    resume TEXT,
    cover_letter TEXT,
    linkedin VARCHAR(255),
    portfolio VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Start the Backend Server

```bash
node index.js
```

Server will start at: `http://localhost:5000`

### 5. Open the Frontend

Open the `index.html` or your frontend form in a browser. Submit the form – data will be sent to backend and saved in MySQL.

---

## 🚧 Pending Features

* 🔐 Admin Portal to view all submitted applications
* 📥 Download or view resumes from Admin Dashboard
* 🧑‍💼 Role-based login system (Admin / User)

---

## 📂 Folder Structure

```
fsn-careers-portal/
├── backend/
│   ├── index.js
│   ├── uploads/
│   └── package.json
├── frontend/
│   └── index.html
├── README.md
```

---

## 🙋‍♀️ Created By

**Jahnavi Grandhi**

