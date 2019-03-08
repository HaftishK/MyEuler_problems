// Haftamu Kahsay
// 11/02/2019
// find the sum of the even-valued Fibonacci sequence terms not exceed four million .

let firstFibonacci =1, secondFibonacci = 2, sum = 0;
let temp;

console.log(" Find the sum of even-valued Fabionacci numbers below four million ");

while(secondFibonacci <= 4000000)
{
    if(secondFibonacci % 2 == 0)
    {
        sum += secondFibonacci;
    }

    temp = secondFibonacci;
    secondFibonacci += firstFibonacci;
    firstFibonacci = temp;
}

console.log(" The sum is : " + sum);