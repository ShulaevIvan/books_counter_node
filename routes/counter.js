const express = require('express');
const router = express.Router();
const incrCounter = require('../functions/incrCounter');
const getBookCounter = require('../functions/getBookCounter');

router.post('/counter/:bookId/incr', (req, res) => {
    const bookId = req.params.bookId;
    incrCounter(bookId);
    const targetCounter = getBookCounter(bookId);
    res.status(201);
    res.json({'counter': targetCounter});
});

router.get('/counter/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    const targetCounter = getBookCounter(bookId);
    incrCounter(bookId);
    res.status(200);
    res.json({'counter': targetCounter});
});


module.exports = router;