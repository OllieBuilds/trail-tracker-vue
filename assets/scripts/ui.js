'use strict';
// const app = require('../app-data.js');

const success = (data) => {
  console.log(data + ':success');
};

const failure = (data) => {
  console.log(data + ':fail');
};

module.exports = {
  success,
  failure,
};
