// Haftamu Kahsay
// 12/02/2019
// What is the 10 001st prime number?

findThePrimeNumber();

function findThePrimeNumber() {
    let primeNumber;
    let count = 2;

    for( primeNumber = 3; primeNumber < 2000000; primeNumber++) {
        checkPrimeNumber(primeNumber)? count += primeNumber : false;
    }

    console.log('The sum is ' + count + ' and the last prime number is, "Drammers please ":  ' + primeNumber);
}

function checkPrimeNumber( num ) {
    for( let i = 2; i <= num/2; i++) {
        if( num % i == 0)
            return false;
    }

    return true;
}
