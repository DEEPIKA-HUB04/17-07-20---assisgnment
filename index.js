let arr = [1,2,3,4,5,6];
let result = arr.reduce((total,item) =>{
  return total+item;
},0);
console.log(result);
