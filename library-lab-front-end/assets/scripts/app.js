
'use strict';

//declare variable app with key api that has a value of our server location
const app = {
  host: 'https://wdi-library.herokuapp.com/books',
  // host: 'http://localhost:3000',
  // user: {
    //id: ?
    //email: ?
    //token: ?
  //};
};

//exports the variable containing the server location to be used in other files.
module.exports = app;
