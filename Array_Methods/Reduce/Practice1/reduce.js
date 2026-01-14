//use reduce method to print the sum of numbers in an array

let array1 =[1,6,8,3,5,9];
let ans = array1.reduce((prev,curr)=>
{
    return prev + curr ;
})

console.log("The sum is:",ans);

//use reduce method to print the greatest number from the array

let array2=[61,54,82,67];
console.log("Elements of array are:");

array2.forEach((i)=>{
    console.log(i);
    
})
let res = array2.reduce((prev,curr)=>
{
    return prev>curr ? prev:curr;
})
    console.log("The greatest number from the array is:",res);

