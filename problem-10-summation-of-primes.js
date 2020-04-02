function primeSummation(n) {
  let record = [];
  let primes = [];
  let max = Math.sqrt(n);

  for(let i = 0; i < n; i++){
    record.push(1)
  };

  for(let prime = 2; prime <= max; prime++){
    if(record[prime]){
      for(let multiple = prime * prime; multiple < n; multiple += prime){
        record[multiple] = 0
      }
    }
  }

  for(let j = 2; j < n; j++){
    if(record[j]){
      primes.push(j)
    }
  }

  return primes.reduce((a,b) => a + b, 0)
}

console.log(primeSummation(10));
