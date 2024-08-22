const express = require('express');
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';
const app = express();
const counterRouter = require('./routes/counter.js');
// const createCounterFolder = require('./functions/createCounterFolder.js');

// createCounterFolder();
app.use(counterRouter);
app.listen(PORT);


console.log(`server started at: \n http://${HOST}:${PORT}`);