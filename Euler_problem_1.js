
console.log("Euler\'s problem one :- ");
console.log("Find the sum of all the multiples of 3 or 5 below 1000.")

let sumOfMultiples = 0;

for( let i = 1; i < 1000; i++ )
{
    if( i % 5 == 0 || i % 3 == 0)
        sumOfMultiples += i;
}

console.log(" The sum is : " + sumOfMultiples);