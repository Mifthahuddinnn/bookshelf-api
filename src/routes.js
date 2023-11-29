const handlers = require('./handler');

module.exports = [
  {
    method: 'POST',
    path: '/books',
    handler: handlers.addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: handlers.getBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: handlers.getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: handlers.updateBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: handlers.deleteBookByIdHandler,
  },
];
