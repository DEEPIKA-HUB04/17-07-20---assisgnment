"use strict";

var arr = [11, 27, 30, 44, 53, 69, 77, 80, 95, 101];
var a = arr.filter(function (arr) {
  return arr % 2;
});
console.log(a);