function isPrime(n){
    for(var i=2;i<n;i++)
    {
        if(n%i ===0) return false;
    }
    return true;
}

console.log("isPrime(32)",isPrime(32));
console.log("isPrime(97)",isPrime(97));
