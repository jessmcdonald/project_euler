function multiplesOf3and5(number) {
  let sum = null;
  for(let i = 0; i < number; i++){
    if(i % 5 === 0 || i % 3 === 0){
      sum += i
    }
  }
  return sum;
}

console.log(multiplesOf3and5(49));
