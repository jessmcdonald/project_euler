function smallestMult(n) {

  //function to calculate lowest comon multiple
  function lcm(a,b){
    return (a * b) / gcd(a, b)
  }

  //recursive euclidean function to calculate greatest common divisor
  function gcd(a, b){
    if(b === 0) {
      return a
    }
    return gcd(b, a % b)
  }

  let smallestLCM = 1;
  //get LCM for range 1-n
  for(let i = 2; i <= n; i++){
    smallestLCM = lcm(smallestLCM, i)
  }
  return smallestLCM
}

console.log(smallestMult(20));
