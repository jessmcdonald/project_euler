function divisibleTriangleNumber(n) {
  let currentNumber = 0;
  let currentDivisors = [];
  let firstTriangle = 0;
  let nMax = Math.pow(n,n);

  function listDivisors(triangle){
    let small = [];
    let large = [];
    let max = Math.floor(Math.sqrt(triangle));
    for(let j = 1; j <= max; j++){
      if(triangle % j == 0){
        small.push(j)
        if(j * j != triangle)
          large.push(triangle / j)
      }
    }
    large.reverse();
    return small.concat(large)
  }

  for(let i = 0; i < nMax; i++){
    currentNumber += i;
    currentNumber += 1;
    currentDivisors = listDivisors(currentNumber)

    if(currentDivisors.length >= n){
      firstTriangle = currentNumber;
      break
    }
  }
  return firstTriangle;
}
console.log(divisibleTriangleNumber(5));
