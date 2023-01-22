function isPrime(n) {
    if(n < 2) {
        return false;
    }
        for(let i = 2; i < n; i++){
            if(n % i === 0) {
                return false;
            }

    }
    return true;
}
function sommesNombresPremiers(a, b) {
    if(isPrime(a) && isPrime(b)){
        console.log(a + b);
    }else{
        console.log(false);
    }
}
  
  




