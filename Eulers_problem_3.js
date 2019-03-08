//  Haftamu kahsay
// 11/02/2019
// find the largest prime factor of 600851475143

let num = 600851475143;
let primeFactor;
let  found =false ;

for(let i = 2 ; i < num && !found; i++)
{
    if( num % i == 0)
    {
        primeFactor = num/i;
        found = true;
        for (let j = 2; j < primeFactor && found; j++)
        {
            if(primeFactor%j == 0)
                found = false;
        }
    }
}

if (found)
{
    console.log("We have found the largest prime factor of the number : " + primeFactor);
}
else
{
    console.log(" We can not find any prime factor for this number ");
}