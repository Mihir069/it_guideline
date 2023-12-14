const express = require('express');
const mysql = require('mysql2/promise'); 
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mihir@2023',
    database: 'forminfo',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Handling get requests
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signin.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signin.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signup.html'));
});

// Handling post requests
app.post('/signin', async (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let que = "SELECT * FROM logindata WHERE username = ? and password = ?";
        
        const [rows] = await pool.execute(que, [username, password]);

        if (rows.length > 0) {
            res.sendFile(path.join(__dirname, '/public/welcome.html'));
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/signup', async (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let que = "INSERT INTO logindata (username, password) VALUES (?, ?)";
        console.log(username)
        await pool.execute(que, [username, password]);
        res.sendFile(path.join(__dirname, '/public/signin.html'));
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen('10000', () => {
    console.log('Server running at port 3001');
});