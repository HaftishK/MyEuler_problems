// Haftamu Kahsay
// 13/02/2019
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

let pythagoreanTriplet = findPythagoreanTriplet();
console.log(pythagoreanTriplet.i + " = " + pythagoreanTriplet.i**2  + " \n" + 
    pythagoreanTriplet.j + " = " + pythagoreanTriplet.j**2  + " \n" + 
    pythagoreanTriplet.k +" = " + pythagoreanTriplet.k**2  + " \n");

console.log(pythagoreanTriplet.i * pythagoreanTriplet.j * pythagoreanTriplet.k)
function findPythagoreanTriplet() {
    for(let i = 5; i < 1000;i++) {
        for(let j = i + 1; j < 1000; j++)
        {
            for(let k = j + 1; k < 1000; k++)
            {
                if(k**2 == (i**2 + j**2) && (i + j + k) == 1000)
                    return { i : i, j:j, k:k,};
            }
        }
    }
    return { i : 1, j:2, k:3,};
}