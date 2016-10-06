'use strict';

const app = require('../app');

const getBooks = () => {
  return $.ajax({
    url: app.host + '/books',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};


module.exports = {
  getBooks,
};
