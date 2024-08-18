const express = require('express');
const router = express.Router();
const incrCounter = require('../functions/incrCounter');
const getBookCounter = require('../functions/getBookCounter');

router.post('/counter/:bookId/incr', (req, res) => {
    const bookId = req.params.bookId;
    incrCounter(Number(bookId));
    res.status(201);
    res.json({'status': 'ok post'});
});

router.get('/counter/:bookId', (req, res) => {
    const bookId = req.params.bookId;
    const targetCounter = getBookCounter(Number(bookId));
    res.status(200);
    res.json({'status': targetCounter});
});


module.exports = router;