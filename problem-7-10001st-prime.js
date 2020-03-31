function nthPrime(n) {
  let primes = [2];
  let num = 3;
  let isPrime = true;
  
  //run loop until primes array has length n
  while(primes.length < n){
    //all prime numbers is always <= number's sqrt
    let max = Math.ceil(Math.sqrt(num));

    for(let i = 0; primes[i] <= max; i++){
      if (num % primes[i] == 0){
        isPrime = false;
        break
      }
    }
    //if find prime, push to array
    if(isPrime) {
      primes.push(num);
    }
    isPrime = true;

    //no even number apart from 2 is prime so we can skip
    num += 2
    
  }
  //array index starts at 0
  return primes[n-1];
}

console.log(nthPrime(6));
