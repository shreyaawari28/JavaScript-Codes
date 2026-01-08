// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

let marks =[85, 97, 44, 37, 76, 60];
let sum =0;
for(let i of marks){
    sum = sum+i;
}

let avg = sum/marks.length
console.log("Average marks of the entire class is", avg);
