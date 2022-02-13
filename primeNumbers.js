const param=process.argv.slice(2);
function showPrime(lowNum, highNum) {
    for (let i = lowNum; i < highNum; i++) {
        let isPrime=true;
        for (let j = 2; j < highNum; j++) {
           
            if (i%j===0 && i !== j ) {
                isPrime=false;
            }
            
        }
        if (isPrime) {
            console.log(i);
        }
    }
}
showPrime(param[0],param[1]);

//node primenumbers.js 6 38 === showPrime(6,38)