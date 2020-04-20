function powerDigitSum(exponent) {
  let newNum = String(BigInt(Math.pow(2, exponent)));
  let split = newNum.toString().split('');
  let answer = 0;
  for(let i = 0; i < split.length; i++){
    answer += parseInt(split[i])
    
  }
  return answer;
}

console.log(powerDigitSum(128));
