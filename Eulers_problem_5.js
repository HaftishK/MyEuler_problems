// Haftamu Kahsay
// 12/02/ 2019
// Finding the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

findTheNumber();

function findTheNumber() {
    let i;
    for( i = 2520; ; i++)
    {
        if(isDivisible(i))
            break;

    }

    console.log("The number is " + i);
}

function isDivisible( num )
{
    for( let i = 2; i <= 20; i++) {
        if( num % i != 0)
            return false;
    }
    return true;
}