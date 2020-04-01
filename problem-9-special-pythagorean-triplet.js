function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 let productOfabc = 0;

 for(let a = 1; a < n; a++){
     for(let b = a; b < n; b++){
         if(n - a - b > 0){
             let c = n - a - b;
             if(a**2 + b**2 === c**2){
                productOfabc = a * b * c
                }
         }
     }
 }
 
 return productOfabc;
}

console.log(specialPythagoreanTriplet(1000));
