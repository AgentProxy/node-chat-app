const moment = require('moment');

// var date = moment();
// date.add(1, 'year');
// console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var createdAt = 1234;
var time = moment(createdAt);
console.log(time.format('h:mm a'));