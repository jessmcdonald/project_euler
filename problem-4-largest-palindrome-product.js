function largestPalindromeProduct(n) {
  let lp = [];

  //get largest number with n digits
  function largestNumber(n) { 
    return Math.pow(10, n) - 1;
    }
  let largest = largestNumber(n);

  //get smallest number with n digits
  let smallest = (largest + 1) / 10;

  //everse a number to check for palindromes later
  function reverseANumber(n) {
    n = n + "";
	  return n.split("").reverse().join("");
  }

  //start with largest * largest, find product and reduce 2nd number by 1 each iteration
  for (let i = largest; i >= smallest; i--) {
    for( let j = largest; i >= smallest; j--){
      
      let num = i * j;
      let reverseNum = reverseANumber(i * j);

      //if product is a palindrome, push to array
      if(num == reverseNum){
        lp.push(num);
        break
      }
    }
  }
  //return highest number from array of palindromes
  return Math.max(...lp);
}

console.log(largestPalindromeProduct(3));
