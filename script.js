const express = require('express');
const body = require('body-parser')
const app = express();
app.use(body.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signin.html'));
});

app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
app.listen('10001', () => {
    console.log('Server running at port 10000');
});