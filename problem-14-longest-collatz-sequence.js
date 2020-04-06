function longestCollatzSequence(limit) {
  let currentSequence = [];
  let longestSequence = [];
  let longestStarting = 1;
  let currentNumber = 0;

  function makeSequence(number){
    currentNumber = number;
    while(currentNumber > 1){
      if(currentNumber % 2 == 0){
      currentSequence.push(currentNumber)
      currentNumber /= 2;
    } else {
      currentSequence.push(currentNumber);
      currentNumber = (currentNumber * 3) +1;
    }
    makeSequence(currentNumber); 
    }
  }

  for(let i = 1; i < limit; i++){
    currentSequence = [];
    makeSequence(i);
    if(currentSequence.length > longestSequence.length){
      longestSequence = currentSequence;
      longestStarting = currentSequence[0];
    }
  }
  return longestStarting;
}

console.log(longestCollatzSequence(5847));
