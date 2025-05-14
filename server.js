const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./students.db');

app.use(cors());
app.use(bodyParser.json());

db.run(`CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  department TEXT,
  reg INTEGER,
  age INTEGER,
  year INTEGER,
  gpa REAL
)`);

app.post('/submit', (req, res) => {
  const { name, department, reg, age, year, gpa } = req.body;
  db.run(
    `INSERT INTO students (name, department, reg, age, year, gpa)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, department, reg, age, year, gpa],
    function (err) {
      if (err) return res.status(500).send(err.message);
      res.send({ message: 'Student added', id: this.lastID });
    }
  );
});

app.get('/latest', (req, res) => {
  db.get(`SELECT * FROM students ORDER BY id DESC LIMIT 1`, (err, row) => {
    if (err) return res.status(500).send(err.message);
    res.send(row);
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
