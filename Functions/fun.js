// Qs. Create a function using the "function" keyword that takes a String as an argument &
// returns the number of vowels in the string.

function checkVowels(name){
    let vowels = ['a','e','i','o','u'];
    name = name.toLowerCase();
    let count=0;
    for(let i of name)
    {
        for(let j of vowels)
        {
            if(i == j)
            count ++;
        }
        
    }
    return count;
}


console.log("Using nested loops:", checkVowels("Shreya"));


//Another approach to solve the same problem

function checkVowels(name){
    let vowels = ['a','e','i','o','u'];
    name = name.toLowerCase();
    let count=0;
    for(let i of name)
    {
            if(vowels.includes(i))
            count ++;
    }
    return count;
}
console.log("Using includes method:",checkVowels("Shreya"));


// Qs. Create an arrow function to perform the same task.

const checkingVowels =(name)=>
{
     let vowel = ['a','e','i','o','u'];
    name = name.toLowerCase();
    let count=0;
    for(let i of name)
    {
            if(vowel.includes(i))
            count ++;
    }
    return count;
}
console.log("Using arrow functions:",checkingVowels("Shreya"));

