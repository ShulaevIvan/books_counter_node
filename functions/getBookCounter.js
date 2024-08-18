const counterData = require('../counterData/counter.json');

const getBookCounter = (bookId) => {
    const targetBook = counterData.books.find((book) => book.id === bookId);
    if (targetBook) {
        return targetBook.value;
    }
    return -1;
};


module.exports = getBookCounter;