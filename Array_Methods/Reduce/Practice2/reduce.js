
// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let ip = prompt("Enter a number:");
let arr = [];
for(let n = 1; n <= ip ; n++){

    arr[n-1] = n;
}
console.log("Elements of array are:",arr);

// Use the reduce method to calculate sum of all numbers in the array.

let sum = arr.reduce((prev,curr)=>
{
    return prev + curr ;
})

console.log("The sum is:",sum);

// Use the reduce method to calculate product of all numbers in the array.
let product = arr.reduce((prev,curr)=>
{
    return prev * curr ;
})

console.log("The sum is:",product);

