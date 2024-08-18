const counterData = require('../counterData/counter.json');

const incrCounter = (bookId) => {
    const checkBook = counterData.books.find((book) => book.id === bookId);
    if (!checkBook) {
        counterData.books.push({id: bookId, value: 1});
        return;
    }
    counterData.books = [...counterData.books.filter((item) => item.id !== bookId), {id: bookId, value: checkBook.value + 1}];
};

module.exports = incrCounter;