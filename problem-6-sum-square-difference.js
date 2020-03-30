function sumSquareDifference(n) {
  let arr = [];
  for(let i = 1; i <= n; i++){
    arr.push(i)
  }

  let sumOfSquares = 0;
  for(let j = 0; j < arr.length; j++){
    sumOfSquares += Math.pow(arr[j], 2)
  }

  let squareOfSums = Math.pow(arr.reduce((a,b) => a + b, 0), 2);

  return squareOfSums - sumOfSquares ;
}

console.log(sumSquareDifference(10));
