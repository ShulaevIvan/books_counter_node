const fs = require('fs');

const incrCounter = (bookId) => {
    const counterData = require(`${process.cwd()}/counterData/counter.json`);
    const checkBook = counterData.books.find((book) => book.id === bookId);
    let value;
    if (!checkBook || checkBook.value === 0) value = 1;
    else if(checkBook){
        value = checkBook.value + 1;
    }

    counterData.books = [...counterData.books.filter((item) => item.id !== bookId), {id: bookId, value: value}];
    fs.writeFileSync(`${process.cwd()}/counterData/counter.json`, JSON.stringify(counterData), (err) => err);
};

module.exports = incrCounter;