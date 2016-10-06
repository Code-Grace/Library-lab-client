'use strict';

const app = require('../app');


const signUp = (data) => {
return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data,
  });
};

const signIn = (data) => {
return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data,
  });
};


const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};


module.exports = {
  signIn,
  signUp,
  signOut,
};
