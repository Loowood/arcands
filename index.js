const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client', 'home.html'));
})

app.get('/p5-game', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client', 'p5-game.html'));
});

app.get('/game', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'client', 'game.html'));
})

app.listen(port);
