//Haftamu Kahsay
//  15/02/2019
//  Find the sum of all the prime numbers below 2 million

let sum = 2;

for(let n = 3; n < 2000000; n++) {
    if(checkPrime(n)) {
        console.log(n)
        sum += n;
    }
}

console.log(sum);

function checkPrime(num) {
    for(let i =2; i <= num/2; i++ ) {
        if(num%i == 0)
            return false;
    }
    return true;
}
