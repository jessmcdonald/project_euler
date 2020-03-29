function largestPrimeFactor(number) {
  //start with smallest prime
  let prime = 2;
  let largestPrimeFactor = 1;
  //divide number by this smallest prime
  while(prime <= number){
    //if remainder is 0, number can be divided by 2
    if(number % prime == 0){
      largestPrimeFactor = prime;
      //therefoe can set number for next iteration to be (number divided / prime)
      number = number / prime
    } else {
      //if number cannot be divided by prime, try next number
      // increment until number becomes 1
      prime++
    }
  }
  return largestPrimeFactor
}

console.log(largestPrimeFactor(13195));
