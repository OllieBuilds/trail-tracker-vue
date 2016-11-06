'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
require('./page-animations');
require('./load');

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    info: {
      data: "this is data",
    }
  }
});
