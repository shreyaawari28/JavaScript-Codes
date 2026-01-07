// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.

let username = prompt("Enter full name");
username =username.trim();
username = username.replaceAll(" ", "");
username=username.toLowerCase();
let len = username.length
let g_username = "@"+username+len;
let op = `Username is ${g_username}`;
console.log(op);
