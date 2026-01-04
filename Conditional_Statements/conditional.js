console.log("Conditional Statements");

console.log("if Statement");

let mode="dark";
let bgcolor;

if(mode==="dark")
{
    bgcolor="black";
}

console.log("When mode is black bgcolor is set to:",bgcolor);

console.log("if-else Statement");

 mode="light";

if(mode==="dark")
{
    bgcolor="black";
}
else{
    bgcolor="white";
}

console.log("If mode is dark bgcolor is black else white");


console.log("else if Statement");


if(mode==="dark")
{
    bgcolor="black";
}
else if(mode=="pink"){
    bgcolor="pink";
}
else if(mode=="blue"){
    bgcolor="blue";
}
else{
    bgcolor="white"
}

 console.log("bgcolor",bgcolor);