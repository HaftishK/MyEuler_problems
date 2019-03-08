// Haftamu Kahsay
// 12/02/2019
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


calcTheDifference();

function calcTheDifference() {
    console.log("The difference is : " + (calcSquareOfSum(100) - calcSumOfSquare(100)));
}

function calcSquareOfSum (num)
{
    let squareOfTheSum = 0;
    for(let i = 1; i <= num; i++)
        squareOfTheSum += i;
    
    return squareOfTheSum ** 2;
}

function calcSumOfSquare ( num )
{
    let sumOfSquare = 0;
    for( let i = 0; i <= num; i++)
        sumOfSquare += i** 2;

    return sumOfSquare;
}