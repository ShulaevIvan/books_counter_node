const os = require('os');
const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const HOST = os.networkInterfaces().lo[0].address;
const app = express();
const counterRouter = require('./routes/counter.js');
const counterFolder = 'counterData';

if (!fs.existsSync(counterFolder)) fs.mkdirSync('counterData');
if (!fs.existsSync(`${counterFolder}/counter.json`)) {
    fs.appendFileSync(`${counterFolder}/counter.json`, '{"books": []}');

}
app.use(counterRouter);
app.listen(PORT);


console.log(`server started at: \n http://${HOST}:${PORT} \n http://localhost:${PORT}`);