// Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// a. Remove the first company from the array

// b. Remove Uber & Add Ola in its place

// c. Add Amazon at the end


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log("Original Array: ");
for(let i of companies)
{
    console.log(i);
    
}

let removed = companies.shift();
console.log("Removed: ",removed);

console.log("Updated Array: ");
for(let i of companies)
{
    console.log(i);
    
}


let replace = companies.splice(1,1,"Ola");
console.log("Replaced Uber with Ola: ");

for(let i of companies)
{
    console.log(i);
    
}



let adds = companies.push("Amazon");
console.log("Added Amazon at the end: ");

for(let i of companies)
{
    console.log(i);
    
}



