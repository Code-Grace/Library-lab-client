'use strict';
const getFormFields = require('../../../lib/get-form-fields.js');
const api = require('./api.js');

const onSignin = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signin(data);
};

const addHandlers = () => {
  $('signin-btn').on('submit', onSignin);
};

module.exports = {
  addHandlers,
};
