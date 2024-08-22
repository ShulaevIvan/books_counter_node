const fs = require('fs');

const counterFolder = 'counterData';

const createCounterFolder = () => {
    if (!fs.existsSync(counterFolder)) fs.mkdirSync('counterData');
    if (!fs.existsSync(`${counterFolder}/counter.json`)) {
        fs.appendFileSync(`${counterFolder}/counter.json`, '{"books": []}');
    }
};

module.exports = createCounterFolder;