const express = require('express');
const router = express.Router();

// Example messages
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

// GET home page.
router.get('/', function (req, res, next) {
    res.render('index', { title: "Mini message board", messages: messages });
});

// GET new message form
router.get('/new', function (req, res) {
    res.render('form');
});

// POST new message
router.post('/new', function (req, res) {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect('/');
});

module.exports = router;