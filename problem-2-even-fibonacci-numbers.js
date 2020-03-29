function fiboEvenSum(n) {
  let sum = 0;
  let curr = 1;
  let last = 0;

  while(curr < n){
    if(curr % 2 === 0){
      sum += curr;
    }
    curr += last;
    last = curr - last;
  }
  return sum;
}

console.log(fiboEvenSum(10));

