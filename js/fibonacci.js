function fibonacci(n){
    var a=0,b=1,i,c;

    if(n===0) return 0;
    else if(n===1) return 1;
    else{
        for(i=2;i<=n;i++){
            c=a+b;
            a=b;
            b=c;
        }
        return c;
    }
}

console.log(fibonacci(19));