"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var result = arr.reduce(function (total, item) {
  return total + item;
}, 0);
console.log(result);