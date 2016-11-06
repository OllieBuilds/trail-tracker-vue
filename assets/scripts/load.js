'use strict';

const action = require('./ui');
const app = require('./app-data');

function getAverage(arr) {
  let sum = 0;
  for (let i =0; i < arr.rating.length; i++) {
    console.log(i);
    sum += parseInt(arr[i]);
  }
  // return sum/arr.rating.length;
  return 12;
}

const defaultDisplay = (data) => {
  let randomTrail = new Vue({
    el: '#randomTrail',
    data: {
      trails: data.trails,
    },
    filters: {
      average: function(arr) {
        let sum = 0;
        // console.log(arr.length+"filter arr");
        for (let i =0; i < arr.length; i++) {
          sum += parseInt(arr[i]);
        }
        return sum/arr.length;
      },
    },
    computed: {
      defaultImg: function() {
        console.log(this.trails.thumbnail+"::::thumbn");
        if(this.trails.thumbnail === '' || !this.thumbnail) {
          return 'assets/images/bike-silohuette.jpg';
        } else {
          return this.thumbnail;
        }
      },
    },
  });
};

const defaultLoad = (success, failure) => {
  console.log(app.api);
  $.ajax({
    method: 'GET',
    url: app.api + 'home',
  }).done(function(data) {
    console.log(data);
    success(data);
  })
  .fail(failure);
};

$(document).ready(function() {
  defaultLoad(defaultDisplay, action.failure);
});
