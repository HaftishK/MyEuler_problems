// Haftamu Kahsay
// 11/02/ 2019
// Edited 12/02/ 2019
// Finding the largest palindromic number made by the product of two 3-digit number

findMaxPalindromic();


function findMaxPalindromic() {
    let palinNumber = 0;
    let number1, number2;



    for( let j = 100; j < 999; j++) {
        for( let i = 100; i < 999; i++) {
            let num = i * j;
            if(checkPalindromic( num ))
                if( palinNumber < num)
                {
                    palinNumber = num;
                    number1 = j;
                    number2 = i;
                }
        }
    }
    
    console.log(" Largest palindromic number made by the product of two 3-digit number is : " + palinNumber);
    console.log(" the number who produced this Largest palindromic number are  : " + number1 + " and " + number2);
}


function checkPalindromic( num) {
    let palindromic = String(num);
    for(let i = 0; i < Math.floor(palindromic.length/2); i++) {
        if(palindromic[i] != palindromic[palindromic.length - (i+1)])
            return false;
    }
    return true;
}

