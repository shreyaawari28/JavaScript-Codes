//We are given array of marks of students. Filter out of the marks of students that scored 90+.

let marks =[80,77,35,98,73,88,91,69,96];
console.log("Filtering out marks 90+");


let res =marks.filter((check)=>{
   return check>90
})

console.log(res);
