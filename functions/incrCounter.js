const fs = require('fs');


const incrCounter = (bookId) => {
    const counterData = require(`${process.cwd()}/counterData/counter.json`);
    const checkBook = counterData.books.find((book) => book.id === bookId);
    let value;
    if (!checkBook) value = 1;
    else value = checkBook.value;

    counterData.books = [...counterData.books.filter((item) => item.id !== bookId), {id: bookId, value: value + 1}];
    fs.writeFileSync(`${process.cwd()}/counterData/counter.json`, JSON.stringify(counterData), (err) => err);
};

module.exports = incrCounter;