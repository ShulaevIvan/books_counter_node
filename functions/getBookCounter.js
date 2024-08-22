const getBookCounter = (bookId) => {
    const counterData = require('../counterData/counter.json');
    const targetBook = counterData.books.find((book) => book.id === bookId);
    if (targetBook) {
        return targetBook.value;
    }
};


module.exports = getBookCounter;