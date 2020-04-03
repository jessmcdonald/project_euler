function largeSum(arr) {
  let sum = 0;

  for(let i = 0; i < arguments.length; i++){
    for(let j = 0; j < arguments[i].length; j++){
      sum += parseInt(arguments[i][j])
    }
  }
  let answ = sum.toString().split("e")[0];
  let finalansw = answ.slice(0, 11) * 1000000000
  return finalansw;
}

// Only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(testNums));
