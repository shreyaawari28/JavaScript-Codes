//for-of loop on String

let s ="JavaScript";

console.log("Using for-of loop on String:");

for (let val of s)
{
    console.log(val);
}


//for-in loop

const student= {
    name : "Shreya",
    Blood_group : "O+",
    Age : 19,
};


for (let key in student)
{
console.log("Using for-in loop on Object- Key:",key," Value:",student[key]);

}