// For a given array of numbers [1,2,3,4,5], print the square of each 
// value using the forEach loop

let arr =[1,2,3,4,5];


arr.forEach((num) => {
    console.log(num*num);
    
})


//We are given array of marks of students. Filter out of the marks of students that scored 90+.

let marks =[80,77,35,98,73,88,91,69,96];
console.log("Filtering out marks 90+");


marks.forEach((check)=>{
    
    if (check>90) {
        console.log(check);
    }
})