const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');

// engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(8000, () => {
    console.log('running on http://localhost:8000');
})