const express = require('express');
const app = express();
const path = require('path');

// routes
const indexRouter = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter).listen(3000, () => {
    console.log('Listening on port 3000.');
});